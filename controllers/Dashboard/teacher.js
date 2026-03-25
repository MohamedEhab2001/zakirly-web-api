const { Op, fn, col, literal } = require("sequelize");
const models = require("../../models");

/**
 * Teacher Dashboard
 * GET /dashboard/teacher
 * Requires auth middleware (req.auth.id = teacher_id)
 *
 * Returns:
 *  - salesStats: { coursesSold, booksSold, monthlyEarnings, currency }
 *  - balance: { currentBalance, pendingAmount, currency }
 */
const TeacherDashboard = async (req, res) => {
  const teacherId = req.auth.id;

  // ─── 1. Get all courses & books owned by this teacher ───
  const teacherCourses = await models.Course.findAll({
    where: { teacher_id: teacherId },
    attributes: ["id"],
    raw: true,
  });
  const teacherBooks = await models.Book.findAll({
    where: { teacher_id: teacherId },
    attributes: ["id"],
    raw: true,
  });

  const courseIds = teacherCourses.map((c) => c.id);
  const bookIds = teacherBooks.map((b) => b.id);

  // ─── 2. Count sold courses & books from OrderProducts ───
  let coursesSold = 0;
  let booksSold = 0;

  if (courseIds.length > 0) {
    coursesSold = await models.OrderProduct.sum("quantity", {
      where: {
        entity_id: { [Op.in]: courseIds },
        type: "course",
      },
    });
  }

  if (bookIds.length > 0) {
    booksSold = await models.OrderProduct.sum("quantity", {
      where: {
        entity_id: { [Op.in]: bookIds },
        type: "book",
      },
    });
  }

  // Ensure we return 0 instead of null
  coursesSold = coursesSold || 0;
  booksSold = booksSold || 0;

  // ─── 3. Monthly earnings (current month) ───
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const allTeacherEntityIds = [...courseIds, ...bookIds];

  let monthlyEarnings = 0;
  if (allTeacherEntityIds.length > 0) {
    monthlyEarnings = await models.OrderProduct.sum("total", {
      where: {
        entity_id: { [Op.in]: allTeacherEntityIds },
        type: { [Op.in]: ["course", "book"] },
        createdAt: { [Op.gte]: startOfMonth },
      },
    });
  }
  monthlyEarnings = monthlyEarnings || 0;

  // ─── 4. Balance: total earnings (all time delivered) ───
  // currentBalance = total from delivered orders for this teacher's products
  // pendingAmount = total from pending (not delivered) orders
  let currentBalance = 0;
  let pendingAmount = 0;

  if (allTeacherEntityIds.length > 0) {
    // Delivered orders
    const deliveredEarnings = await models.OrderProduct.sum("total", {
      where: {
        entity_id: { [Op.in]: allTeacherEntityIds },
        type: { [Op.in]: ["course", "book"] },
      },
      include: [
        {
          model: models.Order,
          as: "order",
          where: { delevried: true },
          attributes: [],
        },
      ],
    });
    currentBalance = deliveredEarnings || 0;

    // Pending orders
    const pendingEarnings = await models.OrderProduct.sum("total", {
      where: {
        entity_id: { [Op.in]: allTeacherEntityIds },
        type: { [Op.in]: ["course", "book"] },
      },
      include: [
        {
          model: models.Order,
          as: "order",
          where: { delevried: false },
          attributes: [],
        },
      ],
    });
    pendingAmount = pendingEarnings || 0;
  }

  // ─── 5. Get currency from the country header ───
  const country = req.country || "eg";
  let currencySymbol = "ج.م"; // default Egyptian Pound
  if (country === "sa") currencySymbol = "ر.س";
  else if (country === "ae") currencySymbol = "د.إ";
  else if (country === "kw") currencySymbol = "د.ك";

  res.json({
    salesStats: {
      coursesSold,
      booksSold,
      monthlyEarnings,
      currency: currencySymbol,
    },
    balance: {
      currentBalance,
      pendingAmount,
      currency: currencySymbol,
    },
  });
};

module.exports = { TeacherDashboard };

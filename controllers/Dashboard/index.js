const { Op } = require("sequelize");
const OrderService = require("../../services/Order");
const UserService = require("../../services/User");


const DashboardPage = async (req, res) => {
    const doneServant = new OrderService({delevried : true});
    const doneOrders = await doneServant.count();
    const pendingServant = new OrderService({delevried : false});
    const pendingOrders = await pendingServant.count();
    const students = new UserService()
    const studentsCount = await students.count();
    const todayOrders = new OrderService({createdAt : { [Op.gte]: new Date(new Date().setHours(0, 0, 0, 0)) }});
    const todayOrdersData = await todayOrders.getAll();
    res.json({ stats : {doneOrders , pendingOrders , studentsCount } , todayOrdersData });
};

module.exports = {DashboardPage};

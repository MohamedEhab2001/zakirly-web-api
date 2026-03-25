const express = require("express");
const router = express.Router();
const { DashboardPage } = require("../controllers/Dashboard");
const { TeacherDashboard } = require("../controllers/Dashboard/teacher");
const { auth } = require("../middlewares/authMiddleware");

// Admin dashboard (existing)
router.route("/").get(DashboardPage);

// Teacher dashboard (new - requires auth)
router.route("/teacher").get(auth, TeacherDashboard);

module.exports = router;

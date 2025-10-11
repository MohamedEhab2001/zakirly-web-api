const express = require("express");
const router = express.Router();
const {
  DashboardPage,
} = require("../controllers/Dashboard");

router.route("/").get(DashboardPage)

module.exports = router;

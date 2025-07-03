
const express = require("express");
const router = express.Router();
const {
  OrderCreation,
  OrderGetAll,
  OrderGetById,
  OrderUpdate,
} = require("../controllers/Order");

router.route("/")
  .post(OrderCreation)
  .get(OrderGetAll);

router.route("/:id")
  .put(OrderUpdate)
  .get(OrderGetById);

module.exports = router;


const express = require("express");
const router = express.Router();
const {
  OrderProductCreation,
  OrderProductGetAll,
  OrderProductGetById,
  OrderProductUpdate,
} = require("../controllers/OrderProduct");

router.route("/")
  .post(OrderProductCreation)
  .get(OrderProductGetAll);

router.route("/:id")
  .put(OrderProductUpdate)
  .get(OrderProductGetById);

module.exports = router;

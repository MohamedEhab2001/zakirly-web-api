
const express = require("express");
const router = express.Router();
const {
  PricesCreation,
  PricesGetAll,
  PricesGetById,
  PricesUpdate,
} = require("../controllers/Prices");

router.route("/")
  .post(PricesCreation)
  .get(PricesGetAll);

router.route("/:id")
  .put(PricesUpdate)
  .get(PricesGetById);

module.exports = router;

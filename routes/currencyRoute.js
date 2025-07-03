
const express = require("express");
const router = express.Router();
const {
  CurrencyCreation,
  CurrencyGetAll,
  CurrencyGetById,
  CurrencyUpdate,
} = require("../controllers/Currency");

router.route("/")
  .post(CurrencyCreation)
  .get(CurrencyGetAll);

router.route("/:id")
  .put(CurrencyUpdate)
  .get(CurrencyGetById);

module.exports = router;

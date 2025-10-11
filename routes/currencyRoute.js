
const express = require("express");
const router = express.Router();
const {
  CurrencyCreation,
  CurrencyGetAll,
  CurrencyGetById,
  CurrencyUpdate,
  CurrencyDelete,
} = require("../controllers/Currency");

router.route("/")
  .post(CurrencyCreation)
  .get(CurrencyGetAll);

router.route("/:id")
  .put(CurrencyUpdate)
  .get(CurrencyGetById)
  .delete(CurrencyDelete);

module.exports = router;

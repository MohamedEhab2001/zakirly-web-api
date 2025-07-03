
const express = require("express");
const router = express.Router();
const {
  ChoiceCreation,
  ChoiceGetAll,
  ChoiceGetById,
  ChoiceUpdate,
} = require("../controllers/Choice");

router.route("/")
  .post(ChoiceCreation)
  .get(ChoiceGetAll);

router.route("/:id")
  .put(ChoiceUpdate)
  .get(ChoiceGetById);

module.exports = router;

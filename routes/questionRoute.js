
const express = require("express");
const router = express.Router();
const {
  QuestionCreation,
  QuestionGetAll,
  QuestionGetById,
  QuestionUpdate,
} = require("../controllers/Question");

router.route("/")
  .post(QuestionCreation)
  .get(QuestionGetAll);

router.route("/:id")
  .put(QuestionUpdate)
  .get(QuestionGetById);

module.exports = router;


const express = require("express");
const router = express.Router();
const {
  QuestionsAnswerCreation,
  QuestionsAnswerGetAll,
  QuestionsAnswerGetById,
  QuestionsAnswerUpdate,
} = require("../controllers/QuestionsAnswer");

router.route("/")
  .post(QuestionsAnswerCreation)
  .get(QuestionsAnswerGetAll);

router.route("/:id")
  .put(QuestionsAnswerUpdate)
  .get(QuestionsAnswerGetById);

module.exports = router;

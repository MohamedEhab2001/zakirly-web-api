
const express = require("express");
const router = express.Router();
const {
  ExamQuestionCreation,
  ExamQuestionGetAll,
  ExamQuestionGetById,
  ExamQuestionUpdate,
} = require("../controllers/ExamQuestion");

router.route("/")
  .post(ExamQuestionCreation)
  .get(ExamQuestionGetAll);

router.route("/:id")
  .put(ExamQuestionUpdate)
  .get(ExamQuestionGetById);

module.exports = router;

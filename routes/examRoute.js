
const express = require("express");
const router = express.Router();
const {
  ExamCreation,
  ExamGetAll,
  ExamGetById,
  ExamUpdate,
  ExamAddPrice,
  ExamGetQuestionById,
} = require("../controllers/Exam");

router.route("/")
  .post(ExamCreation)
  .get(ExamGetAll);

router.route("/:id/prices")
  .post(ExamAddPrice);

router.route("/:id")
  .put(ExamUpdate)
  .get(ExamGetById);

router.route("/:id/questions")
  .get(ExamGetQuestionById);

module.exports = router;

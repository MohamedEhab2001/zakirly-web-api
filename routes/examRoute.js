
const express = require("express");
const router = express.Router();
const {
  ExamCreation,
  ExamGetAll,
  ExamGetById,
  ExamUpdate,
  ExamAddPrice,
  ExamGetQuestionById,
  ExamDelete,
} = require("../controllers/Exam");

router.route("/")
  .post(ExamCreation)
  .get(ExamGetAll);

router.route("/:id/prices")
  .post(ExamAddPrice);

router.route("/:id")
  .put(ExamUpdate)
  .get(ExamGetById)
  .delete(ExamDelete);

router.route("/:id/questions")
  .get(ExamGetQuestionById);

module.exports = router;

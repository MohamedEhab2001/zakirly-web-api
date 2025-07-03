
const express = require("express");
const router = express.Router();
const {
  ExamCreation,
  ExamGetAll,
  ExamGetById,
  ExamUpdate,
} = require("../controllers/Exam");

router.route("/")
  .post(ExamCreation)
  .get(ExamGetAll);

router.route("/:id")
  .put(ExamUpdate)
  .get(ExamGetById);

module.exports = router;

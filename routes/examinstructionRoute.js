
const express = require("express");
const router = express.Router();
const {
  ExamInstructionCreation,
  ExamInstructionGetAll,
  ExamInstructionGetById,
  ExamInstructionUpdate,
} = require("../controllers/ExamInstruction");

router.route("/")
  .post(ExamInstructionCreation)
  .get(ExamInstructionGetAll);

router.route("/:id")
  .put(ExamInstructionUpdate)
  .get(ExamInstructionGetById);

module.exports = router;


const express = require("express");
const router = express.Router();
const {
  ExamPrerequestCreation,
  ExamPrerequestGetAll,
  ExamPrerequestGetById,
  ExamPrerequestUpdate,
} = require("../controllers/ExamPrerequest");

router.route("/")
  .post(ExamPrerequestCreation)
  .get(ExamPrerequestGetAll);

router.route("/:id")
  .put(ExamPrerequestUpdate)
  .get(ExamPrerequestGetById);

module.exports = router;

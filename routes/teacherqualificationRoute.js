
const express = require("express");
const router = express.Router();
const {
  TeacherQualificationCreation,
  TeacherQualificationGetAll,
  TeacherQualificationGetById,
  TeacherQualificationUpdate,
} = require("../controllers/TeacherQualification");

router.route("/")
  .post(TeacherQualificationCreation)
  .get(TeacherQualificationGetAll);

router.route("/:id")
  .put(TeacherQualificationUpdate)
  .get(TeacherQualificationGetById);

module.exports = router;

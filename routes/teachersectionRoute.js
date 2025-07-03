
const express = require("express");
const router = express.Router();
const {
  TeacherSectionCreation,
  TeacherSectionGetAll,
  TeacherSectionGetById,
  TeacherSectionUpdate,
} = require("../controllers/TeacherSection");

router.route("/")
  .post(TeacherSectionCreation)
  .get(TeacherSectionGetAll);

router.route("/:id")
  .put(TeacherSectionUpdate)
  .get(TeacherSectionGetById);

module.exports = router;

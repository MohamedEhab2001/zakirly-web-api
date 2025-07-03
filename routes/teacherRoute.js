
const express = require("express");
const router = express.Router();
const {
  TeacherCreation,
  TeacherGetAll,
  TeacherGetById,
  TeacherUpdate,
  TeacherDelete,
} = require("../controllers/Teacher");

router.route("/")
  .post(TeacherCreation)
  .get(TeacherGetAll);

router.route("/:id")
  .put(TeacherUpdate)
  .get(TeacherGetById)
  .delete(TeacherDelete);

module.exports = router;

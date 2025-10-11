
const express = require("express");
const router = express.Router();
const {
  TeacherCreation,
  TeacherGetAll,
  TeacherGetById,
  TeacherUpdate,
  TeacherDelete,
  TeacherLogin,
  TeacherProfile,
} = require("../controllers/Teacher");
const { auth } = require("../middlewares/authMiddleware");

router.route("/")
  .post(TeacherCreation)
  .get(TeacherGetAll);
  

router.route("/login")
  .post(TeacherLogin);


router.route("/profile")
  .get(auth,TeacherProfile);


router.route("/:id")
  .put(auth,TeacherUpdate)
  .get(TeacherGetById)
  .delete(TeacherDelete);

module.exports = router;

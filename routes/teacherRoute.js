
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
const {
  TeacherAvailabilityCreation,
  TeacherAvailabilityGetAll,
  TeacherAvailabilityUpdate,
  TeacherAvailabilityDelete,
  TeacherAvailabilityGetById,
} = require("../controllers/TeacherAvailability");
const { auth } = require("../middlewares/authMiddleware");
const teacherAvailabilityRouter = require("../routes/teacheravailabilityRoute");


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

  router.route("/:id/availabilities")
    .get(TeacherAvailabilityGetAll)
    .post(TeacherAvailabilityCreation)
  router.route("/:id/availabilities/:availability_id")
    .put(TeacherAvailabilityUpdate)
    .delete(TeacherAvailabilityDelete)
    .get(TeacherAvailabilityGetById)
module.exports = router;

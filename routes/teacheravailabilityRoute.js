
const express = require("express");
const router = express.Router({mergeParams: true});
const {
  TeacherAvailabilityCreation,
  TeacherAvailabilityGetAll,
  TeacherAvailabilityGetById,
  TeacherAvailabilityUpdate,
  TeacherAvailabilityDelete,
} = require("../controllers/TeacherAvailability");

router.route("/")
  .post(TeacherAvailabilityCreation)
  .get(TeacherAvailabilityGetAll);

router.route("/:id")
  .put(TeacherAvailabilityUpdate)
  .get(TeacherAvailabilityGetById)
  .delete(TeacherAvailabilityDelete);

module.exports = router;

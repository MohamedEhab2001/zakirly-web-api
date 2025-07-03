
const express = require("express");
const router = express.Router();
const {
  TeacherAvailabilityCreation,
  TeacherAvailabilityGetAll,
  TeacherAvailabilityGetById,
  TeacherAvailabilityUpdate,
} = require("../controllers/TeacherAvailability");

router.route("/")
  .post(TeacherAvailabilityCreation)
  .get(TeacherAvailabilityGetAll);

router.route("/:id")
  .put(TeacherAvailabilityUpdate)
  .get(TeacherAvailabilityGetById);

module.exports = router;

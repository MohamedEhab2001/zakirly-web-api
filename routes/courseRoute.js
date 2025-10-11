
const express = require("express");
const router = express.Router();
const {
  CourseCreation,
  CourseGetAll,
  CourseGetById,
  CourseUpdate,
  CourseAddPrice,
} = require("../controllers/Course");

router.route("/")
  .post(CourseCreation)
  .get(CourseGetAll);

router.route("/:id/prices") 
  .post(CourseAddPrice);

router.route("/:id")
  .put(CourseUpdate)
  .get(CourseGetById);

module.exports = router;

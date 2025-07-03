
const express = require("express");
const router = express.Router();
const {
  CoursePrerequestCreation,
  CoursePrerequestGetAll,
  CoursePrerequestGetById,
  CoursePrerequestUpdate,
} = require("../controllers/CoursePrerequest");

router.route("/")
  .post(CoursePrerequestCreation)
  .get(CoursePrerequestGetAll);

router.route("/:id")
  .put(CoursePrerequestUpdate)
  .get(CoursePrerequestGetById);

module.exports = router;

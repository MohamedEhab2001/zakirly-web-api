
const express = require("express");
const router = express.Router();
const {
  CourseBookCreation,
  CourseBookGetAll,
  CourseBookGetById,
  CourseBookUpdate,
} = require("../controllers/CourseBook");

router.route("/")
  .post(CourseBookCreation)
  .get(CourseBookGetAll);

router.route("/:id")
  .put(CourseBookUpdate)
  .get(CourseBookGetById);

module.exports = router;

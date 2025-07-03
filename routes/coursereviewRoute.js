
const express = require("express");
const router = express.Router();
const {
  CourseReviewCreation,
  CourseReviewGetAll,
  CourseReviewGetById,
  CourseReviewUpdate,
} = require("../controllers/CourseReview");

router.route("/")
  .post(CourseReviewCreation)
  .get(CourseReviewGetAll);

router.route("/:id")
  .put(CourseReviewUpdate)
  .get(CourseReviewGetById);

module.exports = router;

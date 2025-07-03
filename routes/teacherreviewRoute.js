
const express = require("express");
const router = express.Router();
const {
  TeacherReviewCreation,
  TeacherReviewGetAll,
  TeacherReviewGetById,
  TeacherReviewUpdate,
} = require("../controllers/TeacherReview");

router.route("/")
  .post(TeacherReviewCreation)
  .get(TeacherReviewGetAll);

router.route("/:id")
  .put(TeacherReviewUpdate)
  .get(TeacherReviewGetById);

module.exports = router;

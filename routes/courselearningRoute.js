
const express = require("express");
const router = express.Router();
const {
  CourseLearningCreation,
  CourseLearningGetAll,
  CourseLearningGetById,
  CourseLearningUpdate,
} = require("../controllers/CourseLearning");

router.route("/")
  .post(CourseLearningCreation)
  .get(CourseLearningGetAll);

router.route("/:id")
  .put(CourseLearningUpdate)
  .get(CourseLearningGetById);

module.exports = router;

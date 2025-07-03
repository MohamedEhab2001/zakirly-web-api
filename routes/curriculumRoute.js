
const express = require("express");
const router = express.Router();
const {
  CurriculumCreation,
  CurriculumGetAll,
  CurriculumGetById,
  CurriculumUpdate,
} = require("../controllers/Curriculum");

router.route("/")
  .post(CurriculumCreation)
  .get(CurriculumGetAll);

router.route("/:id")
  .put(CurriculumUpdate)
  .get(CurriculumGetById);

module.exports = router;

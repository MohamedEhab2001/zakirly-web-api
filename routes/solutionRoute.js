
const express = require("express");
const router = express.Router();
const {
  SolutionCreation,
  SolutionGetAll,
  SolutionGetById,
  SolutionUpdate,
} = require("../controllers/Solution");

router.route("/")
  .post(SolutionCreation)
  .get(SolutionGetAll);

router.route("/:id")
  .put(SolutionUpdate)
  .get(SolutionGetById);

module.exports = router;

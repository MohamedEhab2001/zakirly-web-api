
const express = require("express");
const router = express.Router();
const {
  AgeCreation,
  AgeGetAll,
  AgeGetById,
  AgeUpdate,
} = require("../controllers/Age");

router.route("/")
  .post(AgeCreation)
  .get(AgeGetAll);

router.route("/:id")
  .put(AgeUpdate)
  .get(AgeGetById);

module.exports = router;

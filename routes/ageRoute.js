
const express = require("express");
const router = express.Router();
const {
  AgeCreation,
  AgeGetAll,
  AgeGetById,
  AgeUpdate,
  AgeDelete,
} = require("../controllers/Age");

router.route("/")
  .post(AgeCreation)
  .get(AgeGetAll);

router.route("/:id")
  .put(AgeUpdate)
  .get(AgeGetById)
  .delete(AgeDelete);

module.exports = router;

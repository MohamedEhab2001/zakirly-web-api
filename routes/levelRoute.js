
const express = require("express");
const router = express.Router();
const {
  LevelCreation,
  LevelGetAll,
  LevelGetById,
  LevelUpdate,
} = require("../controllers/Level");

router.route("/")
  .post(LevelCreation)
  .get(LevelGetAll);

router.route("/:id")
  .put(LevelUpdate)
  .get(LevelGetById);

module.exports = router;

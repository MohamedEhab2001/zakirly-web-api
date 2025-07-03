
const express = require("express");
const router = express.Router();
const {
  TeamCreation,
  TeamGetAll,
  TeamGetById,
  TeamUpdate,
} = require("../controllers/Team");

router.route("/")
  .post(TeamCreation)
  .get(TeamGetAll);

router.route("/:id")
  .put(TeamUpdate)
  .get(TeamGetById);

module.exports = router;

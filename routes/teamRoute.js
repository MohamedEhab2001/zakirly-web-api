
const express = require("express");
const router = express.Router();
const {
  TeamCreation,
  TeamGetAll,
  TeamGetById,
  TeamUpdate,
  TeamDelete,
} = require("../controllers/Team");

router.route("/")
  .post(TeamCreation)
  .get(TeamGetAll);

router.route("/:id")
  .put(TeamUpdate)
  .get(TeamGetById)
  .delete(TeamDelete);

module.exports = router;

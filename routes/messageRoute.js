
const express = require("express");
const router = express.Router();
const {
  MessageCreation,
  MessageGetAll,
  MessageGetById,
  MessageUpdate,
} = require("../controllers/Message");

router.route("/")
  .post(MessageCreation)
  .get(MessageGetAll);

router.route("/:id")
  .put(MessageUpdate)
  .get(MessageGetById);

module.exports = router;

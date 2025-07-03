
const express = require("express");
const router = express.Router();
const {
  VideoCreation,
  VideoGetAll,
  VideoGetById,
  VideoUpdate,
} = require("../controllers/Video");

router.route("/")
  .post(VideoCreation)
  .get(VideoGetAll);

router.route("/:id")
  .put(VideoUpdate)
  .get(VideoGetById);

module.exports = router;

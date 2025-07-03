
const express = require("express");
const router = express.Router();
const {
  PlatformCreation,
  PlatformGetAll,
  PlatformGetById,
  PlatformUpdate,
} = require("../controllers/Platform");

router.route("/")
  .post(PlatformCreation)
  .get(PlatformGetAll);

router.route("/:id")
  .put(PlatformUpdate)
  .get(PlatformGetById);

module.exports = router;

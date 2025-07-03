
const express = require("express");
const router = express.Router();
const {
  AvailabilityCreation,
  AvailabilityGetAll,
  AvailabilityGetById,
  AvailabilityUpdate,
} = require("../controllers/Availability");

router.route("/")
  .post(AvailabilityCreation)
  .get(AvailabilityGetAll);

router.route("/:id")
  .put(AvailabilityUpdate)
  .get(AvailabilityGetById);

module.exports = router;

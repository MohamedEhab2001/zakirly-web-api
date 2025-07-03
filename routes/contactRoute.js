
const express = require("express");
const router = express.Router();
const {
  ContactCreation,
  ContactGetAll,
  ContactGetById,
  ContactUpdate,
} = require("../controllers/Contact");

router.route("/")
  .post(ContactCreation)
  .get(ContactGetAll);

router.route("/:id")
  .put(ContactUpdate)
  .get(ContactGetById);

module.exports = router;

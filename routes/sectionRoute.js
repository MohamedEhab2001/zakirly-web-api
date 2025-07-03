
const express = require("express");
const router = express.Router();
const {
  SectionCreation,
  SectionGetAll,
  SectionGetById,
  SectionUpdate,
} = require("../controllers/Section");

router.route("/")
  .post(SectionCreation)
  .get(SectionGetAll);

router.route("/:id")
  .put(SectionUpdate)
  .get(SectionGetById);

module.exports = router;

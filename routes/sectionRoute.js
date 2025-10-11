
const express = require("express");
const router = express.Router();
const {
  SectionCreation,
  SectionGetAll,
  SectionGetById,
  SectionUpdate,
  SectionDelete,
} = require("../controllers/Section");

router.route("/")
  .post(SectionCreation)
  .get(SectionGetAll);

router.route("/:id")
  .put(SectionUpdate)
  .get(SectionGetById)
  .delete(SectionDelete);

module.exports = router;

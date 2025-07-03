
const express = require("express");
const router = express.Router();
const {
  FAQCreation,
  FAQGetAll,
  FAQGetById,
  FAQUpdate,
} = require("../controllers/FAQ");

router.route("/")
  .post(FAQCreation)
  .get(FAQGetAll);

router.route("/:id")
  .put(FAQUpdate)
  .get(FAQGetById);

module.exports = router;

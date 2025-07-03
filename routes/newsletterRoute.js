
const express = require("express");
const router = express.Router();
const {
  NewsletterCreation,
  NewsletterGetAll,
  NewsletterGetById,
  NewsletterUpdate,
} = require("../controllers/Newsletter");

router.route("/")
  .post(NewsletterCreation)
  .get(NewsletterGetAll);

router.route("/:id")
  .put(NewsletterUpdate)
  .get(NewsletterGetById);

module.exports = router;

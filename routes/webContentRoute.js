
const express = require("express");
const router = express.Router();
const {
  WebContentCreation,
  WebContentGetAll,
  WebContentGetById,
  WebContentUpdate,
} = require("../controllers/WebContent");

router
  .route("/")
  .post(WebContentCreation)
  .get(WebContentGetAll);

router
  .route("/:id")
  .put(WebContentUpdate)
  .get(WebContentGetById);

module.exports = router;

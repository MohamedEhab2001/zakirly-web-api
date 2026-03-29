
const express = require("express");
const router = express.Router();
const {
  BookCreation,
  BookGetAll,
  BookGetById,
  BookUpdate,
  BookAddPrice,
  BookDelete
} = require("../controllers/Book");

router.route("/")
  .post(BookCreation)
  .get(BookGetAll);

router.route("/:id/prices")
  .post(BookAddPrice);

router.route("/:id")
  .put(BookUpdate)
  .delete(BookDelete)
  .get(BookGetById);

module.exports = router;

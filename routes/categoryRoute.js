
const express = require("express");
const router = express.Router();
const {
  CategoryCreation,
  CategoryGetAll,
  CategoryGetById,
  CategoryUpdate,
} = require("../controllers/Category");

router.route("/")
  .post(CategoryCreation)
  .get(CategoryGetAll);

router.route("/:id")
  .put(CategoryUpdate)
  .get(CategoryGetById);

module.exports = router;

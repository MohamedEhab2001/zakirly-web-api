
const express = require("express");
const router = express.Router();
const {
  TestimonialCreation,
  TestimonialGetAll,
  TestimonialGetById,
  TestimonialUpdate,
} = require("../controllers/Testimonial");

router.route("/")
  .post(TestimonialCreation)
  .get(TestimonialGetAll);

router.route("/:id")
  .put(TestimonialUpdate)
  .get(TestimonialGetById);

module.exports = router;

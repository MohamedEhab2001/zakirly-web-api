
const express = require("express");
const router = express.Router();
const {
  TestimonialCreation,
  TestimonialGetAll,
  TestimonialGetById,
  TestimonialUpdate,
  TestimonialDelete,
} = require("../controllers/Testimonial");

router.route("/")
  .post(TestimonialCreation)
  .get(TestimonialGetAll);

router.route("/:id")
  .put(TestimonialUpdate)
  .get(TestimonialGetById)
  .delete(TestimonialDelete);

module.exports = router;

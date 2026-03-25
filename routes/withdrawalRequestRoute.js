const express = require("express");
const router = express.Router();
const {
  CreateWithdrawalRequest,
  GetMyWithdrawalRequests,
  GetAllWithdrawalRequests,
  UpdateWithdrawalRequest,
} = require("../controllers/WithdrawalRequest");
const { auth } = require("../middlewares/authMiddleware");

// ── Teacher routes (require JWT auth) ────────────────────────────────────
// POST  /withdrawal-requests          → create new request
// GET   /withdrawal-requests/mine     → teacher's own requests
router.route("/").post(auth, CreateWithdrawalRequest);
router.route("/mine").get(auth, GetMyWithdrawalRequests);

// ── Admin routes (no extra middleware — handled by admin app directly) ────
// GET   /withdrawal-requests          → all requests  (?status=pending|approved|…)
// PUT   /withdrawal-requests/:id      → update status/reference/notes
router.route("/").get(GetAllWithdrawalRequests);
router.route("/:id").put(UpdateWithdrawalRequest);

module.exports = router;

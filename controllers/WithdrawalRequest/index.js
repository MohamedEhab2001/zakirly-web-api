const WithdrawalRequestService = require("../../services/WithdrawalRequest");

// ── Teacher: Create a new withdrawal request ──────────────────────────────
const CreateWithdrawalRequest = async (req, res) => {
  const servant = new WithdrawalRequestService({
    ...req.body,
    teacher_id: req.auth.id,
    status: "pending"
  });
  const record = await servant.create();
  res.status(201).json({ record });
};

// ── Teacher: Get own withdrawal requests ─────────────────────────────────
const GetMyWithdrawalRequests = async (req, res) => {
  const servant = new WithdrawalRequestService();
  const records = await servant.getByTeacher(req.auth.id);
  res.status(200).json({ records });
};

// ── Admin: Get ALL withdrawal requests (optionally filtered by status) ────
const GetAllWithdrawalRequests = async (req, res) => {
  const where = {};
  if (req.query.status) where.status = req.query.status;
  const servant = new WithdrawalRequestService();
  const records = await servant.getAll(where);
  res.status(200).json({ records });
};

// ── Admin: Update status / add reference / admin notes ───────────────────
const UpdateWithdrawalRequest = async (req, res) => {
  const servant = new WithdrawalRequestService(req.body, req.params.id);
  await servant.update();
  const updated = await servant.getById();
  res.status(200).json({ record: updated });
};

module.exports = {
  CreateWithdrawalRequest,
  GetMyWithdrawalRequests,
  GetAllWithdrawalRequests,
  UpdateWithdrawalRequest,
};

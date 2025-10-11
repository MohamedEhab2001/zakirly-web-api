const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {  
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { iat, exp, ...payload } = decoded;
  req.auth = payload;
  next();
};

module.exports = { auth };

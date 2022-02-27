import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Unauthorized");

  try {
    const tokeData = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = tokeData.user;
    next();
  } catch (err) {
    res.status(400).send("invalid token");
  }
}

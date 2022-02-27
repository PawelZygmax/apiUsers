import jwt from "jsonwebtoken";

export async function login(req, res, next) {
  const { email, password } = req.body;
  try {
    if (email === "admin" && password === "admin") {
      const token = jwt.sign({ user: "admin" }, process.env.TOKEN_SECRET);
      res.header("auth-token", token).status(201).send();
    }
    res.status(401).send();
  } catch (err) {
    next(err);
  }
}

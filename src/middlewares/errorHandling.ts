export async function errorHandling(req, res, next) {
  try {
    await next();
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}

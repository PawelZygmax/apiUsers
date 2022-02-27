import { Request, Response, NextFunction } from "express";

const validate = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (err) {
    return res.status(500).json({ type: err.name, message: "something went wrong" });
  }
};

export default validate;

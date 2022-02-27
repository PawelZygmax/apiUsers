import express from "express";
import * as usersController from "../controllers/users.controller";
import validate from "../middlewares/validate";
import createUserSchema from "../validationSchemas/CreateUserSchema";
import updateUserSchema from "../validationSchemas/updateUserSchema";

const router = express.Router();

router.get("/", usersController.getAll);
router.get("/:id", usersController.getOneById);
router.post("/", validate(createUserSchema), usersController.create);
router.patch("/:id", validate(updateUserSchema), usersController.updateWhereId);
router.delete("/:id", usersController.deleteWhereId);

export default router;

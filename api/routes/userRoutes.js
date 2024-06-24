import { Router } from "express";
import UserController from "../controllers/userController";

const userRoutes = Router();
const userController = new UserController()

userRoutes.get("/register", userController.createUser);
userRoutes.put("/:id", userController.updateUser);
userRoutes.get("/:id", userController.readUserById);
userRoutes.delete("/:id", userController.deleteUser);
userRoutes.post("/login", userController.login);

export default productRoutes;
import { Router } from "express";
import UserController from "../controllers/UserController.js"

const userRoutes = Router();
const userController = new UserController()

userRoutes.get("/register", userController.createUser);
userRoutes.put("/:id", userController.updateUser);
userRoutes.get("/:id", userController.readUserById);
userRoutes.delete("/:id", userController.deleteUser);
userRoutes.post("/login", userController.login);

export default productRoutes;

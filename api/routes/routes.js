import { Router } from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/product", productRoutes);

export default routes;
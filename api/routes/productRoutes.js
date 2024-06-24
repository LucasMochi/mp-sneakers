import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const productRoutes = Router();
const productController = new ProductController();

productRoutes.post("/", productController.createProduct);
productRoutes.put("/:id", productController.updateProduct);
productRoutes.get("/:id", productController.readProductById);
productRoutes.delete("/:id", productController.deleteProduct);
productRoutes.post("/:userId/add-fav/:productId", productController.addToFav);
productRoutes.get("/:userId/favs", productController.listUserFavorites);
productRoutes.delete("/:userId/favs/:productId", productController.listFavs);

export default productRoutes;

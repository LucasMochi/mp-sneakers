import { Product, User } from "../models/models.js"

class ProductController {
    
    createProduct = async (req, res) => {
        try {
            const { name, price, image, date, marca, favsCount } = req.body;
            const data = await Product.create({ name, price, image, date, marca, favsCount });
            res.status(201).send({
              success: true,
              message: `Producto creado con exito`,
            });
        } catch (error) {
            res.status(400).send({ succces: false, message: error.message });
        }
    }

    updateProduct = async (req, res) => {
        try {
          const { id } = req.params;
          const { name, price, image, marca } = req.body;
          const data = await Product.update(
            { name, price, image, marca },
            { where: { id } }
          );
          res.status(201).send({
            success: true,
            message: data,
          });
        } catch (error) {
          res.status(400).send({ succces: false, message: error.message });
        }
      };

    readProductById = async (req, res) => {
        try {
          const { id } = req.params;
          const data = await Product.findOne({
            attributes: ["name", "price", "image", "date", "marca", "favsCount"],
            where: { id },
          });
          res.status(201).send({
            success: true,
            message: data,
          });
        } catch (error) {
          res.status(400).send({ succcess: false, message: error.message });
        }
      };

    deleteProduct = async (req, res) => {
        try {
          const { id } = req.params;
          const data = await Product.destroy({
            where: { id },
          });
          res.status(201).send({
            success: true,
            message: data,
          });
        } catch (error) {
          res.status(400).send({ succces: false, message: error.message });
        }
    };

    addToFav = async (req, res) => {
      try {
        const { userId, productId } = req.body;
        const user = await User.findByPk(userId);
        if (!user) {
          return res.status(404).send({ success: false, message: "Usuario no encontrado" });
        }
        const product = await Product.findByPk(productId);
        if (!product) {
          return res.status(404).send({ success: false, message: "Producto no encontrado" });
        }
        await user.addProduct(product);
        res.status(200).send({ success: true, message: "Producto agregado a favoritos exitosamente" });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };

    deleteFromFav = async (userId, productId) => {
      try {
          const user = await User.findByPk(userId);
          if (!user) {
              throw new Error("Usuario no encontrado");
          }
          const product = await Product.findByPk(productId);
          if (!product) {
              throw new Error("Producto no encontrado");
          }
          await user.removeProduct(product);
          return { success: true, message: "Producto eliminado de favoritos" };
      } catch (error) {
          console.error("Error al eliminar producto de favoritos:", error);
          return { success: false, message: error.message };
      }
  };

  listFavs = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findByPk(userId, {
            include: [{
                model: Product,
                attributes: ["name", "price", "image", "marca", ],
            }]
        });

        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        const favoriteProducts = user.Products;
        res.status(200).json({
            success: true,
            message: "Productos favoritos obtenidos correctamente",
            data: favoriteProducts,
        });
    } catch (error) {
        console.error("Error al obtener productos favoritos:", error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
  };
}

export default ProductController
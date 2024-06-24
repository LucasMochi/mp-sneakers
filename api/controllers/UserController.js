import { User, Role } from "../models/models"
import { generateToken, verifyToken } from "../utils/token.js";

class UserController {
    
    createUser = async (req, res) => {
        try {
            const { firstName, lastName, email, password } = req.body;
            const data = await User.create({ firstName, lastName, email, password });
            res.status(201).send({
              data: data,
              success: true,
              message: `Usuario creado con exito`,
            });
        } catch (error) {
            res.status(400).send({ succces: false, message: error.message });
        }
    }

    updateUser = async (req, res) => {
        try {
          const { id } = req.params;
          const { firstName, lastName, email, password } = req.body;
          const data = await User.update(
            { firstName, lastName, email, password },
            { where: { id } }
          );
          res.status(201).send({
            data: data,
            success: true,
            message: `Usuario actualizado con exito`,
          });
        } catch (error) {
          res.status(400).send({ succces: false, message: error.message });
        }
      };

    readUserById = async (req, res) => {
        try {
          const { id } = req.params;
          const data = await User.findOne({
            attributes: ["firstName", "lastName", "email"],
            where: { id },
            include: {
              model: Role,
              attributes: ["name"],
            },
          });
          res.status(201).send({
            success: true,
            message: data,
          });
        } catch (error) {
          res.status(400).send({ succcess: false, message: error.message });
        }
      };

    deleteUser = async (req, res) => {
        try {
          const { id } = req.params;
          const data = await User.destroy({
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

    login = async (req, res) => {
        try {
          const { email, password } = req.body;
          const data = await User.findOne({ where: { email } });
          if (!data) throw new Error("Email incorrecto");
          const validatePassword = await data.validatePassword(password);
          if (!validatePassword) throw new Error("Contraseña Incorrecta");
          const payload = {
            id: data.id,
            name: data.firstName,
          };
          const token = generateToken(payload);
          res.cookie("token", token);
          res.status(200).send({
            success: true,
            message: "Login exitoso",
        });
        } catch (error) {
          res.status(400).send({ succcess: false, message: error.message });
        }
    };

    logout = (req, res) => {
        try {
          res.clearCookie("token");
          res.status(200).send({
            success: true,
            message: "Logout exitoso",
          });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
    };
    
    }

    export default UserController;
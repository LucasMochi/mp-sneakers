import { DataTypes, Model } from "sequelize"
import db from "../connection/connection.js"
import bcrypt from "bcrypt";

class User extends Model {

    validatePassword = async (password) => {
        const validate = bcrypt.compare(password, this.password);
        return validate;
      };
}

    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    is: /^[A-Za-z]+(\s[A-Za-z]+)*$/gi,
                },
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    is: /^[A-Za-z]+(\s[A-Za-z]+)*$/gi,
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [5, 15],
                  },
            }
        },
        {
            sequelize: db,
            modelName: "User",
        }
    )

    User.beforeCreate(async (user, options) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
      });

    export default User;

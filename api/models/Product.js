import { DataTypes, Model } from "sequelize"
import db from "../connection/connection.js"

class Product extends Model {}

    Product.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    is: /^[A-Za-z]+(\s[A-Za-z]+)*$/gi,
                },
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            marca: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            favsCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            sequelize: db,
            modelName: "Product",
            tableName: 'products'
        }

    )

    export default Product;
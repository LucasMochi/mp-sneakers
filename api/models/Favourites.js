import { DataTypes, Model } from "sequelize"
import db from "../connection/connection.js"

class Favourites extends Model {}

    Favourites.init(
        {
            productId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize: db,
            modelName: "Favourites",
            tableName: 'favourites'
        }

    )

    export default Favourites;
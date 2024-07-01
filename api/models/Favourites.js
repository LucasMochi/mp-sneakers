import { DataTypes, Model } from "sequelize"
import db from "../connection/connection.js"

class Favourites extends Model {}

    Favourites.init(
        {
        },
        {
            sequelize: db,
            modelName: "Favourites",
            tableName: 'favourites'
        }

    )

    export default Favourites;
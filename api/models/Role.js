import { DataTypes, Model } from "sequelize";
import db from "../connection/connection.js"

class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    modelName: "Role",
    tableName: 'roles'
  }
);

export default Role;
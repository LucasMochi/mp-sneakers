import { DataTypes, Model } from "sequelize";
import db from "connection/connection.js";

class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    modelName: "Role",
  }
);

export default Role;
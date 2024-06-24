import { Sequelize } from "sequelize";
import {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
} from "../config/config.js";

const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PORT,
});

try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the DB_NAME:", error);
}
export default connection;

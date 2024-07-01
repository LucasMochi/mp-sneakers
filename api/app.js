import express from "express";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import routes from "./routes/routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

await connection.sync({ force: true });

app.listen(SERVER_PORT, () => {
  console.log(`🚀 listen  ${SERVER_PORT}`);
});

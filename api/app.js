import express from "express";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

//app.use(errorNotFound);

await connection.sync({ force: false });

app.listen(SERVER_PORT, () => {
  console.log(`🚀 listen  ${SERVER_PORT}`);
});

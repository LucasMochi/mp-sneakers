import express from "express";
import routes from "./routes/routes.js";
import connection from "./connection/connection.js";
import { DB_PORT } from "./config/config.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/app", routes);

app.use(errorNotFound);

await connection.sync({ force: false });
// await roleSeed()

app.listen(DB_PORT, () => {
  console.log(`🚀 listen  ${DB_PORT}`);
});

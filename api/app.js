require("dotenv").config();

//Dependencies
import express from "express";
const cors = require("cors");
import routes from "./routes/routes.js";

//Instancia de express
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/app", routes);

module.exports = app;

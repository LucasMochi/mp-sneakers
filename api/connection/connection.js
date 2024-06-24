"use strict";

import {
  DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT
} from /config/config.js

require("dotenv").config(); // Carga las variables de entorno
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename); // Obtiene el nombre del archivo actual
const db = {}; // Objeto para almacenar los modelos de la base de datos


// Inicializa una instancia de Sequelize con los parámetros de conexión a la base de datos
let sequelize = new Sequelize(
  DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: DB_DIALECT,
  }
);

// Autentica la conexión a la base de datos
sequelize
  .authenticate()
  .then((db) => {
    console.log("Conexion a la base de datos exitosa.");
  })
  .catch((error) => {
    console.error("No se pudo conectar a la base de datos:", error);
  });


// Lee todos los archivos en el directorio actual y filtra los que sean archivos JavaScript excepto este archivo
fs.readdirSync(__dirname) 
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    // Importa cada modelo y lo inicializa con Sequelize
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

// Establece las asociaciones entre los modelos
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;

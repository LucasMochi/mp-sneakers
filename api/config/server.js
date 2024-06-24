import { PORT } from "../config/config.js"; 

require("dotenv").config();
const app = require("../app");
const debug = require("debug");
const http = require("http");

 // Get al puerto del env y setearlo en express. 

let port = normalizePort(PORT);
app.set("port", port);

 // Crear HTTP server.

let server = http.createServer(app);

 // Listen en el puerto dado.

server.listen(port, () => {
  console.log("server on port: ", port);
});
server.on("error", onError);
server.on("listening", onListening);

 // Normaliza un puerto convirtiéndolo en un número, string o false.

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // Si no es un número, entonces es una named pipe
    return val;
  }

  if (port >= 0) {
    // Si el número es mayor o igual a 0, es un número de puerto válido
    return port;
  }

  return false;
}

 // Maneja errores del server HTTP.

function onError(error) {
  if (error.syscall !== "listen") {
    // Si el error no es por listen, tira error.
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // Maneja errores especificos de listen con mensajes.
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requiere privilegios elevados");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " ya está en uso");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

 // Maneja eventos del tipo listen del server HTTP.

function onListening() {
  let addr = server.address(); // Obtiene la direccion del server.
  let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port; // Determina si es una pipe o un puerto.
  debug("Listening on " + bind); //  Imprime un mensaje de depuración indicando en qué dirección está escuchando el servidor.
}

module.exports = server;

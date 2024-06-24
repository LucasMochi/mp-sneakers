# MP-SNEAKERS

## Descripción
Proyecto para gestionar productos y usuarios utilizando Node.js, Express y Sequelize.

## Instalación
1. Clona el repositorio
    ``` git clone https://github.com/tu-usuario/MP-SNEAKERS.git ```
2. Navega al directorio del proyecto
    ``` cd MP-SNEAKERS/api ```
3. Instala las dependencias
    ``` npm install ```

## Configuración
1. Reemplaza el archivo ".env.example" por ".env" con los valores correctos.

## Ejecución
1. Inicia el servidor:
    ``` npm start ```

## Uso de API:
 ### Usuarios
  - Registro: `POST /api/user/register`
  - Actualización: `PUT /api/user/:id`
  - Obtener por ID: `GET /api/user/:id`
  - Eliminación: `DELETE /api/user/:id`
  - Login: `POST /api/user/login`
  - Logout: `POST /api/user/logout`

 ### Productos
  - Creación: `POST /api/product/`
  - Actualización: `PUT /api/product/:id`
  - Obtener por ID: `GET /api/product/:id`
  - Eliminación: `DELETE /api/product/:id`
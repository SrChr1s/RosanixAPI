# Rosanix API

![Rosanix Logo](/assets/rosanix-logo.png)

API para la aplicación de gestión de tareas Rosanix, desarrollada con Node.js y Express. Esta API permite la autenticación de usuarios y la gestión de tareas a través de un CRUD completo.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Documentación](#documentación)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Licencia](#licencia)
- [Equipo de Desarrollo](#equipo-de-desarrollo)

## Descripción

Rosanix API es la base de una aplicación de gestión de tareas diseñada para facilitar la organización y el seguimiento de tareas personales. La API proporciona funcionalidades de autenticación, autorización y CRUD de tareas. Es mantenida por el grupo de desarrollo **Caleidoscopio**.

## Características

- **Autenticación y Autorización**: Gestionada con JWT y cookies.
- **Gestión de Tareas**: CRUD completo para crear, leer, actualizar y eliminar tareas.
- **Validación de Datos**: Uso de Zod para la validación de esquemas de datos.
- **ORM**: Sequelize como ORM para interactuar con una base de datos MySQL.
- **Documentación**: Documentada con Swagger para facilitar la integración y el uso.

## Instalación

1. Clona el repositorio desde GitHub.

   ```bash
   git clone https://github.com/srchr1s/rosanixapi.git
   ```

2. Ingresa al directorio del proyecto.
   ```bash
   cd rosanixapi
   ```
3. Instala las dependencias.
   ```bash
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto y configura tus variables de entorno.
5. Inicia la aplicación.
   ```bash
   npm start
   ```

## Uso

La API está pensada para servir como backend de la aplicación de gestión de tareas Rosanix. Los endpoints principales incluyen:

- `GET /tasks`: Obtiene todas las tareas del usuario autenticado.
- `GET /tasks/:id`: Obtiene los detalles de una tarea específica.
- `POST /tasks`: Crea una nueva tarea.
- `PUT /tasks/:id`: Actualiza una tarea existente.
- `DELETE /tasks/:id`: Elimina una tarea.

## Estructura del Proyecto

```plaintext
/rosanixapi
├── config/
│   ├── database.cfg.js
│   └── rosanix_db.sql
├── controllers/
│   ├── auth.ctrl.js
│   ├── tasks.ctrl.js
│   └── users.ctrl.js
├── middlewares/
│   ├── auth.middle.js
│   └── val.schema.js
├── models/
│   ├── task.model.js
│   └── user.model.js
├── routes/
│   ├── auth.routes.js
│   ├── tasks.routes.js
│   └── users.routes.js
├── schemas/
│   ├── auth.schemas.js
│   └── task.schemas.js
├── services/
│   └── auth.services.js
├── swagger/
│   ├── swagger.js
│   └── swagger.yml
├── .env
├── LICENSE.txt
├── README.md
└── server.js
```

## Documentación

La documentación de la API está disponible en formato Swagger. Una vez que la API esté en funcionamiento, puedes acceder a la documentación en:

```
http://localhost:4000/api/v1/docs
```

Swagger permite ver y probar los endpoints de la API en un entorno visual y fácil de usar.

## Tecnologías Utilizadas

- **Node.js** y **Express** como base del servidor.
- **Sequelize** para interactuar con la base de datos MySQL.
- **JWT** y **cookie-parser** para autenticación y gestión de sesiones.
- **bcryptjs** para el hash de contraseñas.
- **Zod** para la validación de datos de entrada.
- **dotenv** para la configuración de variables de entorno.
- **Swagger** para la documentación de la API.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Equipo de Desarrollo

**Caleidoscopio** - Un equipo dedicado al desarrollo de aplicaciones prácticas y útiles.

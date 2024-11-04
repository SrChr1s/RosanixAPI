## Descripción del Proyecto

Rosanix es una plataforma web diseñada para la compra de componentes informáticos y el armado de computadoras personales. Este proyecto consiste en una API que facilita la interacción entre el frontend y la base de datos, permitiendo realizar operaciones CRUD y gestionar recursos de manera eficiente.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js que simplifica la creación de aplicaciones.
- **MySQL**: Sistema de gestión de bases de datos relacional.
- **Sequelize**: ORM para Node.js que facilita la interacción con bases de datos SQL.

## Estructura del Proyecto

```
/rosanix-api
├── /config
│   └── config.js        # Configuración de la base de datos y otros parámetros.
├── /controllers
│   └── [controladores].js # Controladores para manejar la lógica de negocio.
├── /models
│   └── [modelos].js      # Definición de modelos de datos utilizando Sequelize.
├── /routes
│   └── [rutas].js        # Definición de las rutas de la API.
├── /middlewares
│   └── [middlewares].js   # Funciones middleware para la API.
├── /utils
│   └── [utilidades].js    # Funciones de utilidad.
├── app.js                # Archivo principal de la aplicación.
└── package.json          # Dependencias y scripts del proyecto.
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/rosanix-api.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd rosanix-api
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor:
   ```bash
   npm start
   ```

## Rutas de la API

| Método | Ruta                 | Descripción                        |
| ------ | -------------------- | ---------------------------------- |
| GET    | `/api/[recurso]`     | Obtener todos los [recursos].      |
| GET    | `/api/[recurso]/:id` | Obtener un [recurso] específico.   |
| POST   | `/api/[recurso]`     | Crear un nuevo [recurso].          |
| PUT    | `/api/[recurso]/:id` | Actualizar un [recurso] existente. |
| DELETE | `/api/[recurso]/:id` | Eliminar un [recurso].             |

## Futuras Mejoras

- **Integración con otras tecnologías**: A medida que el proyecto crezca, se pueden considerar la incorporación de nuevas tecnologías como [indicar tecnologías futuras, e.g., GraphQL, Redis, etc.].
- **Autenticación y Autorización**: Implementar mecanismos de autenticación y autorización para proteger las rutas de la API.
- **Documentación de la API**: Generar documentación interactiva utilizando herramientas como Swagger o Postman.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

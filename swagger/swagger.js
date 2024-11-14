import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Rosanix API",
      version: "1.0.0",
      description:
        "Rosanix API es una API RESTful diseñada para gestionar tareas de manera eficiente. Permite a los usuarios crear, leer, actualizar y eliminar tareas mediante un sistema fácil de usar y seguro. La API está estructurada en torno a la autenticación basada en JSON Web Tokens (JWT), lo que garantiza que solo los usuarios autenticados puedan acceder a sus datos personales y realizar operaciones sobre sus tareas.",
      contact: {
        name: "Caleidoscopio",
      },
      servers: [
        {
          url: "http://localhost:4000/",
          description: "Local server",
        },
      ],
    },
  },
  apis: ["./swagger/swagger.yml"],
};

const specs = swaggerJsdoc(options);
export default specs;

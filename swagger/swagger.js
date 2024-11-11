import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Rosanix API",
      version: "1.0.0",
      description: "API made for the correct functioning of Rosanix website",
      contact: {
        name: "Caleidoscopio",
      },
      servers: [
        {
          url: "http://localhost:4000",
          description: "Local server",
        },
      ],
    },
  },
  apis: ["./swagger/swagger.yml"],
};

const specs = swaggerJsdoc(options);
export default specs;

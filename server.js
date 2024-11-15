import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUI from "swagger-ui-express";
import specs from "./swagger/swagger.js";
import { mysql } from "./config/database.cfg.js";
import { user } from "./models/user.model.js";
import { genHash } from "./services/auth.services.js";
import { authRouter } from "./routes/auth.routes.js";
import { usersRouter } from "./routes/users.routes.js";
import { tasksRouter } from "./routes/tasks.routes.js";
import { adminRouter } from "./routes/admin.routes.js";

const server = express();
const puerto = process.env.PORT || 4000;

server.use(
  cors({
    origin: "https://rosanix-production.up.railway.app/8080",
    credentials: true,
  })
);

server.use(express.json());
server.use(cookieParser());

try {
  await mysql.authenticate();
  console.log("\nSuccessful connection to the database.");
} catch (err) {
  console.log(
    "\n↓ Something went wrong in the attempt to connect to the database.\n\n" +
      err
  );
}

server.use("/api", authRouter);
server.use("/api", usersRouter);
server.use("/api", tasksRouter);
server.use("/api", adminRouter);

// Rehacer la db ***DROPEA TODO***
// await mysql.sync({ force: true });

await mysql.sync();

await user.findOrCreate({
  where: {
    id: 1,
  },
  defaults: {
    name: "Administrador",
    email: "admin@rosanix.com",
    passw: await genHash("rosanixadmin"),
    role: 1,
    active: 1,
    codeEmail: null,
  },
});

server.use(
  "/api/v1/docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, {
    customSiteTitle: "Rosanix API",
    customCss: ".swagger-ui .auth-wrapper { display: none }",
  })
);

server.listen(puerto, () => {
  console.log(`\nServer listening on ${puerto}\n`);
});

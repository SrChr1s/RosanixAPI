import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUI from "swagger-ui-express";
import specs from "./swagger/swagger.js";
import { mysql } from "./config/database.cfg.js";
import { authRouter } from "./routes/auth.routes.js";
import { usersRouter } from "./routes/users.routes.js";
import { tasksRouter } from "./routes/tasks.routes.js";
import { adminRouter } from "./routes/admin.routes.js";

const server = express();
const puerto = 4000;
const ip = "localhost";

server.use(
  cors({
    origin: `http://${ip}:5173`,
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

server.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(specs));

server.listen(puerto, ip, () => {
  console.log(`\nServer listening on http://localhost:${puerto}/api/\n`);
});

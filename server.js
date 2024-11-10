import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { mysql } from "./config/database.cfg.js";
import { authRouter } from "./routes/auth.routes.js";
import { usersRouter } from "./routes/users.routes.js";
import { tasksRouter } from "./routes/tasks.routes.js";

const server = express();
const puerto = 4000;
const ip = "localhost";

server.use(cors());
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

await mysql.sync();

server.listen(puerto, ip, () => {
  console.log(`\nServer listening on http://localhost:${puerto}/api/\n`);
});

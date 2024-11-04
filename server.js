import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { mysql } from "./config/database.cfg.js";
import { authRouter } from "./routes/auth.routes.js";

const server = express();
const puerto = 4000;

server.use(cors());
server.use(express.json());
server.use(cookieParser());

try {
  await mysql.authenticate();
  console.log("Successful connection to the database.");
} catch (err) {
  console.log(
    "↓ Something went wrong in the attempt to connect to the database.\n\n" +
      err
  );
}

server.use("/api", authRouter);

server.listen(puerto, () => {
  console.log(`\nServer listening on http://localhost:${puerto}/api/\n`);
});

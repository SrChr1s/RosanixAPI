import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const mysql = new Sequelize(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPASS,
  {
    dialect: "mysql",
    host: process.env.HOST || "localhost",
    port: process.env.HOST || 3306,
    logging: false,
  }
);

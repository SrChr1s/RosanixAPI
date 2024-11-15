import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const mysql = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    dialect: "mysql",
    host: process.env.MYSQLHOST || "localhost",
    port: process.env.MYSQLPORT || 3306,
    logging: false,
  }
);

import { mysql } from "../config/database.cfg.js";
import { DataTypes } from "sequelize";

export const task = mysql.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descr: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    state: {
      type: DataTypes.ENUM("pendiente", "completada"),
      allowNull: false,
      defaultValue: "pendiente",
    },
    priority: {
      type: DataTypes.ENUM("baja", "media", "alta"),
      allowNull: false,
      defaultValue: "media",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "SET NULL", // ???
    },
  },
  { timestamps: false }
);

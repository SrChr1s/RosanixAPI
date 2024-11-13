import { task } from "../models/task.model.js";
import { user } from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  const users = await user.findAll();

  if (!users) return res.status(404).json(["No existen usuarios"]);

  res.status(200).json(users);
};

export const getOneUserById = async (req, res) => {
  const userFound = await user.findByPk(req.user.id);

  if (!userFound) return res.status(404).json(["Usuario no encontrado!"]);

  res.status(200).json({
    name: userFound.name,
    email: userFound.email,
    createdAt: userFound.createdAt,
  });
};

export const getAllTasks = async (req, res) => {
  const tasks = await task.findAll();

  if (!tasks) return res.status(404).json(["No existen tareas"]);

  res.status(200).json(tasks);
};

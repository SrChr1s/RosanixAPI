import { task } from "../models/task.model.js";
import { user } from "../models/user.model.js";
import { genHash } from "../services/auth.services.js";

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

export const createOneUser = async (req, res) => {
  const { name, email, passw, role } = req.body;

  const userFound = await user.findOne({ where: { email } });

  if (userFound) return res.status(400).json(["Este usuario ya existe"]);

  try {
    const newUser = await user.create({
      name,
      email,
      passw: await genHash(passw),
      role,
      active: 1,
      codeEmail: null,
    });

    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const getAllTasks = async (req, res) => {
  const tasks = await task.findAll();

  if (!tasks) return res.status(404).json(["No existen tareas"]);

  res.status(200).json(tasks);
};

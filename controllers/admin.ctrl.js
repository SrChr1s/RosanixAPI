import { user } from "../models/user.model.js";

export const getOneUserById = async (req, res) => {
  const userFound = await user.findByPk(req.user.id);

  if (!userFound) return res.status(404).json(["Usuario no encontrado!"]);

  return res.status(200).json({
    name: userFound.name,
    email: userFound.email,
    createdAt: userFound.createdAt,
  });
};

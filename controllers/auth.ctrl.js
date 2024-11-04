import { user } from "../models/user.model.js";
import { cmpPass, genHash, genToken } from "../services/auth.services.js";
import { Op } from "sequelize";

export const login = async (req, res) => {
  const { email, passw } = req.body;

  const userFound = await user.findOne({ where: { email } });

  if (!userFound)
    return res.status(404).json(["We were unable to find this account."]);

  try {
    const match = await cmpPass(passw, userFound.passw);

    if (!match) return res.status(400).json(["Invalid credentials."]);

    const token = genToken(userFound);

    res.cookie("access_token", token);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const register = async (req, res) => {
  const { name, email, passw } = req.body;

  const userFound = await user.findOne({
    where: { [Op.or]: [{ email }] },
  });

  if (userFound)
    return res.status(400).json(["This account is already registered."]);

  try {
    const newUser = await user.create({
      name,
      email,
      passw: await genHash(passw),
    });

    const token = await genToken(newUser);

    res.cookie("access_token", token);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const logout = async (req, res) => {
  res.cookie("access_token", null, { expires: new Date(0) });
  res.sendStatus(204);
};

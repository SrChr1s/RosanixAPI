import { user } from "../models/user.model.js";
import {
  cmpPass,
  genHash,
  genToken,
  verToken,
} from "../services/auth.services.js";
import { sendConfirmationEmail } from "../services/nodemailer.js";

export const login = async (req, res) => {
  const { email, passw } = req.body;

  const userFound = await user.findOne({ where: { email } });

  if (!userFound) return res.status(400).json(["Credenciales invalidas."]);

  try {
    const match = await cmpPass(passw, userFound.passw);

    if (!match) return res.status(400).json(["Credenciales invalidas."]);

    const token = await genToken(userFound);

    res.cookie("access_token", token);

    res.status(200).json({
      name: userFound.name,
      email: userFound.email,
      role: userFound.role,
      createdAt: userFound.createdAt,
      active: userFound.active,
    });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const register = async (req, res) => {
  const { name, email, passw } = req.body;

  const userFound = await user.findOne({ where: { email } });

  if (userFound)
    return res.status(400).json(["Esta cuenta ya se encuentra registrada."]);

  try {
    const newUser = await user.create({
      name,
      email,
      passw: await genHash(passw),
    });

    sendConfirmationEmail(email, newUser.codeEmail);

    const token = await genToken(newUser);

    res.cookie("access_token", token);

    res.status(200).json({
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      createdAt: newUser.createdAt,
      active: 0,
    });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const logout = async (req, res) => {
  res.cookie("access_token", "", { expires: new Date(0) });
  res.sendStatus(204);
};

export const verify = async (req, res) => {
  const { access_token } = req.cookies;

  if (!access_token) return res.status(401).json("Token missing.");

  const validToken = verToken(access_token);

  if (!validToken) return res.status(498).json("Token invalid.");

  const userFound = await user.findByPk(validToken.id);

  if (!userFound) return res.status(401).json("Unauthorized");

  res.status(200).json({
    name: userFound.name,
    email: userFound.email,
    role: userFound.role,
    createdAt: userFound.createdAt,
  });
};

export const confirmEmail = async (req, res) => {
  try {
    const userActivated = await user.update(
      {
        active: 1,
        codeEmail: null,
      },
      {
        where: {
          codeEmail: req.params.uuid,
        },
      }
    );

    if (!userActivated)
      return res.status(404).json(["No hemos encontrado esta cuenta"]);

    res.status(200).json({
      name: userActivated.name,
      email: userActivated.email,
      role: userActivated.role,
      createdAt: userActivated.createdAt,
      active: 1,
    });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

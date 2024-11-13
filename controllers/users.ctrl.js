import { user } from "../models/user.model.js";
import { sendChangeEmail } from "../services/nodemailer.js";
import { cmpPass, genHash } from "../services/auth.services.js";

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

    res.redirect(301, "http://localhost:5173/login");
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const updateInfo = async (req, res) => {
  const { name, email } = req.body;

  if (email !== (await user.findByPk(req.user.id).then((u) => u.email))) {
    sendChangeEmail(email, req.user.id);
    try {
      const userUpdated = await user.update(
        {
          name,
        },
        {
          where: {
            id: req.user.id,
          },
        }
      );

      if (!userUpdated) return res.status(400);

      return res.status(200).json({
        name: userUpdated.name,
        email: userUpdated.email,
        role: userUpdated.role,
        createdAt: userUpdated.createdAt,
      });
    } catch (err) {
      console.log(err);
      return res.status(500);
    }
  }

  try {
    const userUpdated = await user.update(
      {
        name,
        email,
      },
      {
        where: {
          id: req.user.id,
        },
      }
    );

    if (!userUpdated) return res.status(400);

    res.status(200).json({
      name: userUpdated.name,
      email: userUpdated.email,
      role: userUpdated.role,
      createdAt: userUpdated.createdAt,
    });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const changeEmail = async (req, res) => {
  try {
    const userUpdated = await user.update(
      {
        email: req.params.newEmail,
      },
      {
        where: {
          id: req.params.userId,
        },
      }
    );

    if (!userUpdated)
      return res.status(404).json(["No hemos encontrado esta cuenta"]);

    res.redirect(301, "http://localhost:5173/home");
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const changePassw = async (req, res) => {
  const { currentPassw, newPassw } = req.body;

  const userFound = await user.findByPk(req.user.id);

  try {
    const match = await cmpPass(currentPassw, userFound.passw);

    if (!match) return res.status(400).json(["Contraseña incorrecta."]);

    await user.update(
      {
        passw: await genHash(newPassw),
      },
      {
        where: {
          id: req.user.id,
        },
      }
    );

    res.status(200).json(["Contraseña cambiada exitosamente"]);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

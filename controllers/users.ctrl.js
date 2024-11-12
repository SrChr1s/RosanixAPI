import { user } from "../models/user.model.js";

export const updateInfo = async (req, res) => {
  const { name, email } = req.body;

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

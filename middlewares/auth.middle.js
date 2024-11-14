import { verToken } from "../services/auth.services.js";

export const authentication = (req, res, next) => {
  const { access_token } = req.cookies;

  if (!access_token)
    return res.status(401).json("No autorizado. Token perdido o expirado.");

  const validToken = verToken(access_token);

  if (!validToken)
    return res.status(498).json("No autorizado. Token inválido.");

  if (!validToken.active)
    return res.status(403).json("Su cuenta se encuentra inactiva");

  req.user = validToken;

  next();
};

export const authorization = (req, res, next) => {
  const { role } = req.user;

  if (role != "admin")
    return res
      .status(403)
      .json("No autorizado. Le faltan privilegios administrativos.");

  next();
};

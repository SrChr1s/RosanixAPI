import { verToken } from "../services/auth.services.js";

export const authentication = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json("Token missing.");

  const validToken = verToken(token);

  if (!validToken) return res.status(498).json("Token invalid.");

  req.user = validToken;

  next();
};

export const authorization = (req, res, next) => {
  const { role } = req.user;

  if (role != "admin") return res.status(403).json("Authorization denied.");

  next();
};

import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const genToken = async ({ id, name, email, role }) =>
  jwt.sign(
    {
      id,
      name,
      email,
      role,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "12h" }
  );

export const verToken = async (token) =>
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, dec) =>
    err ? null : dec
  );

export const genHash = async (passw) => await bcryptjs.hash(passw, 12);

export const cmpPass = async (passw, hash) =>
  await bcryptjs.compare(passw, hash);

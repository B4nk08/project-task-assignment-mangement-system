import jwt from "jsonwebtoken";
import 'dotenv'

const ACCESS_SECRET = process.env.ACCESS_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_SECRET!;

export const signAccessToken = (userId: number) => {
  return jwt.sign({ userId }, ACCESS_SECRET, { expiresIn: "15m" });
};
export const signRefreshToken = (userId: number) => {
  return jwt.sign({ userId }, REFRESH_SECRET, { expiresIn: "7d" });
};
export const verrifyAccessToken = (token: string) => {
  jwt.verify(token, ACCESS_SECRET);
};
export const verrifyRefreshToken = (token: string) => {
  jwt.verify(token, REFRESH_SECRET);
};

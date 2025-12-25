import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { signAccessToken, signRefreshToken } from "../../utlis/jwt";

export const registerService = async (
  fullName: string,
  email: string,
  password: string
) => {
  const hash = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      fullName,
      email,
      password: hash,
      role: "EMPLOYEE",
    },
  });
};

export const loginService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid passwor");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("invalid password");
  const accessToken = signAccessToken(user.id);
  const refreshToken = signRefreshToken(user.id);
  await prisma.user.update({
    where: { id: user.id },
    data: { refreshToken },
  });
  return { accessToken, refreshToken };
};

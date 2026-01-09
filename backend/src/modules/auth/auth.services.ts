import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { signAccessToken, signRefreshToken } from "../../utlis/jwt";

export const registerService = async (
  fullName: string,
  email: string,
  password: string
) => {
  if(!fullName || !email || !password) {
    throw new Error("Missing require field")
  }
  const existingUser = await prisma.user.findUnique({
    where : {email}, 
  })
  if(existingUser) {
    throw new Error("Email already exists")
  }
  const hash = await bcrypt.hash(password, 10)
  return prisma.user.create({
    data : {
      fullName,
      email,
      password: hash,
    }
  })
};

export const loginService = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }
  const accessToken = signAccessToken(user.id)
  const refreshToken = signRefreshToken(user.id)

  await prisma.user.update({
    where: {id: user.id},
    data: {refreshToken},
  })
  return{accessToken, refreshToken}
};


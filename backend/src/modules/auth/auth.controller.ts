import { Request, Response } from "express";
import { loginService, registerService } from "./auth.services";
import { setRefreshTokenCookie } from "../../utlis/cookie";
import { signAccessToken, verrifyRefreshToken } from "../../utlis/jwt";
import prisma from "../../lib/prisma";

export const register = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = req.body;
    await registerService(fullName, email, password);

    res.status(201).json({ message: "success" });
  } catch (err: any) {
    console.error(err);
    res.status(400).json({
      message: err.message || "Register failed",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are require",
      });
    }
    const { accessToken, refreshToken } = await loginService(email, password);
    setRefreshTokenCookie(res, refreshToken);
    res.json({ accessToken });
  } catch (err: any) {
    console.log("Login Error", err);

    res.status(401).json({
      message: err.message || "Login failed",
    });
  }
};

export const refresh = async (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(401);

  const payload: any = verrifyRefreshToken(token);
  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
  });

  if (!user || user.refreshToken !== token) return res.sendStatus(403);

  const newAccessToken = signAccessToken(user.id);
  res.json({ accessToken: newAccessToken });
};

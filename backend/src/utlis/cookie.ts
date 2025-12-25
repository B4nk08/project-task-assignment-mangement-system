import { Response } from "express";

export const setRefreshTokenCookie = (res: Response, refresToken: string) => {
  res.cookie("refreshToken", refresToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: false,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
 
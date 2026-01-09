import { Router } from "express";
import { login, refresh, register } from "./auth.controller";

const route = Router()
route.post("/login", login)
route.post("/register",register)
route.post("/refresh", refresh)

export default route
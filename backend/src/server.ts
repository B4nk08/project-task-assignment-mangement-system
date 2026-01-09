import cookieParser from "cookie-parser";
import express from "express";
import authRouter from "./modules/auth/auth.router"
import cors from 'cors'
import "dotenv/config";

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(express.json());
app.use(cookieParser())

app.use("/auth", authRouter)

app.get("/", (_req, res) => {
  res.send("Serverrrrrrrrrrrrrrrrr running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

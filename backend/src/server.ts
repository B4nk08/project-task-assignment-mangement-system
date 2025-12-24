import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Serverrrrrrrrrrrrrrrrr running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

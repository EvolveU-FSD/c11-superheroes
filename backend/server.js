import express from "express";
import superheroes from "./superheroes.json" assert { type: "json" };
import dotenv from "dotenv";
dotenv.config();

console.log("mongourl: ", process.env.MONGO_URL);
const app = express();

app.all("*", (req, res, next) => {
  console.log("path is", req.path);
  next();
});

app.get("/api", async (request, response) => {
  response.send(superheroes);
});

app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});

import express from "express";
import { ENV } from "./libs/env.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

app.listen(ENV.port, () => console.log("server is listening on port " + ENV.port));

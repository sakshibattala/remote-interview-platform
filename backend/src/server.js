import express from "express";
import { ENV } from "./libs/env.js";
import path from "path";

const app = express();

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

if (ENV.node_env === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(ENV.port, () =>
  console.log("server is listening on port " + ENV.port)
);

import express from "express";
import { ENV } from "./libs/env.js";
import path from "path";
import { connectDB } from "./libs/db.js";
import cors from "cors";
import { functions, inngest } from "./libs/inngest.js";
import { serve } from "inngest/express";

const app = express();

const __dirname = path.resolve();

//middlewares
app.use(express.json());
//credentials: true => means server allows browser to send cookies, other data on req
app.use(cors({ credentials: true, origin: ENV.CLIENT_URL })); //origin means in dev the origin is our localhost:5173 but in production its the main app's url
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

if (ENV.node_env === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.port, () =>
      console.log("server is listening on port " + ENV.port)
    );
  } catch (error) {
    console.error("Error while starting the server", error);
  }
};

startServer();

import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
};

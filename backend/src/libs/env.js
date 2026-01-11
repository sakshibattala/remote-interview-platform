import dotenv from "dotenv";

dotenv.config({quiet: true});

export const ENV = {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  db_url: process.env.DB_URL,
};

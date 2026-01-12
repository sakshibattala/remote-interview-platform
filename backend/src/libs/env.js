import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const ENV = {
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  db_url: process.env.DB_URL,
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
};

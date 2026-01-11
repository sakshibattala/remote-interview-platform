import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(ENV.db_url);
    console.log("connected to MongoDB", connection.connection.host);
  } catch (error) {
    console.error("Error connection to MongoDB", error);
    process.exit(1); //1 is failure, 0 is success
  }
};

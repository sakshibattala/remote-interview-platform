import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.model.js";

export const inngest = new Inngest({ id: "CodeConnect" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "user-created" },
  async ({ event }) => {
    await connectDB();

    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;
    const newUser = {
      clerkId: id,
      name: `${first_name || ""} ${last_name || ""}`,
      email: email_addresses[0]?.email_address,
      profileImage: image_url,
    };

    await User.create(newUser);
  }
);

const deleteUser = inngest.createFunction(
  { id: "deleted-user" },
  { event: "user-deleted" },
  async ({ event }) => {
    await connectDB();

    const { id } = event.data;
    await User.deleteOne({ clerkId: id });
  }
);

export const functions = [syncUser, deleteUser];

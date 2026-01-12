import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    clerkId: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true } //timestamps save the createdAt and updatedAt fields in db
);

const User = mongoose.model("User", userSchema);

export default User;

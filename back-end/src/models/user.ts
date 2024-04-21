import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "Please Enter Id"],
    },
    name: {
      type: String,
      required: [true, "Please Enter Name"],
    },
    email: {
      type: String,
      unique: [true, "Email Already Exists"],
      required: [true, "Please Enter Name"],
      validate: validator._default.isEmail,
    },
    photo: {
      type: String,
      required: [true, "Please Enter Photo"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Please Enter Gender"],
    },
    dob: {
      type: Date,
      required: [true, "Please Enter Date Of Birth"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", schema);

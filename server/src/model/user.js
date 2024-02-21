const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    studentNumber: {
      type: String,
      trim: true,
    },
    EmailVerification: {
      type: Boolean,
      default: false,
    },
    UniversityVerification: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "user", timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;

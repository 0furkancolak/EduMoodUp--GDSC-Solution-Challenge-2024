const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    LESSONID: {
      type: String,
      trim: true,
      required: true,
    },
    lessonday: {
      type: String,
      required: true,
      trim: true,
    },
    lessontime: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "week", timestamps: true }
);

const WEEK = mongoose.model("week", userSchema);

module.exports = WEEK;

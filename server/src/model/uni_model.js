const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uniSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    emailconfirm: {
      type: Boolean,
      trim: true,
      default: false,
    },
    adminconfirm: {
      type: Boolean,
      trim: true,
      default: false,
    },
  },
  { collection: "university", timestamps: true }
);

const UNI = mongoose.model("university", uniSchema);

module.exports = UNI;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dersSchema = new Schema(
  {
    BOLID: {
      type: String,
      trim: true,
      required: true,
    },
    TEACHERID: {
      type: String,
      trim: true,
      default: null,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
      type: String,
      // default?
    },
    day: {
      type: String,
      // default?
    },
  },
  { collection: "lesson", timestamps: true }
);

const LES = mongoose.model("lesson", dersSchema);

module.exports = LES;

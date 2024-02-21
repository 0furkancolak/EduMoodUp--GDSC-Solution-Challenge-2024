const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teachSchema = new Schema(
  {
    ID: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { collection: "teacher", timestamps: true }
);

const TEACH = mongoose.model("teacher", teachSchema);

module.exports = TEACH;

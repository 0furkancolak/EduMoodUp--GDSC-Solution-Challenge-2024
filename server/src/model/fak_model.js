const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fakSchema = new Schema(
  {
    UNIID: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { collection: "faculty", timestamps: true }
);

const FAK = mongoose.model("faculty", fakSchema);

module.exports = FAK;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pointSchema = new Schema(
  {
    TEACHID: {
      type: String,
      trim: true,
      required: true,
    },
    generalpoint: {
      type: Number,
      trim: true,
      default: 0,
    },
    generalhey: {
      type: Number,
      trim: true,
      default: 0,
    },
    generalmut: {
      type: Number,
      trim: true,
      default: 0,
    },
    generalsas: {
      type: Number,
      trim: true,
      default: 0,
    },
    generalyor: {
      type: Number,
      trim: true,
      default: 0,
    },
    generalen: {
      type: Number,
      trim: true,
      default: 0,
    },
    generalcount: {
      type: Number,
      default: 0,
    },
  },
  { collection: "point", timestamps: true }
);

const POINT = mongoose.model("point", pointSchema);

module.exports = POINT;

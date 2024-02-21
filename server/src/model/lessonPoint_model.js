const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pointSchema = new Schema(
  {
    lessonTeacher: {
      type: String,
      trim: true,
      required: true,
    },
    week: {
      type: Number,
      default: 1,
    },
    lessonId: {
      type: String,
      trim: true,
      required: true,
    },
    lessonpoint: {
      type: Number,
      trim: true,
      default: 0,
    },
    lessonhey: {
      type: Number,
      trim: true,
      default: 0,
    },
    lessonmut: {
      type: Number,
      trim: true,
      default: 0,
    },
    lessonsas: {
      type: Number,
      trim: true,
      default: 0,
    },
    lessonyor: {
      type: Number,
      trim: true,
      default: 0,
    },
    lessonen: {
      type: Number,
      trim: true,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
    pointable: {
      type: Boolean,
      trim: true,
      default: true,
    },
  },
  { collection: "lessonpoint", timestamps: true }
);

const LESSONPOINT = mongoose.model("lessonpoint", pointSchema);

module.exports = LESSONPOINT;

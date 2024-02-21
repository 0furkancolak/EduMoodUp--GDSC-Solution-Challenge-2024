const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    ID: {
      type: String,
      trim: true,
      required: true,
    },
    lesson: [
      {
        lessonId: {
          type: String,
          trim: true,
        },
        devamsizlik: {
          type: Number,
          default: 0,
        },
        verification: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { collection: "student", timestamps: true }
);

const STUDENT = mongoose.model("student", studentSchema);

module.exports = STUDENT;

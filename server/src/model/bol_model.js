const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bolSchema = new Schema(
  {
    FAKID: { type: String, trim: true, required: true },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    /* lessons: [
      {
        lessonId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "lesson",
        },
      },
    ],
    teacher: [
      {
        teacherId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "teacher",
        },
      },
    ],
  */
  },
  { collection: "department", timestamps: true }
);

const BOL = mongoose.model("department", bolSchema);

module.exports = BOL;

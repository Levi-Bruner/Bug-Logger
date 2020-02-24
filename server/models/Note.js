import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Note = new Schema(
  {
    content: { type: String, required: true },
    reportedBy: { type: String, required: true },
    bug: { type: ObjectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Note;

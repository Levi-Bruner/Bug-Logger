import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    closed: { type: Boolean, },
    reportedBy: { type: String, required: true },
    closedDate: { type: Date },
    status: { type: Boolean }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;

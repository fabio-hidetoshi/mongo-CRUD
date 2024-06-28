import mongoose from "mongoose";

const authorController = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.ObjectId },
    name: { type: String, require: true },
    nacionalidade: { type: String },
  },
  { versionKey: false }
);

const author = mongoose.model("autores", authorController);

export default { author, authorController };

import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    nacionalidade: { type: String },
  },
  { versionKey: false }
);

const author = mongoose.model("Authores", authorSchema);

export { author, authorSchema };

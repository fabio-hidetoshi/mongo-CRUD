import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    tipo: { type: String },
    preco: { type: Number },
  },
  { versionKey: false }
);

const book = mongoose.model("books", booksSchema);

export default book;

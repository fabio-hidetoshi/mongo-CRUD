import mongoose from "mongoose";
import { authorController } from "./author/js";

const booksSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    tipo: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: authorController,
  },
  { versionKey: false }
);

const book = mongoose.model("books", booksSchema);

export default book;

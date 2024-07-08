import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "O titulo do Livro é Obrigatório"],
    },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema,
  },
  { versionKey: false }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;

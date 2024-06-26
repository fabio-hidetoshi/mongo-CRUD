import express from "express";
import connectDataBase from "./config/dbConnect.js";
import book from "./models/books.js";

const connect = await connectDataBase();

connect.on("erro", (erro) => {
  console.log("erro na conexão", erro);
});

connect.once("open", () => {
  console.log("Conexão feita com sucesso");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso Node.js");
});

app.get("/livros", async (req, res) => {
  const listBooks = await book.find({});
  res.status(200).json(listBooks);
});

app.get("/livros/:id", (req, res) => {
  const index = findbook(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro adicionado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = findbook(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = findbook(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro excluído com sucesso");
});

export default app;

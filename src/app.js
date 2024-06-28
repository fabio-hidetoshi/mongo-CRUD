import express from "express";
import connectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await connectDataBase();

connect.on("erro", (erro) => {
  console.log("erro na conexão", erro);
});

connect.once("open", () => {
  console.log("Conexão feita com sucesso");
});

const app = express();
routes(app);

// app.delete("/livros/:id", (req, res) => {
//   const index = findbook(req.params.id);
//   livros.splice(index, 1);
//   res.status(200).send("Livro excluído com sucesso");
// });

export default app;

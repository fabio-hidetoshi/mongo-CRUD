// import http from "http";
import app from "./src/app.js";
import "dotenv/config";
const PORT = 3000;

const rotas = {
  "/": "Curso de Express API",
  "/livros": "Entrei na rota de livros",
};

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
  console.log("Servidor escutando!");
});

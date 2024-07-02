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

export default app;

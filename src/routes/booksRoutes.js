import express from "express";
import BookController from "../controllers/bookcontroller.js";

const routes = express.Router();

routes.get("/livros", BookController.getAllBooks);
routes.get("/livros/:id", BookController.getBookById);
routes.post("/livros", BookController.registerBook);
routes.put("/livros/:id", BookController.updateBook);
routes.delete("/livros/:id", BookController.deleteBook);

export default routes;

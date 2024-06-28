import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/autor", AuthorController.getAllAuthores);
routes.get("/autor/:id", AuthorController.getAuthorById);
routes.post("/autor", AuthorController.registerAuthor);
routes.put("/autor/:id", AuthorController.updateAuthor);
routes.delete("/autor/:id", AuthorController.deleteAuthor);

export default routes;

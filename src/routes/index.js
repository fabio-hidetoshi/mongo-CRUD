import express from "express";
import books from "./booksRoutes.js";
import authores from "./authorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso Nodejs"));
  app.use(express.json(), books, authores);
};

export default routes;

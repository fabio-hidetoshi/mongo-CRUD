import { author } from "../models/Author.js";

class AuthorController {
  static async getAllAuthores(req, res) {
    try {
      const listAuthores = await author.find({});
      res.status(200).json(listAuthores);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ msg: `Error trying to list authores - ${err.msg}` });
    }
  }

  static async getAuthorById(req, res) {
    try {
      const id = req.params.id;
      const author = await author.findById(id);
      res.status(200).json(author);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do autor` });
    }
  }

  static async registerAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res
        .status(201)
        .json({ message: "Autor criado com sucesso!", author: newAuthor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor excluído" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na exclusão` });
    }
  }
}

export default AuthorController;

import book from "../models/books.js";

class BookController {
  static async getAllBooks(req, res) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: `Error trying to list books - ${err.msg}` });
    }
  }

  static async getBookById(req, res) {
    try {
      const id = req.params.id;
      const book = await book.findById(id);
      res.status(200).json(book);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro` });
    }
  }

  static async registerBook(req, res) {
    try {
      const newBook = await book.create(req.body);
      res
        .status(201)
        .json({ message: "Livro criado com sucesso!", book: newBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro Atualizado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro Excluído" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na exclusão` });
    }
  }
}

export default BookController;

import { author } from "../models/Author.js";
import Book from "../models/Books.js";

class BookController {
  static async getAllBooks(req, res) {
    try {
      const listBooks = await Book.find({});
      res.status(200).json(listBooks);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ msg: `Error trying to list books - ${err.message}` });
    }
  }

  static async getBookById(req, res) {
    try {
      const id = req.params.id;
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      res.status(200).json(book);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro` });
    }
  }

  static async registerBook(req, res) {
    const newBook = req.body;
    console.log("New book data:", newBook);
    try {
      const authorFound = await author.findById(newBook.author);

      if (!authorFound) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }

      const bookCompleted = {
        ...newBook,
        author: { ...authorFound._doc },
      };
      const bookCreated = await Book.create(bookCompleted);
      res
        .status(201)
        .json({ message: "Livro criado com sucesso!", book: bookCreated });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedBook) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      res.status(200).json({ message: "Livro Atualizado", book: updatedBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      const deletedBook = await Book.findByIdAndDelete(id);
      if (!deletedBook) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      res.status(200).json({ message: "Livro Excluído" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na exclusão` });
    }
  }
}

export default BookController;

import { create } from "zustand";
import { Book } from "../types.ts";
import { toast } from "react-hot-toast";

interface IBooksStore {
  books: Book[];
  addBook: (book: Book) => void;
  removeBook: (title: string) => void;
}

export const useBooksStore = create<IBooksStore>((set) => ({
  books: [],
  addBook: (book) =>
    set((state) => {
      const bookExists = state.books.some((item) => item.title === book.title);
      const newBooks = bookExists ? state.books : [...state.books, book];
      const message = bookExists
        ? `${book.title} is already in the reading list`
        : `${book.title} was added to the reading list`;
      toast[bookExists ? "error" : "success"](message);
      return { books: newBooks };
    }),
  removeBook: (title) =>
    set((state) => ({
      books: state.books.filter((book) => book.title !== title),
    })),
}));

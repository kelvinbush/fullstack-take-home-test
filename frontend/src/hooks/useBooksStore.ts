import { create } from "zustand";
import { Book } from "../types.ts";

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
      return {
        books: bookExists ? state.books : [...state.books, book],
      };
    }),
  removeBook: (title) =>
    set((state) => ({
      books: state.books.filter((book) => book.title !== title),
    })),
}));

import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BoookContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    });

  

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title
        })
        const newBooks = [...books, response.data];

        setBooks(newBooks);
    };

    const deletedBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBookList = books.filter((book) => {
            return book.id !== id;
        })

        setBooks(updatedBookList);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }

            return book;
        })

        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        deletedBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return (
        <BoookContext.Provider value={valueToShare}>
            {children}
        </BoookContext.Provider>
    )
}

export { Provider };
export default BoookContext;
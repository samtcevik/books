import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
    const {books} = useBooksContext();
    const bookList = books.map((book)=>{
        return <BookShow key={book.id} book={book} ></BookShow>
    });
    return (
        <div className="book-list">
            {bookList}
        </div>
    )
}

export default BookList;
import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, onSubmit}) {
    const[title, setTitle] = useState("");
    const{editBookById} = useBooksContext();

    const handleChange = (event)=>{
        setTitle(event.target.value);
    }

    const handleOnSubmit = (event)=>{
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    }

    return (
        <div>
            <form className="book-edit" onSubmit={handleOnSubmit}>
                <lable>Title</lable>
                <input value={title} className="input" onChange={handleChange}></input>
                <button className="button is-primary">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;
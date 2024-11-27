import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } 
    ,[])
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-12 mb-12">Books</h1>
            <div className="grid grid-cols-3 gap-6 mb-12">
                {
                    books.map((book, idx) => <Book key={idx} book = {book}></Book> )
                }
            </div>
        </div>
    );
};

export default Books;
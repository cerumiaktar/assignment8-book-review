import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBook } from "../../utility/localstorage";
import ListedBook from "../ListedBook/ListedBook";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {
    const books = useLoaderData();
    // console.log(books);

    const [readBooks, setReadBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getReadBook();
        if (books.length > 0) {
            // const readBook = books.filter(book =>storedBookIds.includes(book.id))
            // setReadBooks(readBook)

            const readBook = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id === id);
                if (book) {
                    readBook.push(book);
                }
            }

            setReadBooks(readBook);
            setDisplayBooks(readBook);
        }
    }, [])

    return (
        <div>
            <div className="text-center bg-[#13131314] rounded-lg py-7 mt-4 mb-4">
                <h1 className="text-2xl font-bold">Books</h1>
            </div>
            <div className="text-center">
                <details className="dropdown">
                    <summary className="btn m-1 bg-[#23BE0A] text-white">Short By <IoIosArrowDown /> </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div className="flex items-center gap-5 text-xl font-medium border-b mb-10">
                <h3 className="border-2 border-b-none px-4 py-2 rounded-md">Read Book</h3>
                <h3>Wishlist Books</h3>
            </div>
            <div>
                {
                    displayBooks.map((book, idx) => <ListedBook key={idx} book={book}></ListedBook>)
                }

            </div>
        </div>
    );
};

export default ListedBooks;
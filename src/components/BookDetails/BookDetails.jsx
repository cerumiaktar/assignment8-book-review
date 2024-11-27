import { SiPanasonic } from "react-icons/si";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook } from "../../utility/localstorage";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    console.log(book, id);


    const handleRead = () =>{
        saveBook(idInt);
        toast("Read Successfully");
    }
    const handleWishlist = () => {
        toast("Wishlist Book!");
    }
    return (
        <div>
            <h1 className="text-2xl text-center font-medium mb-10">Boook details</h1>
            <div className="card lg:card-side bg-base-100 ">
                <div >
                    <img className="p-20 shadow-xl border rounded bg-[#1313130D] mr-10"
                        src={book.image} alt="Album" />
                </div>
                <div className="w-6/12">
                    <h2 className="card-title text-3xl font-medium">{book.bookName}</h2>
                    <p>By: {book.author}</p>
                    <p className="border border-[#1313131F] mt-4 mb-4"></p>
                    <h4 className="text-lg font-medium">{book.category}</h4>
                    <p className="border border-[#1313131F] mt-4 mb-4"></p>
                    <p className="mb-4"><span className="font-medium">Review: </span>{book.review}</p>
                    <p>
                        {
                            book.tags.map(tag => <span className="mr-8 bg-[#23BE0A1F] text-[#23BE0A] text-lg font-medium px-4 py-2 rounded-xl">{tag}</span>)
                        }
                    </p>
                    <p className="border border-[#1313131F] mt-4 mb-4"></p>
                    <p>Number of pages: {book.totalPages}</p>
                    <p>Publisher: {book.publisher}</p>
                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                    <p>Rating: {book.rating}</p>
                    <div className="mt-6">
                        <button onClick={handleRead} className="btn border border-[#13131330] bg-white">Read</button>
                        <button onClick={handleWishlist} className="btn bg-[#50B1C9] text-white ml-6">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
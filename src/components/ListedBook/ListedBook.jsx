import { IoLocationOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
import PagesToRead from "../PagesToRead/PagesToRead";

const ListedBook = ({ book }) => {

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mb-8 border py-6">
                <figure>
                    <img className="px-8 py-4 shadow-xl border rounded bg-[#1313130D] ml-10"
                        src={book.image}
                        alt="Movie" />
                </figure>
                <div className="ml-10">
                    <h2 className="card-title mb-4">{book.bookName}</h2>
                    <p>By: {book.author}</p>
                    <div className="flex items-center gap-4 mt-4 mb-4"> 
                        <div>
                            <span className="text-lg font-medium">Tags: </span>
                            {
                                book.tags.map((tag, idx) => <span key={idx} className="mr-4 bg-[#23BE0A1F] text-[#23BE0A] text-lg font-medium px-4 py-2 rounded-xl">{tag}</span>)
                            }
                        </div>
                        <div>
                            <span className="flex items-center gap-2 text-lg"> <IoLocationOutline /> Year of Publishing: {book.yearOfPublishing}</span>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center">
                        <p className="flex items-center gap-2 text-base"> <LuUsers2 /> Publisher: {book.publisher}</p>
                        <p className="flex items-center gap-2 text-base"> <CiViewList /> Pages: {book.totalPages}</p>
                    </div>
                    <p className=" border border-[#1313131F]  mt-4 mb-4"></p>
                    <div>
                        <button className="bg-[#328EFF26] rounded-full px-4 py-2 text-base text-[#328EFF]">Category: {book.category}</button>
                        <button className="bg-[#FFAC3326] rounded-full px-4 py-2 text-base text-[#FFAC33] ml-4 mr-4">Rating: {book.rating}</button>
                        <button className="bg-[#23BE0A] rounded-full px-4 py-2 text-base text-white">View Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ListedBook;
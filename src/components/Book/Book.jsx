import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {id, bookName, image, tags, author, category, rating } = book;
    return (
        <Link to={`/book/${id}`}>
            <div className="card bg-base-100 shadow-xl border">
                <figure className="px-10 py-10 bg-[#F3F3F3] m-6 rounded-xl">
                    <img
                        src={image}
                    />
                </figure>
                <div className="card-body">
                    <div>
                        {
                            tags.map(tag => <span className="mr-8 bg-[#23BE0A1F] text-[#23BE0A] text-lg font-medium px-4 py-2 rounded-xl">{tag}</span>)
                        }
                    </div>
                    <h2 className="card-title mt-4">{bookName}</h2>
                    <p>By: {author}</p>
                    <p className="border border-dashed border-[#1313131F] mt-4 mb-4"></p>
                    <div className="flex justify-between">
                        <h4 className="text-xl font-medium">{category}</h4>
                        <span className="flex items-center gap-2 text-xl font-medium"> {rating} <FaRegStar /></span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiShow, BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BookSingleCard = ({ book }) => {

    return (
        <div
            key={book._id}
            className="border-2 border-gray-300 bg-white rounded-lg px-4 py-2 m-4 relative hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
        >
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-blue-500 text-white rounded-lg font-semibold">
                {book.publishYear}
            </h2>
            <h4 className="my-2 text-gray-500 text-sm">{book._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-blue-600 text-2xl" />
                <h2 className="my-1 text-gray-800 font-semibold">
                    {book.title}
                </h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-green-600 text-2xl" />
                <h2 className="my-1 text-gray-800">{book.author}</h2>
            </div>

            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-600 hover:text-green-700 transition-colors duration-200" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-700 transition-colors duration-200" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-700 transition-colors duration-200" />
                </Link>
            </div>
            
        </div>
    );
};

export default BookSingleCard;

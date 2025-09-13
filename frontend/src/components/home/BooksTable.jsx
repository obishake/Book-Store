import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
    return (
        <table className="w-full border-separate border-spacing-2 bg-white rounded-lg shadow-lg">
            <thead>
                <tr>
                    <th className="border border-gray-300 rounded-md p-3 bg-blue-100 text-gray-800 font-semibold">
                        No
                    </th>
                    <th className="border border-gray-300 rounded-md p-3 bg-blue-100 text-gray-800 font-semibold">
                        Title
                    </th>
                    <th className="border border-gray-300 rounded-md p-3 bg-blue-100 text-gray-800 font-semibold max-md:hidden">
                        Author
                    </th>
                    <th className="border border-gray-300 rounded-md p-3 bg-blue-100 text-gray-800 font-semibold max-md:hidden">
                        Publish Year
                    </th>
                    <th className="border border-gray-300 rounded-md p-3 bg-blue-100 text-gray-800 font-semibold">
                        Operations
                    </th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr
                        key={book._id}
                        className="hover:bg-blue-50 transition-colors duration-200"
                    >
                        <td className="border border-gray-300 rounded-md text-center p-3 text-gray-800">
                            {index + 1}
                        </td>
                        <td className="border border-gray-300 rounded-md text-center p-3 text-gray-800 font-medium">
                            {book.title}
                        </td>
                        <td className="border border-gray-300 rounded-md text-center p-3 text-gray-800 max-md:hidden">
                            {book.author}
                        </td>
                        <td className="border border-gray-300 rounded-md text-center p-3 text-gray-800 max-md:hidden">
                            {book.publishYear}
                        </td>

                        <td className="border border-gray-300 rounded-md text-center p-3">
                            <div className="flex justify-center gap-x-4">
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
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BooksTable;

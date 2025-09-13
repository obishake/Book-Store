import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState("table");

    useEffect(() => {
        setLoading(true);

        axios
            .get("https://book-store-backend-ccvg.onrender.com/books")
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-blue-50 relative">
            {/* Simple background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>

            {/* Main content */}
            <div className="relative z-10 p-4 backdrop-blur-sm">
                <div className="flex justify-center items-center gap-x-4 mb-8">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-colors duration-300"
                        onClick={() => setShowType("table")}
                    >
                        Table
                    </button>

                    <button
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-colors duration-300"
                        onClick={() => setShowType("Card")}
                    >
                        Card
                    </button>
                </div>

                <div className="flex justify-between items-center">
                    <h1 className="text-4xl my-8 font-bold text-gray-800">
                        Books Library
                    </h1>
                    <Link to="/books/create">
                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 p-4 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group border-2 border-white/50 backdrop-blur-sm">
                            <MdOutlineAddBox className="text-white text-3xl group-hover:rotate-90 transition-transform duration-300" />
                        </div>
                    </Link>
                </div>

                {loading ? (
                    <Spinner />
                ) : showType === "table" ? (
                    <BooksTable books={books} />
                ) : (
                    <BooksCard books={books} />
                )}
            </div>
        </div>
    );
};

export default Home;

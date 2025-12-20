import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBooks = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${import.meta.env.VITE_URL}/books/${id}`)
            .then((responce) => {
                setBook(responce.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(true);
            });
    }, []);

    return (
        <div className="min-h-screen bg-blue-50 relative">
            {/* Simple background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>

            {/* Main content */}
            <div className="relative z-10 p-4 backdrop-blur-sm">
                <BackButton />
                <h1 className="text-4xl my-8 font-bold text-gray-800 text-center">
                    Book Details
                </h1>

                {loading ? (
                    <Spinner />
                ) : (
                    <div className="bg-white border-2 border-gray-300 rounded-xl max-w-2xl mx-auto p-8 shadow-lg">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <span className="text-lg font-semibold text-gray-700 block mb-2">
                                    Book ID
                                </span>
                                <span className="text-gray-600 font-mono text-sm break-all">
                                    {book._id}
                                </span>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <span className="text-lg font-semibold text-gray-700 block mb-2">
                                    Title
                                </span>
                                <span className="text-xl font-bold text-gray-800">
                                    {book.title}
                                </span>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <span className="text-lg font-semibold text-gray-700 block mb-2">
                                    Author
                                </span>
                                <span className="text-lg text-gray-800">
                                    {book.author}
                                </span>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-lg">
                                <span className="text-lg font-semibold text-gray-700 block mb-2">
                                    Publish Year
                                </span>
                                <span className="text-lg font-semibold text-purple-700">
                                    {book.publishYear}
                                </span>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <span className="text-lg font-semibold text-gray-700 block mb-2">
                                    Created At
                                </span>
                                <span className="text-gray-600">
                                    {new Date(book.createdAt).toLocaleString(
                                        "en-IN",
                                        {
                                            timeZone: "Asia/Kolkata",
                                            dateStyle: "medium",
                                            timeStyle: "short",
                                        }
                                    )}
                                </span>
                            </div>

                            <div className="bg-orange-50 p-4 rounded-lg">
                                <span className="text-lg font-semibold text-gray-700 block mb-2">
                                    Last Updated
                                </span>
                                <span className="text-gray-600">
                                    {new Date(book.updatedAt).toLocaleString(
                                        "en-IN",
                                        {
                                            timeZone: "Asia/Kolkata",
                                            dateStyle: "medium",
                                            timeStyle: "short",
                                        }
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShowBooks;

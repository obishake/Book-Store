import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { enqueueSnackbar, useSnackbar } from "notistack";

const EditBooks = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSaveBook } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((responce) => {
                setAuthor(responce.data.author);
                setPublishYear(responce.data.publishYear);
                setTitle(responce.data.title);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert("An error happend. Please chaek console");
                console.log(error);
            });
    }, []);

    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(false);
        axios
            .put(`http://localhost:5555/books/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Book Editted successfully", {
                    variant: "success",
                });
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                // alert('An error happend. Please Check console');
                enqueueSnackbar("Error", { varient: "error" });
                console.log(error);
            });
    };

    return (
        <div className="min-h-screen bg-blue-50 relative">
            {/* Simple background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>

            {/* Main content */}
            <div className="relative z-10 p-4 backdrop-blur-sm">
                <BackButton />
                <h1 className="text-4xl my-8 font-bold text-gray-800 text-center">
                    Edit Book
                </h1>

                {loading ? <Spinner /> : ""}
                <div className="flex flex-col bg-white border-2 border-gray-300 rounded-xl w-[600px] p-6 mx-auto shadow-lg">
                    <div className="my-5">
                        <label
                            className="text-xl mr-4 text-gray-700 font-semibold"
                            htmlFor=""
                        >
                            Title
                        </label>

                        <input
                            type="text"
                            value={title}
                            placeholder="Enter book title"
                            onChange={(e) => setTitle(e.target.value)}
                            className="border-2 border-gray-300 px-4 py-2 w-full rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                        />
                    </div>

                    <div className="my-5">
                        <label
                            className="text-xl mr-4 text-gray-700 font-semibold"
                            htmlFor=""
                        >
                            Author
                        </label>

                        <input
                            placeholder="Enter author name"
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="border-2 border-gray-300 px-4 py-2 w-full rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                        />
                    </div>

                    <div className="my-5">
                        <label
                            className="text-xl mr-4 text-gray-700 font-semibold"
                            htmlFor=""
                        >
                            Publish Year
                        </label>

                        <input
                            type="number"
                            value={publishYear}
                            placeholder="Enter publish year"
                            onChange={(e) => setPublishYear(e.target.value)}
                            className="border-2 border-gray-300 px-4 py-2 w-full rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                        />
                    </div>
                    <button
                        className="p-2 w-[300px] bg-blue-500 hover:bg-blue-600 text-white mx-auto my-2 rounded-2xl font-semibold shadow-md transition-colors duration-300"
                        onClick={handleEditBook}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditBooks;

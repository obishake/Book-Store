import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar, useSnackbar } from "notistack";

const DeleteBooks = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSaveBook } = useSnackbar();

    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`https://book-store-backend-ccvg.onrender.com/books/${id}`)
            .then((responce) => {
                setLoading(false);
                enqueueSnackbar("Book Deleted successfully", {
                    variant: "success",
                });
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                // alert("An error happend. Please check console");
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
                    Delete Book
                </h1>

                {loading ? <Spinner /> : ""}
                <div className="flex flex-col items-center bg-white border-2 border-gray-300 rounded-xl w-[600px] p-8 mx-auto shadow-lg">
                    <h3 className="text-xl text-gray-800 text-center mb-6 font-semibold">
                        Are you sure you want to delete this book?
                    </h3>

                    <button
                        className="p-4 bg-red-600 hover:bg-red-700 text-white m-8 w-[250px] rounded-2xl font-semibold shadow-md transition-colors duration-300"
                        onClick={handleDeleteBook}
                    >
                        Yes, Delete it
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteBooks;

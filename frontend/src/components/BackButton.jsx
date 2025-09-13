import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
    return (
        <div className="flex mb-6">
            <Link
                to={destination}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg w-fit shadow-lg border border-blue-500 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold group"
            >
                <BsArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Back</span>
            </Link>
        </div>
    );
};

export default BackButton;

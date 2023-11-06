import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const QuizCompletion = () => {
  const handleBackToHome = () => {
    // Handle navigation back to the home page, e.g., using React Router.
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-[#008060] text-white">
      <div className="animate-bounce mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-center mb-6">
        Your Test Completed
      </h1>
      <Link
        to="/"
        className="bg-white text-[#008060] px-4 py-2 rounded-full hover:bg-[#008060] hover:text-white transition duration-300"
        onClick={handleBackToHome}
      >
        <FaHome className="inline-block mr-2" /> Back to Home
      </Link>
    </div>
  );
};

export default QuizCompletion;

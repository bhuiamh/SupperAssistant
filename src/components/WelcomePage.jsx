import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-[#008060] text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Supper Assistant</h1>
      <div className="space-x-4">
        <Link
          to="/answer"
          className="font-bold bg-white text-[#008060] py-2 px-4 rounded-full hover:bg-[#008060] hover:text-white transition duration-300"
        >
          Take a Test
        </Link>
        <Link
          to="/question"
          className=" font-bold bg-white text-[#008060] py-2 px-4 rounded-full hover:bg-[#008060] hover:text-white transition duration-300"
        >
          Create Question
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;

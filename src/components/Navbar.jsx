import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <button className="btn bg-transparent  normal-case text-[#008060] hover:border-[#008060] font-extrabold text-2xl">
          Supper
          <span className="text-black">Assistant</span>
        </button>
      </div>

      <div className="navbar-end space-x-4">
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

export default Navbar;

import React from "react";
import Navbar from "../Navbar";
import CategoryAnswer from "./CategoryAnswer";
import FillInTheGapAnswer from "./FillInTheGapAnswer";
import ComprehensionAnswer from "./ComprehensionAnswer";
import Footer from "../Footer";
import Countdown from "./Cowndown";
import { Link } from "react-router-dom";

const Answer = () => {
  return (
    <div>
      <Navbar />
      <Countdown />

      <CategoryAnswer />
      <FillInTheGapAnswer />
      <ComprehensionAnswer />
      <div className="text-center">
        <button className="btn text-white hover:bg-black hover:text-white bg-[#008060] me-2">
          Save
        </button>
        <Link
          to="/QuizCompletion"
          className="btn hover:bg-black text-[#008060] btn-outline"
        >
          Save & Continue
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Answer;

import React from "react";
import Navbar from "../Navbar";
import CategoryAnswer from "./CategoryAnswer";
import FillInTheGapAnswer from "./FillInTheGapAnswer";
import ComprehensionAnswer from "./ComprehensionAnswer";
import Footer from "../Footer";

const Answer = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center">
        Take a Short Skill Test
      </h1>
      <p className="text-center">
        Test and evaluate your skills in this short assessment.
      </p>
      <CategoryAnswer />
      <FillInTheGapAnswer />
      <ComprehensionAnswer />
      <div className="text-center">
        <button className="btn text-white hover:bg-black hover:text-white bg-[#008060] me-2">
          Save
        </button>
        <button className="btn hover:bg-black text-[#008060] btn-outline">
          Save & Continue
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Answer;

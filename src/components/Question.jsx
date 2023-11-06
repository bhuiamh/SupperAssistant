import React from "react";
import CategoryType from "./Question/CategoryType";
import FillInTheGap from "./Question/FillInTheGap";
import ComprehensionType from "./Question/ComprehensionType";
import Navbar from "./Navbar";
import Footer from "./Footer";
import questionPhoto from "../assets/Question.jpg";
const Question = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center">
        Create your own Question
      </h1>
      <p className="text-center">
        Test your knowledge with this custom question.
      </p>
      <CategoryType />
      <FillInTheGap />
      <ComprehensionType />
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

export default Question;

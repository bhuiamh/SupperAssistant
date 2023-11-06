import React from "react";
import CategoryType from "./Question/CategoryType";
import FillInTheGap from "./Question/FillInTheGap";
import ComprehensionType from "./Question/ComprehensionType";
import Test from "./Question/Test";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Question = () => {
  return (
    <div>
      <Navbar />
      <CategoryType />
      <FillInTheGap />
      <ComprehensionType />
      <Footer />
      <Test></Test>
    </div>
  );
};

export default Question;

import React from "react";
import CategoryType from "./Question/CategoryType";
import FillInTheGap from "./Question/FillInTheGap";
import ComprehensionType from "./Question/ComprehensionType";
import Test from "./Question/Test";
const BrilliantQuestion = () => {
  return (
    <div>
      <CategoryType />
      <FillInTheGap />
      <ComprehensionType />
      <Test></Test>
    </div>
  );
};

export default BrilliantQuestion;

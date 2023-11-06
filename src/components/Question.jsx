import React, { useEffect, useState } from "react";
import CategoryType from "./Question/CategoryType";
import FillInTheGap from "./Question/FillInTheGap";
import ComprehensionType from "./Question/ComprehensionType";
import Navbar from "./Navbar";
import Footer from "./Footer";
import questionPhoto from "../assets/Question.jpg";
import axios from "axios";
const Question = () => {
  const [categoryData, setCategoryData] = useState({});
  const [gapData, setGapData] = useState({});
  const [mcqData, setMcqData] = useState({});
  const [data, setData] = useState({});

  const fetchAllQuestion = async () => {
    const res = await axios.get("http://localhost:5000/question/all");
    if (res?.data?.data) {
      setData(res?.data?.data);
    }
  };

  const getCategoryQuestion = (countries, capitals, zones) => {
    setCategoryData({
      id: data?.categoryQuestions[0]?._id || null,
      countries,
      capitals,
      zones,
    });
  };

  const getGapCategory = (text, underlineWords) => {
    setGapData({
      text,
      underlineWords,
    });
  };

  const getMcqCategory = (passage, question, options) => {
    setMcqData({
      passage,
      question,
      options,
    });
  };

  const updateQuestions = () => {};

  useEffect(() => {
    updateQuestions();
  }, [categoryData, gapData]);

  useEffect(() => {
    fetchAllQuestion();
  }, []);

  return (
    <div>
      <Navbar />

      <h1 className="text-3xl font-bold text-center">
        Create your own Question
      </h1>
      <p className="text-center">
        Test your knowledge with this custom question.
      </p>

      <CategoryType
        category={
          Array.isArray(data?.categoryQuestions)
            ? data?.categoryQuestions[0]
            : {}
        }
        getCategoryQuestion={getCategoryQuestion}
      />
      <FillInTheGap
        getGapCategory={getGapCategory}
        gap={Array.isArray(data?.gapQuestions) ? data?.gapQuestions[0] : {}}
      />
      <ComprehensionType
        getMcqCategory={getMcqCategory}
        mcq={Array.isArray(data?.mcqQuestions) ? data?.mcqQuestions[0] : {}}
      />
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

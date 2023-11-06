import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import CategoryAnswer from "./CategoryAnswer";
import FillInTheGapAnswer from "./FillInTheGapAnswer";
import ComprehensionAnswer from "./ComprehensionAnswer";
import Footer from "../Footer";
import Countdown from "./Cowndown";
import { Link } from "react-router-dom";
import axios from "axios";

const Answer = () => {
  const [data, setData] = useState({});
  const fetchAllQuestion = async () => {
    const res = await axios.get("http://localhost:5000/question/all");
    if (res?.data?.data) {
      setData(res?.data?.data);
    }
  };
  useEffect(() => {
    fetchAllQuestion();
  }, []);
  return (
    <div>
      <Navbar />
      <Countdown />

      <CategoryAnswer
        category={
          Array.isArray(data?.categoryQuestions)
            ? data?.categoryQuestions[0]
            : {}
        }
      />
      <FillInTheGapAnswer
        gap={Array.isArray(data?.gapQuestions) ? data?.gapQuestions[0] : {}}
      />
      <ComprehensionAnswer
        mcq={Array.isArray(data?.mcqQuestions) ? data?.mcqQuestions[0] : {}}
      />
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

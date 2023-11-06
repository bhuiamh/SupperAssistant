import React, { useEffect, useState } from "react";
import { FaRegListAlt } from "react-icons/fa";

const ComprehensionAnswer = ({ mcq }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [mcqOptions, setMcqOptions] = useState([]);

  // const mcqOptions = [
  //   { id: 1, text: "India" },
  //   { id: 2, text: "South Africa" },
  //   { id: 3, text: "Australia" },
  //   { id: 4, text: "Bangladesh" },
  // ];

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  useEffect(() => {
    if (mcq?.options?.length) {
      const options = mcq?.options?.map((op) => {
        return { id: op?.id, text: op?.value };
      });
      setMcqOptions(options);
    }
  }, [mcq]);

  return (
    <div className="mx-16 my-7 min-h-[40vh] border-2 border-[#008060]">
      {mcq?.passage ? (
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl gap-1 flex items-center text-[#008060]">
              <FaRegListAlt /> Question Type 3
            </h1>
          </div>

          <div className="m-5">
            <p className="font-bold mb-4">
              Read the paragraph and answer the following question:
            </p>
            <p className="font-sans mb-4">{mcq?.passage}</p>
            <p className="font-semibold mb-4">{mcq?.question}</p>
            <ul>
              {mcqOptions.map((option) => (
                <li key={option.id} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-[#008060] h-4 w-4 mr-2"
                      value={option.id}
                      checked={selectedOption === option.id}
                      onChange={() => handleOptionChange(option.id)}
                    />
                    {option.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h1>Please wait....</h1>
        </div>
      )}
    </div>
  );
};

export default ComprehensionAnswer;

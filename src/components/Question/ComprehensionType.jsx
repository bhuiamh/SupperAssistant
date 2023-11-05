import React, { useState } from "react";
import { FaEllipsisV, FaRegListAlt } from "react-icons/fa";

const ComprehensionType = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const mcqOptions = [
    { id: 1, text: "India" },
    { id: 2, text: "South Africa" },
    { id: 3, text: "Australia" },
    { id: 4, text: "Bangladesh" },
  ];

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };
  return (
    <div className="mx-16 my-7 min-h-[40vh] border-[#008060] border-4">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl gap-1 flex items-center text-[#008060]">
            <FaRegListAlt /> Question Type 3
          </h1>
          <button>
            <FaEllipsisV />
          </button>
        </div>
        <div className="m-5">
          <p className="font-bold mb-4">
            Read the paragraph and answer the following question:
          </p>
          <p className="font-sans mb-4">
            The 2023 ICC Cricket World Cup will be held in India from 9 October
            to 22 November. Ten teams will compete in the tournament, with the
            top four teams from each group advancing to the quarterfinals. The
            tournament will be one of the most competitive in recent history,
            with all of the participating teams capable of winning. The
            favorites to win the tournament are India, Australia, England, New
            Zealand, and South Africa.
          </p>
          <p className="font-semibold mb-4">
            Which team is the favorite to win the 2023 ICC Cricket World Cup?
          </p>
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
          <div className="mt-6">
            <button
              className="bg-[#008060] text-white px-4 py-2 rounded-md hover:bg-[#0c3128]"
              disabled={selectedOption === null}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensionType;

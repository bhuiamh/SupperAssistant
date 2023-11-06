import React, { useState } from "react";
import { FaEllipsisV, FaRegListAlt } from "react-icons/fa";

const ComprehensionType = ({ mcq }) => {
  const [addComprehension, setAddComprehension] = useState(false);

  const handleAddComprehension = () => {
    setAddComprehension(true);
  };

  const [options, setOptions] = useState([""]);

  const handleInputChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  return (
    <div className="mx-16 my-7 min-h-[40vh] border-2 border-[#008060] group hover:border-orange-500">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl gap-1 flex items-center text-[#008060] group-hover:text-orange-500">
            <FaRegListAlt /> Question Type 3
          </h1>

          <button
            onClick={handleAddComprehension}
            className="hidden group-hover:block text-xl font-bold text-orange-500 hover:text-orange-700"
          >
            <span className="text-[#008060] text-2xl font-bold">+</span> Add a
            Question
          </button>
        </div>

        <div className="m-5">
          <p className="font-bold mb-4">
            Read the paragraph and answer the following question:
          </p>
          {addComprehension ? (
            <>
              <div className="flex justify-center my-5">
                <input
                  type="text"
                  placeholder="Type paragraph for comprehension"
                  className="input w-full min-h-[100px] input-bordered max-w-3xl"
                />
              </div>
              <input
                type="text"
                placeholder="Type Question for comprehension"
                className="input w-full input-bordered max-w-lg"
              />
            </>
          ) : (
            <>
              <div className="flex justify-center my-5">
                <input
                  type="text"
                  placeholder="Type paragraph for comprehension"
                  className="input w-full min-h-[100px] max-w-3xl"
                />
              </div>
              <input
                type="text"
                placeholder="Type Question for comprehension"
                className="input w-full max-w-lg"
              />
            </>
          )}
          <h1 className="font-bold my-3">Select Correct Answer</h1>
          <div>
            {options.map((option, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className={`ml-2 p-2 rounded-md ${
                    addComprehension ? "border border-[#008060]" : ""
                  }`}
                />
                <button
                  onClick={() => handleRemoveOption(index)}
                  className={`ml-2 p-2 ${
                    addComprehension
                      ? "bg-red-500"
                      : "bg-slate-400 btn-disabled"
                  } bg-red-500 text-white rounded-md`}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={handleAddOption}
              className={`${
                addComprehension
                  ? "bg-[#008060] hover:bg-[#0c3128]"
                  : "bg-slate-400"
              } text-white ml-2 px-4 py-2 rounded-md`}
            >
              Add Option
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensionType;

import React from "react";
import { FaEllipsisV, FaRegListAlt } from "react-icons/fa";
const BrilliantQuestion = () => {
  return (
    <div>
      <div className="mx-16 my-7 min-h-[80vh] border-[#008060] border-4">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl gap-1 flex items-center">
              <FaRegListAlt /> Question 1
            </h1>
            <button>
              <FaEllipsisV />
            </button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Add a Category"
              className="input border-[#008060] w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrilliantQuestion;

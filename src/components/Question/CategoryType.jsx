import React, { useState } from "react";
import {
  FaEllipsisV,
  FaGripHorizontal,
  FaPlus,
  FaRegListAlt,
} from "react-icons/fa";

const CategoryType = () => {
  const [addOption, setAddOption] = useState(false);

  const handleAddOption = () => {
    setAddOption(true);
  };

  return (
    <div className="mx-16 my-7 min-h-[40vh] border-4 border-[#008060] group hover:border-orange-500">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl gap-1 flex items-center text-[#008060] group-hover:text-orange-500">
            <FaRegListAlt /> Question Type 1
          </h1>

          <button
            onClick={handleAddOption}
            className="hidden group-hover:block text-xl font-bold text-orange-500 hover:text-orange-700"
          >
            <span className="text-[#008060] text-2xl font-bold">+</span> Add a
            Question
          </button>
        </div>

        <div className="flex">
          <div className="m-3">
            <div>
              <h1 className="text-xl font-semibold">Select your Country</h1>
              <div className="m-2">
                <button className="font-semibold flex items-center gap-1 mb-1">
                  <FaGripHorizontal />
                  <span className="btn w-[320px] btn-outlined">Bangladesh</span>
                </button>
                <button className="font-semibold flex items-center gap-1 mb-1">
                  <FaGripHorizontal />
                  <span className="btn w-[320px] btn-outlined">India</span>
                </button>
                <button className="font-semibold  flex items-center gap-1 mb-1">
                  <FaGripHorizontal />
                  <span className="btn w-[320px] btn-outlined">Nepal</span>
                </button>
                {addOption ? (
                  <input
                    type="text"
                    placeholder="Add a Country"
                    className="ml-5 input border-[#008060] w-full max-w-xs mt-1"
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className="m-3">
            <div>
              <h1 className="text-xl font-semibold">Select your Capital</h1>
              <div className="m-2">
                <button className="font-semibold flex items-center gap-1 mb-1">
                  <FaGripHorizontal />
                  <span className="btn w-[320px] btn-outlined">Dhaka</span>
                </button>
                <button className="font-semibold flex items-center gap-1 mb-1">
                  <FaGripHorizontal />
                  <span className="btn w-[320px] btn-outlined">New Delhi</span>
                </button>
                <button className="font-semibold  flex items-center gap-1 mb-1">
                  <FaGripHorizontal />
                  <span className="btn w-[320px] btn-outlined">Kathmandu</span>
                </button>
                {addOption ? (
                  <input
                    type="text"
                    placeholder="Add a Capital"
                    className="ml-5 input border-[#008060] w-full max-w-xs mt-1"
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className="m-3">
            <div>
              <h1 className="text-xl font-semibold">Select your Zone</h1>
              <div className="m-2">
                <button className="font-semibold flex items-center gap-1 mb-1">
                  <FaGripHorizontal />
                  <span className="btn w-[320px] btn-outlined">Chattogram</span>
                </button>
                <button className="font-semibold flex items-center gap-1 mb-1">
                  <FaGripHorizontal />
                  <span className="btn w-[320px] btn-outlined">Kalkata</span>
                </button>
                <button className="font-semibold  flex items-center gap-1 mb-1">
                  <FaGripHorizontal />
                  <span className="btn w-[320px] btn-outlined">Pokhara</span>
                </button>
                {addOption ? (
                  <input
                    type="text"
                    placeholder="Add a Zone"
                    className="ml-5 input border-[#008060] w-full max-w-xs mt-1"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryType;

import React from "react";
import { FaEllipsisV, FaGripHorizontal, FaRegListAlt } from "react-icons/fa";

const CategoryType = () => {
  return (
    <div className="mx-16 my-7 min-h-[40vh] border-[#008060] border-4">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl gap-1 flex items-center text-[#008060]">
            <FaRegListAlt /> Question Type 1
          </h1>
          <button>
            <FaEllipsisV />
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
                <input
                  type="text"
                  placeholder="Add a Country"
                  className="ml-5 input border-[#008060] w-full max-w-xs mt-1"
                />
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
                <input
                  type="text"
                  placeholder="Add a Capital"
                  className="ml-5 input border-[#008060] w-full max-w-xs mt-1"
                />
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
                <input
                  type="text"
                  placeholder="Add a your Zone"
                  className="ml-5 input border-[#008060] w-full max-w-xs mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryType;

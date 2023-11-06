import React, { useState } from "react";
import { FaGripHorizontal, FaRegListAlt } from "react-icons/fa";

const CategoryAnswer = () => {
  return (
    <div className="mx-16 my-7 min-h-[40vh] border-2 border-[#008060]">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl gap-1 flex items-center text-[#008060]">
            <FaRegListAlt /> Question Type 1
          </h1>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAnswer;

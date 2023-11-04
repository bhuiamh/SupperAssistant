import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <button className="btn bg-transparent  normal-case text-[#008060] hover:border-[#008060] font-extrabold text-2xl">
          Supper
          <span className="text-black">Assistant</span>
        </button>
      </div>

      <div className="navbar-end">
        <button className="btn text-white hover:bg-black hover:text-white bg-[#008060] me-2">
          Save
        </button>
        <button className="btn hover:bg-black text-[#008060] btn-outline">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Navbar;

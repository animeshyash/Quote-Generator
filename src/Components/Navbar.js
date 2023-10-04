import React from "react";
import "./Animation.css";


export const Navbar = (props) => {
  const fetchData = props.fetchData;

  return (
    <div className="w-screen flex items-baseline h-[65px] bg-[#1A2F50] text-white">
      <div className="w-1/2">
        <p className="title text-[1.25rem] text-center cursor-pointer tracking-wider">
          <span className="text-[2.1875rem] font-bold">Q</span>uotecraft
        </p>
      </div>
      <div className="mx-auto">
        <button
          onClick={fetchData}
          className="pointer p-2 hover:border-2 transition-all duration-300 ease-in rounded-md hover:bg-gray-100 hover:text-black"
        >
          <p className="text-[1.126rem] text-center">Generate Quote</p>
        </button>
      </div>
    </div>
  );
};

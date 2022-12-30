import React from "react";

const Number = () => {
  return (
    <div className="text-3xl mt-10 pb-10 bg-[#EEEAEA]">
      <h1 className="text-center font-blod">
        Let us give you a <span className="text-mainColor">Call !</span>
      </h1>
      <p className="text-base text-center ">
        lLeave us your number and our representatives will connect with you
        soon!!
      </p>
      <div className="px-20">
        <input
          type="text"
          className="w-full text-base border-gray-200 shadow-sm py-1 border-[1px]   rounded-sm"
        />
        <button className="text-start border-2 text-white bg-mainColor text-2xl py-2 px-3 hover:bg-[#EA580C] ">
          Connect With us
        </button>
      </div>
    </div>
  );
};

export default Number;

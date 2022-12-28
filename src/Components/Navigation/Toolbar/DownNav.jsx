import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navdata } from "../NavData";
import { IoMdMenu } from "react-icons/io";
const url = "https://hubit.com.np/_next/static/media/hubitLogo.14c101fa.svg";

const Secondarry = ({ setShow }) => {
  const location = useLocation();
  return (
    <>
      <IoMdMenu
        onClick={() => setShow()}
        className="lg:hidden pd:block text-5xl fixed top-0 left-3"
      />
      <div className="h-16  border-b-2 shadow-md shadow-gray-400 text-sm bg-white select-none">
        <div className="flex h-16 justify-around  lg:flex pd:hidden  items-center">
          <div className="left-side">
            <img src={url} className="w-24" alt="" />
          </div>
          <div className="center-side">
            <button className="capitalize  animate-pulse  hover:scale-110 duration-200 transition-all px-2 py-1 text-xs xl:text-sm xxl:text-base ease-in-out  bg-main rounded-md text-white bg-mainColor">
              online admission
            </button>
          </div>
          <div
            className="flex gap-3 text-base text-zinc-600  col-span-5"
            style={{ fontSize: "16px" }}>
            {Navdata.map((val, i) => {
              return (
                <div className="flex" key={i}>
                  <Link to={{ pathname: val.path }}>
                    <div
                      className={`capitalize border-white  mr-2 cursor-pointer ${
                        location.pathname === val.path
                          ? "border-b-2 border-mainColor transition-all duration-400 delay-100"
                          : ""
                      }`}>
                      {val.title}
                    </div>
                  </Link>
                  <div className="border-l-2 border-gray-500 h-4 mt-1"></div>
                </div>
              );
            })}
            <span>More</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondarry;

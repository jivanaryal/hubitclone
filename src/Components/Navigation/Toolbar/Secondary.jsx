import React from "react";
import { Link } from "react-router-dom";
const url = "https://hubit.com.np/_next/static/media/hubitLogo.14c101fa.svg";

const data = [
  {
    title: "home",
    path: "/",
  },

  {
    title: "about us",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
  {
    title: "placements",
    path: "/",
  },
  {
    title: "library",
    path: "/",
  },
  {
    title: "co-operate training",
  },
  {
    title: "notice",
    path: "/",
  },
];

const Secondnav = () => {
  return (
    <div className="h-16 border-b-2 shadow-md shadow-gray-400 text-sm select-none">
      <div className="flex h-16 justify-around items-center">
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
          {data.map((val, i) => {
            return (
              <div className="flex" key={i}>
                <Link to={{ pathname: val.path }}>
                  <div className=" capitalize border-b-2 border-white hover:border-b-2 hover:border-pink-500 mr-2 cursor-pointer">
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
  );
};

export default Secondnav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDragHandleHorizontal } from "react-icons/rx";
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
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className=" border-b-2 shadow-md shadow-gray-400 text-sm select-none relative bg-red-600">
        <button>
          {" "}
          <RxDragHandleHorizontal
            className=" absolute top-1 text-5xl left-3 lg:hidden pd:block"
            onClick={handleClick}
          />
        </button>
        <div className="flex h-16 justify-around items-center">
          <div className="left-side">
            <img src={url} className="w-24 lg:block pd:hidden" alt="" />
          </div>
          <div className="center-side">
            <button className="capitalize  animate-pulse  hover:scale-110 duration-200 transition-all px-2 py-1 text-xs xl:text-sm xxl:text-base ease-in-out  bg-main rounded-md text-white bg-mainColor lg:block pd:hidden">
              online admission
            </button>
          </div>

          {show && <Jivan show={show} setShow={setShow} />}
        </div>
      </div>
    </>
  );
};
const Jivan = ({ show, setShow }) => {
  const [activePage, setActivePage] = useState("home");
  return (
    <div
      className={`flex fixed md:relative top-20 h-screen z-50 pd:left-0 lg:flex-row pd:flex-col  gap-3 text-base   text-zinc-600  ${
        show && ""
      }`}
      style={{ fontSize: "16px" }}>
      {data.map((val, i) => {
        return (
          <div className="flex" key={i}>
            <Link to={{ pathname: val.path }}>
              <div
                className={`capitalize border-white  mr-2 cursor-pointer ${
                  activePage === val.title
                    ? "border-b-2 border-mainColor transition-all duration-400 delay-100"
                    : "border-none"
                }`}
                onClick={() => {
                  setActivePage(val.title);
                  // setShow(false);
                }}>
                {val.title}
              </div>
            </Link>
            <div className="border-l-2 border-gray-500 h-4 mt-1 lg:block pd:hidden"></div>
          </div>
        );
      })}
      <span className="">More</span>
    </div>
  );
};

export default Secondnav;

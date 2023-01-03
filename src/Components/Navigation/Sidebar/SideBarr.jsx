import React from "react";
import { ImCross } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { Navdata } from "../NavData";
function Sidebar({ show, setShow }) {
  const location = useLocation();

  return (
    <div
      className={`w-screen bg-backdrop   h-screen fixed top-0 left-0 z-50 grid grid-cols-7 ${
        show ? "translate-x-0" : "-translate-x-full"
      } duration-700 delay-75 ease-in-out transition-all `}>
      <div className={` bg-[#374151] col-span-3`}>
        <div>
          <div>
            {Navdata.map((val, i) => {
              return (
                <div key={i}>
                  <Link to={{ pathname: val.path }}>
                    <p
                      className={`text-xl capitalize border-2 text-white border-transparent rounded-md py-1 hover:bg-white hover:text-black hover: text-center w-10/12 mx-auto mt-6 ${
                        location.pathname === val.path
                          ? "bg-white text-black"
                          : ""
                      }`}
                      onClick={() => setShow()}>
                      {val.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-span-4 relative">
        <div
          onClick={() => {
            setShow(true);
          }}
          className="bg-white w-fit h-fit
         p-3 cursor-pointer rounded-full mx-4  absolute top-0">
          <ImCross className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

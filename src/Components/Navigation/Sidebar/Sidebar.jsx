import React, { useState } from "react";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Navdata } from "../NavData";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [shownav, setShowNav] = useState(false);
  const [showicon, setShowIcon] = useState(false);
  const handleChange = () => {
    setShowNav(!shownav);
    setShowIcon(!showicon);
  };
  return (
    <div className="flex flex-col fixed top-0 left-0 bg-[#374151]  h-screen  z-50">
      <div>
        <RxDragHandleHorizontal
          className={`fixed pointer-cursor  text-5xl  ${
            showicon === true ? "pd:hidden" : "block"
          }`}
          onClick={() => handleChange()}
        />
        <AiOutlineClose
          className={`fixed right-2 top-2 text-5xl border-2 rounded-full border-black bg-blue-500 ${
            showicon === true ? "pd:block" : "pd:hidden"
          }`}
          onClick={() => handleChange()}
        />
      </div>
      {shownav && <NavTitle handleChange={handleChange} />}
    </div>
  );
};
const NavTitle = ({ handleChange }) => {
  return (
    <div className="">
      {Navdata.map((val, i) => {
        return (
          <Link to={{ pathname: val.path }}>
            {" "}
            <div key={i}>
              <p className="capitalize " onClick={handleChange}>
                {" "}
                {val.title}{" "}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;

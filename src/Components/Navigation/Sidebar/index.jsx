import React from "react";
// import Sidebar from "./Sidebar";
import SideBarr from "./SideBarr";

const index = ({ show, setShow }) => {
  return (
    <div>
      <SideBarr show={show} setShow={setShow} />
    </div>
  );
};

export default index;

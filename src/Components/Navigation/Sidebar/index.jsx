import React from "react";
import Sidebar from "./Sidebar";

const index = ({ show, setShow }) => {
  return (
    <div>
      <Sidebar show={show} setShow={setShow} />
    </div>
  );
};

export default index;

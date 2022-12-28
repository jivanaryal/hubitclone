import React from "react";
import Header from "./Header";
import DownNav from "./DownNav";
// import Secondary from "./Secondary";

const index = ({ setShow }) => {
  return (
    <div className="fixed top-0 w-screen h-fit z-20 bg-white">
      <Header />
      <DownNav setShow={setShow} />
    </div>
  );
};

export default index;

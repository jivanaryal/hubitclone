import React from "react";
import Header from "./Header";
import Secondary from "./Secondary";

const index = () => {
  return (
    <div className="fixed top-0 w-screen h-fit z-20 bg-white">
      <Header />
      <Secondary />
    </div>
  );
};

export default index;

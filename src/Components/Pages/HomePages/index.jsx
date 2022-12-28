import React from "react";
import Courses from "./Courses";
import Feature from "./Feature";
import HomePage from "./HomePage";
import Welcome from "./Welcome";

const index = () => {
  return (
    <div>
      <HomePage />
      <Feature />
      <Welcome />
      <Courses />
    </div>
  );
};

export default index;

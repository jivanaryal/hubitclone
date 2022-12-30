import React from "react";
import Courses from "./Courses";
import Feature from "./Feature";
import HomePage from "./HomePage";
import Placements from "./Placements";
import Sucess from "./Sucess";
import Welcome from "./Welcome";

const index = () => {
  return (
    <div>
      <HomePage />
      <Feature />
      <Welcome />
      <Courses />
      <Placements />
      <Sucess />
    </div>
  );
};

export default index;

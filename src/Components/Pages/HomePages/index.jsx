import React from "react";
import Courses from "./Courses";
import Feature from "./Feature";
import FIndUs from "./FIndUs";
import HomePage from "./HomePage";
import Placements from "./Placements";
import Sucess from "./Sucess";
import Welcome from "./Welcome";
import Number from "./Number";
const index = () => {
  return (
    <div>
      <HomePage />
      <Feature />
      <Welcome />
      <Courses />
      <Placements />
      <Sucess />
      <FIndUs />
      <Number />
    </div>
  );
};

export default index;

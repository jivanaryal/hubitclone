import React from "react";
import { BsMicrosoft } from "react-icons/bs";
const data = [
  {
    img: BsMicrosoft,
    title: "microsoft",
  },
  {
    img: BsMicrosoft,
    title: "microsoft",
  },
  {
    img: BsMicrosoft,
    title: "microsoft",
  },
  {
    img: BsMicrosoft,
    title: "microsoft",
  },
  {
    img: BsMicrosoft,
    title: "microsoft",
  },
  {
    img: BsMicrosoft,
    title: "microsoft",
  },
  {
    img: BsMicrosoft,
    title: "microsoft",
  },
  {
    img: BsMicrosoft,
    title: "microsoft",
  },
  {
    img: BsMicrosoft,
    title: "microsoft",
  },
  {
    img: BsMicrosoft,
    title: "microsoft",
  },
];

const Placements = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <h1 className="text-2xl text-mainColor text-center ">
        Placements Partner
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 pd:grid-cols-2 gap-8 pt-8">
        {data.map((val, i) => {
          return (
            <div
              key={i}
              className="flex items-center pl-2 shadow-xl py-1 gap-2 border-[1px]  border-black">
              <div>
                <val.img />
              </div>
              <div className="capitalize text-sm">{val.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Placements;

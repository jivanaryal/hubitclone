import React from "react";
import { BsFacebook } from "react-icons/bs";

const data = [
  {
    img: BsFacebook,
    ruppes: "500",
    follower: "followers",
  },
  {
    img: BsFacebook,
    ruppes: "500",
    color: "blue-400",
    follower: "followers",
  },
  {
    img: BsFacebook,
    ruppes: "500",
    hex: "blue-500",
    follower: "followers",
  },
  {
    img: BsFacebook,
    ruppes: "500",
    hex: "#3b5998",
    follower: "followers",
  },
  {
    img: BsFacebook,
    ruppes: "500",
    hex: "#3b5998",
    follower: "followers",
  },
  {
    img: BsFacebook,
    ruppes: "500",
    hex: "#3b5998",
    follower: "followers",
  },
];
const FIndUs = () => {
  return (
    <div className="w-10/12 mx-auto  mt-20">
      <h1 className="text-center text-2xl text-mainColor pb-10 capitalize">
        find us on
      </h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 pd:grid-cols-2 gap-8   ">
        {data.map((val, i) => {
          return (
            <div key={i}>
              <div className="flex flex-col items-center px-0 py-3 gap-2  hover:scale-110 duration-700 delay-75 transition-all border-2">
                <val.img className={`text-5xl text-blue-400`} />
                <div className="text-xl text-black">{val.ruppes}</div>
                <div className="text-xl">{val.follower}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FIndUs;

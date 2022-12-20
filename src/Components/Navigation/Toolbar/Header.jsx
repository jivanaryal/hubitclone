import React from "react";
// import { BiPhoneCall } from "react-icons/bs";
import { BiPhoneCall, BiMessageAlt } from "react-icons/bi";

const obj = [
  {
    title: "Check Cretificate",
  },
  {
    title: "Career",
  },
  {
    title: "Contact Us",
  },
  {
    title: "Download Brocheure",
  },
  {
    title: " Hackathons",
  },
  {
    title: "Hire Talents",
  },
  {
    title: "Testimonials",
  },
];

const Header = () => {
  return (
    <div
      className="text-white h-8  px-28 bg-pink-700 select-none"
      style={{ backgroundColor: "#a0047d" }}>
      <div className="flex justify-between items-center h-8">
        <div className="flex gap-2 text-xs items-center">
          <BiPhoneCall className="text-base" />
          <p>071-532805</p>
          <div className="border-l-2 border-white h-4"></div>
          <p>982343243</p>
          <BiMessageAlt className="text-base text-center" />
          <p>training@hubit.com.np</p>
        </div>
        <div className="flex gap-5 text-xs items-center">
          {obj.map((val, i) => {
            return (
              <div key={i}>
                <button className="capitalize hover:scale-110 duration-200 transition-all cursor-pointer gap-4">
                  {val.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;

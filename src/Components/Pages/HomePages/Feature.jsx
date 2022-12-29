import React from "react";
import { MdAppRegistration } from "react-icons/md";

const data = [
  {
    img: MdAppRegistration,
    title: "Top Courses",
    info: "Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity.",
  },
  {
    img: MdAppRegistration,
    title: "Certificated Instructor",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    img: MdAppRegistration,
    title: "Book and Libraries",
    info: "Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & many more), and personal development and productivity.",
  },
];

const Feature = () => {
  return (
    <div className="bg-[#FFFFFF]  pt-10">
      <div className=" w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pd:grid-cols-1">
        {data.map((val, i) => {
          return (
            <div
              key={i}
              className="border-b-4 lg:border-b-transparent pd:border-b-gray-500 mr-2 pd:border-b-[1px] pd:hover:border-b-[2px]  lg:border-r-2   pr-6 pl-5 lg:hover:border-b-4 hover:border-b-mainColor delay-100 duration-700 transition-all pb-2  ">
              <div className="flex gap-2">
                <val.img className="text-5xl text-mainColor" />
                <p className="font-bold text-2xl justify-start ">{val.title}</p>
              </div>
              <p className="py-4 text-justify pb-10 overflow-scroll  h-52 hover:bg-transparent info ">
                {val.info}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;

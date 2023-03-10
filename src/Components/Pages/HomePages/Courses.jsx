import React, { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";

const data = [
  {
    image: GiTeacher,
    title: "well-equipped lab",
    info: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
  {
    image: GiTeacher,
    title: "well-equipped lab",
    info: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
  {
    image: GiTeacher,
    title: "well-equipped lab",
    info: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
  {
    image: GiTeacher,
    title: "well-equipped lab",
    info: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
  {
    image: GiTeacher,
    title: "well-equipped lab",
    info: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
  {
    image: GiTeacher,
    title: "well-equipped lab",
    info: "Labs are equipped with world class equipments and facilities based on the latest technology.",
  },
];

const obj = [
  {
    img: "https://hubit.com.np/_next/image?url=%2Fimages%2Fjapan.jpg&w=1920&q=75",
    title: "Hari Sir",
    author: "teacher",
    info: "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
  {
    img: "https://hubit.com.np/_next/image?url=%2Fimages%2Fjapan.jpg&w=1920&q=75",
    title: "Manoj Sir",
    author: "teacher",
    info: "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
  {
    img: "https://hubit.com.np/_next/image?url=%2Fimages%2Fjapan.jpg&w=1920&q=75",
    title: "Himal Sir",
    author: "teacher",
    info: "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
  {
    img: "https://hubit.com.np/_next/image?url=%2Fimages%2Fjapan.jpg&w=1920&q=75",
    title: "Narayan Sir",
    author: "teacher",
    info: "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
];

const array = [
  {
    path: "https://hubit.com.np/_next/image?url=%2Fimages%2Fjapan.jpg&w=1920&q=75",
    heading: "Narayan Sir",
    person: "teacher",
    information:
      "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
  {
    path: "https://hubit.com.np/_next/image?url=%2Fimages%2Fjapan.jpg&w=1920&q=75",
    heading: "jivan Sir",
    person: "teacher",
    information:
      "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
  {
    path: "https://hubit.com.np/_next/image?url=%2Fimages%2Fjapan.jpg&w=1920&q=75",
    heading: "manoj Sir",
    person: "teacher",
    information:
      "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
  {
    path: "https://hubit.com.np/_next/image?url=%2Fimages%2Fjapan.jpg&w=1920&q=75",
    heading: "hello Sir",
    person: "teacher",
    information:
      "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
];

const Courses = () => {
  const [index, setIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);
  const { img, title, author, info } = obj[index];
  const { path, heading, person, information } = array[secondIndex];

  const increaseItem = () => {
    if (index >= obj.length - 1 && secondIndex >= array.length - 1) {
      setIndex(0);
      setSecondIndex(0);
    } else {
      setSecondIndex(secondIndex + 1);
      setIndex(index + 1);
    }
  };
  const decreaseItem = () => {
    if (index <= 0 && secondIndex <= 0) {
      setIndex(obj.length - 1);
      setSecondIndex(array.length - 1);
    } else {
      setSecondIndex(secondIndex - 1);
      setIndex(index - 1);
    }
  };
  return (
    <div>
      <div className="flex flex-col  w-full items-center mt-10 h-32 ">
        <img
          src="https://www.designnetworknorth.org/wp-content/uploads/2016/07/KNOWLEDGE-PURPLE-1.png"
          alt=""
          className="w-12"
        />
        <h1 className="font-bold text-2xl capitalize">our popular courses</h1>
        <button className="bg-[#F3F4F6] py-1 px-3 rounded-xl">
          explore more courses
        </button>
      </div>
      <div className="flex justify-end gap-2 pr-10 text-2xl text-mainColor">
        <AiFillLeftCircle />
        <AiFillRightCircle />
      </div>
      <div className=" w-10/12 mx-auto grid grid-cols-5">
        <div className="lg:col-span-2 pd:col-span-full flex h-full flex-col justify-center">
          <p className="font-bold text-3xl">Why Choose</p>
          <p className="text-mainColor text-3xl font-bold">HUBIT</p>
        </div>
        <div className="lg:col-span-3 pd:col-span-full py-12 justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 pd:grid-cols-1 gap-10">
            {data.map((val, i) => {
              return (
                <div key={i} className="flex flex-col  gap-2">
                  <val.image className="text-4xl border-2 border-black rounded-full py-1 pb-2 mb-1 mx-auto" />
                  <h2 className="font-bold capitalize">{val.title}</h2>
                  <p className="text-start">{val.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex  w-full  flex-col gap-2 mt-32 px-4">
        <h1 className="font-bold text-mainColor text-3xl text-center">
          What Our Student Say About Us
        </h1>
        <p className="text-base font-light  text-gray-700 text-center ">
          Here some testimonials about the experience of our students in HUB IT
          TRAINING
        </p>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-5 mt-20 pb-20">
        <div className="md:col-span-2 pd:col-span-full  lg:block  pd:block ">
          <AiFillLeftCircle
            className="text-5xl text-mainColor"
            onClick={() => decreaseItem()}
          />
          <div className=" bg-[#E5E7EB] pt-2 pb-6 px-3 rounded-lg">
            <div>
              <div className="flex relative justify-between">
                <img
                  src={img}
                  alt=""
                  className="w-16 absolute top-5 left-[-30px] border rounded-full h-16  "
                />
              </div>
              <div className="ml-10">
                <p>{title}</p>
                <p>{author}</p>
                <p className="h-24 overflow-scroll information bg-[#E5E7EB]">
                  {info}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1  md:mt-0 pd:mt-10 "></div>
        <div className="md:col-span-2 pd:col-span-full lg:block  pd:block">
          <div className=" bg-[#E5E7EB] pt-2 pb-6 px-3 rounded-lg ">
            <div>
              <div className="flex relative justify-between">
                <img
                  src={path}
                  alt=""
                  className="w-16 absolute top-5 left-[-30px] border rounded-full h-16 "
                />
              </div>
              <div className="ml-10">
                <p>{heading}</p>
                <p>{person}</p>
                <p className="h-24 overflow-scroll information bg-[#E5E7EB]">
                  {information}
                </p>
              </div>
            </div>
          </div>
          <AiFillRightCircle
            className="text-5xl text-mainColor"
            onClick={() => increaseItem()}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;

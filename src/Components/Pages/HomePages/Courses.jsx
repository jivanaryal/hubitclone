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
    img: "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjapan.4627b6f7.jpg&w=1920&q=75",
    title: "Hari Sir",
    author: "teacher",
    info: "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
  {
    img: "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjapan.4627b6f7.jpg&w=1920&q=75",
    title: "Manoj Sir",
    author: "teacher",
    info: "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
  {
    img: "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjapan.4627b6f7.jpg&w=1920&q=75",
    title: "Himal Sir",
    author: "teacher",
    info: "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
  {
    img: "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjapan.4627b6f7.jpg&w=1920&q=75",
    title: "Narayan Sir",
    author: "teacher",
    info: "ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .",
  },
];

const Courses = () => {
  const [index, setIndex] = useState(0);
  const { img, title, author, info } = obj[index];

  const increaseItem = (props) => {
    if (index >= props.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const decreaseItem = (props) => {
    if (index <= 0) {
      setIndex(props.length - 1);
    } else {
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
        <div className="col-span-2 flex h-full flex-col justify-center">
          <p className="font-bold text-3xl">Why Choose</p>
          <p className="text-mainColor text-3xl font-bold">HUBIT</p>
        </div>
        <div className="col-span-3 py-12 justify-center">
          <div className="grid grid-cols-3 gap-10">
            {data.map((val, i) => {
              return (
                <div key={i} className="flex flex-col gap-2">
                  <val.image className="text-4xl border-2 border-black rounded-full py-1 pb-2 mb-1 mx-auto" />
                  <h2 className="font-bold capitalize">{val.title}</h2>
                  <p className="text-start">{val.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex  w-full items-center flex-col gap-2 mt-32">
        <h1 className="font-bold text-mainColor text-3xl">
          What Our Student Say About Us
        </h1>
        <p className="text-base">
          Here some testimonials about the experience of our students in HUB IT
          TRAINING
        </p>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-5 mt-20 pb-20">
        <div className="col-span-2 flex gap-10">
          <AiFillLeftCircle
            className="text-5xl text-mainColor"
            onClick={() => decreaseItem(obj)}
          />
          <div className=" bg-[#E5E7EB] pt-2 pb-6 px-3 rounded-lg ">
            <div>
              <div className="flex relative justify-between">
                <img
                  src={img}
                  alt=""
                  className="w-16 absolute top-5 left-[-30px] border rounded-full h-16 "
                />
              </div>
              <div className="ml-10">
                <p>{title}</p>
                <p>{author}</p>
                <p>{info}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2 flex gap-10">
          <div className=" bg-[#E5E7EB] pt-2 pb-6 px-3 rounded-lg ">
            <div>
              <div className="flex relative justify-between">
                <img
                  src={img}
                  alt=""
                  className="w-16 absolute top-5 left-[-30px] border rounded-full h-16 "
                />
              </div>
              <div className="ml-10">
                <p>{title}</p>
                <p>{author}</p>
                <p>{info}</p>
              </div>
            </div>
          </div>
          <AiFillRightCircle
            className="text-5xl text-mainColor"
            onClick={() => increaseItem(obj)}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;

import React from "react";

const data = [
  {
    img: "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjapan.4627b6f7.jpg&w=1920&q=75",
    title: "Placement At Hub It Pvt.Ltd",
    author: "jivan aryal",
    job: "web design",
  },
  {
    img: "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjapan.4627b6f7.jpg&w=1920&q=75",
    title: "Placement At Hub It Pvt.Ltd",
    author: "jivan aryal",
    job: "web design",
  },
  {
    img: "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjapan.4627b6f7.jpg&w=1920&q=75",
    title: "Placement At Hub It Pvt.Ltd",
    author: "jivan aryal",
    job: "web design",
  },
  {
    img: "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjapan.4627b6f7.jpg&w=1920&q=75",
    title: "Placement At Hub It Pvt.Ltd",
    author: "jivan aryal",
    job: "web design",
  },
  {
    img: "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjapan.4627b6f7.jpg&w=1920&q=75",
    title: "Placement At Hub It Pvt.Ltd",
    author: "jivan aryal",
    job: "web design",
  },
];

const Sucess = () => {
  return (
    <div className="w-10/12 mx-auto pt-20 bg-[#FFFFFF] ">
      <h1 className="text-3xl text-center text-mainColor capitalize pb-10">
        some of our students sucess stories
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 pd:grid-cols-1  md:pl-2 pd:pl-12">
        {data.map((val, i) => {
          return (
            <div
              key={i}
              className="hover:scale-110 duration-700 delay-75 transition-all w-[13.9rem] shadow-2xl pt-10 ">
              <div>
                <img
                  src={val.img}
                  alt=""
                  className="w-[13.9rem] rounded-t-lg  h-44"
                />
              </div>
              <div className="pl-2 pr-2 border-2  rounded-b-md w-56 ">
                <div className="border-b-2 py-4 text-md  ">{val.title}</div>
                <div className="flex justify-between pb-5 pt-2">
                  <div className="text-sm capitalize">{val.author}</div>
                  <div className="text-sm text-mainColor">{val.job}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sucess;

import React from "react";

const data = [
  {
    image:
      "https://hubit.com.np/_next/static/media/Rectangle%2025.35a14a04.svg",
  },
  {
    image:
      "https://hubit.com.np/_next/static/media/Rectangle%2026aa.a644820c.svg",
  },
];

const Welcome = () => {
  return (
    <div className="bg-[#F4F4F4] pt-20 pb-10">
      <div className=" w-11/12 mx-auto grid grid-cols-5 gap-20 ">
        <div className="lg:col-span-3 md:col-span-5 pd:col-span-5">
          <div className="flex flex-col gap-4  justify-center">
            <h1 className="font-bold text-6xl pb-4">Welcome To Our Portal</h1>
            <p className="text-justify text-gray-500 lg:block pd:hidden ">
              Lorem ipsum dolor sit amt consectetur adipisicing elit. Dolores
              quia rerum natus voluptate voluptates odit ducimus consectetur
              voluptatem obcaecati, eligendi itaque quasi delectus at officiis
              quas porro unde aperiam ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolores quia rerum natus voluptate
              voluptates odit ducimus consectetur voluptatem obcaecati, eligendi
              itaque quasi delectus at officiis quas porro unde aperiam ipsa.
            </p>
            <button className="border-2 w-fit py-1 px-2 rounded-3xl border-mainColor text-mainColor text-start">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-span-2 grid gap-4 grid-cols-4 bg-red-600  lg:w-full ">
          <div className="md:col-span-2 pd:col-span-4   relative">
            <img
              src="https://hubit.com.np/_next/image?url=%2Fimages%2Fportal.jpg&w=1920&q=75"
              alt=""
              className="opacity-80 md:w-full h-full"
            />
          </div>
          <div className="grid gap-4 col-span-2 bg-green-700 ">
            {data.map((val, i) => {
              return (
                <div key={i} className="bg-purple-500 ">
                  <img
                    src={val.image}
                    alt=""
                    className=" bg-yellow-600 lg:w-full md:w-full   pd:full pd:mr-4"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

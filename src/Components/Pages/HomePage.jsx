import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

const url =
  "https://hubit.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteacher.f0c1ea44.png&w=1920&q=75";

const Image = [
  {
    image: BsFacebook,
  },
  {
    image: BsInstagram,
  },
  {
    image: BsTwitter,
  },
  {
    image: BsWhatsapp,
  },
];

const HomePage = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[40%]  flex flex-col gap-4 ml-28  h-[80vh] justify-center">
          <div className="flex gap-6">
            {Image.map((val, i) => {
              return (
                <div key={i}>
                  <val.image className="p-2  rounded-full  border-2 border-[#A0047D] text-4xl  text-mainColor" />
                </div>
              );
            })}
          </div>
          <div className="text-3xl text-mainColor font-bold capitalize">
            iT training institute in nepal
          </div>
          <div className="text-xl text-justify">
            HUB IT is recognized as one of Nepal’s best global skill development
            and IT training centers. The journey of HUB IT started in 2017 with
            a big dream to bring applied education to the mass population at an
            affordable cost. The main purpose of HUB IT is to facilitate, with
            the best IT-related skills.
          </div>
          <div className="flex gap-6 items-center pt-8">
            <button className="border px-2 py-2 rounded-full border-mainColor text-mainColor text-xl">
              Explore More...
            </button>
            <div className="flex text-mainColor gap-2 items-center">
              <AiFillPlayCircle className="text-5xl" />
              <span className="text-2xl">Watch Now</span>
            </div>
          </div>
        </div>

        <div className="flex items-center w-[60%]">
          <img src={url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

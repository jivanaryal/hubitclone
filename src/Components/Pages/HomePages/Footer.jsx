import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#000000]">
      <div className="flex justify-around  text-white py-8">
        <div className="first-item">
          <div className="text-3xl ">Links</div>
          <div className="capitalize flex flex-col gap-2 py-2">
            <p>home</p>
            <p>About Us</p>
            <p>Our Services</p>
            <p>Latest Information</p>
            <p>Recent A Quote</p>
            <p>Get In Touch</p>
          </div>
        </div>
        <div className="second-item">
          <div className="text-3xl ">About</div>
          <div className="capitalize flex flex-col gap-2 py-2">
            <p>Company</p>
            <p>Careers</p>
            <p>Customers</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="third-item">
          <div className="text-3xl ">Featured Courses</div>
          <div className="capitalize flex flex-col gap-2 py-2">
            <p>MERN Stack Development</p>
            <p> Starts In March 20,2020</p>
            <p>Web Designing</p>
            <p>Starts In April 21,2020</p>
          </div>
        </div>
        <div className="fourth-item">
          <div className="text-3xl ">Our Contact</div>
          <div className="capitalize flex flex-col gap-2 py-2">
            <p>+977-071532805,9827494116,9857045414</p>
            <p> training@hubit.com.np</p>
            <p>Butwal-09 (Ganesh Path),Milanchowk Rupandehi Nepal</p>
          </div>
        </div>
      </div>
      <hr className=" text-white  w-11/12 mx-auto" />`
      <div className="flex gap-10 items-center px-20">
        <img src="https://hubit.com.np/hubitLogo.svg" alt="" className="w-28" />
        <p className="text-white">
          Terms & Condition Privacy Policy License Agreement Copyright © 2023,
          Hub IT
        </p>
      </div>
    </div>
  );
};

export default Footer;

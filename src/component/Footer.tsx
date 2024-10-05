import React from "react";
import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import linkedIn from "../assets/linkedin.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="relative">
      <hr className="border border-gray-200" />

      <div className="flex py-[1rem] px-[2rem] flex-col gap-[4rem] h-[20rem] mt-[3rem]">
        <div className="flex gap-[4rem] w-full items-center justify-center">
          <img
            src={Github}
            alt=""
            className="w-[2rem] h-[2rem] cursor-pointer"
          />
          <img
            src={Instagram}
            alt={Instagram}
            className="w-[2rem] h-[2rem] cursor-pointer"
          />
          <img
            src={linkedIn}
            alt=""
            className="w-[2rem] h-[2rem] cursor-pointer"
          />
        </div>
        <div className="flex gap-[4rem] w-full items-center justify-center">
          <img src={logo} alt="" className="w-[10rem]" />
        </div>
        <div className="blurr w-[52rem] blur-2xl h-[50rem] mt-5 animate-spin left-0 bg-[#fd782b]/10"></div>
        <div className="blurr w-[52rem] blur-2xl h-[50rem] mt-5 animate-spin right-0 bg-[#fd782b]/10"></div>
      </div>
    </div>
  );
};

export default Footer;

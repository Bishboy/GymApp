import React from "react";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";

const Plan = () => {
  return (
    <div className="mt-[4rem] px-[2rem] flex flex-col gap-[4rem] relative">  
        <div className="blurr w-[52rem] blur-2xl h-[50rem] mt-5 animate-spin left-0 bg-[#fd782b]/20"></div>
        <div className="blurr w-[52rem] blur-2xl h-[50rem] mt-5 animate-spin right-0 bg-[#fd782b]/20"></div>
      <div className=" flex flex-col md:flex-row md:gap-[2rem] items-center justify-center font-bold md:text-[3rem] text-[1.5rem]">
        <span className="strokeText">READY TO START</span>
        <span> YOUR JOURNEY</span>
        <span className="strokeText">NOW WITH US</span>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center gap-[3rem]">
        {plansData.map((items) => (
          <div
            key={items.id}
            className={`${
              items.id === 2 ? "bg-custom-gradient md:scale-110" : ""
            } flex flex-col p-[1.5rem] bg-[#656565] w-[20rem] gap-[2rem] text-white`}
          >
            {items.icon}
            <span className="font-bold">{items.name}</span>
            <span className="text-[3rem] font-bold">${items.price}</span>
            <div className="flex items-center flex-col">
              {items.features.map((feature, i) => (
                <div key={i} className="flex items-center w-full gap-[1rem]">
                  <img src={whiteTick} alt="" className="w-[1rem]" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="text-[o.8rem]">See more benefits</span>
            </div>
            <button className="btn bg-white text-black">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;

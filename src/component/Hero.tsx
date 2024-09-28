import React from "react";
import Header from "./Header";
import hero_image from "../../src/assets/hero_image.png";
import hero_image_black from "../../src/assets/hero_image_back.png";
import Hearts from "../../src/assets/heart.png";
import Calories from "../../src/assets/calories.png";

const Hero: React.FC = () => {
  return (
    <div className="flex justify-between px-[4rem]  gap-2  ">
      <div className="py-[1rem] flex flex-col gap-[2rem] px-2 w-[70%] ">
        <Header />
        <div className="mt-[4rem] bg-[#363d42] relative text-white items-center justify-start uppercase rounded-[4rem] w-fit p-4 px-6">
          <div className="absolute z-10 bg-[#f48915] w-[4.5rem] h-[80%] left-[8px] top-[6px] rounded-[3rem]"></div>
          <span className="z-50 relative">the best fitness club in town</span>
        </div>

        <div className="flex flex-col gap-[1.5rem] uppercase text-[4.5rem] font-bold text-white truncate ">
          <div>
            <span className="strokeText">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="text-[1rem] font-light leading-3 w-[80%] capitalize mb-2">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to the fullest
            </span>
          </div>
        </div>
        <div className="flex gap-[2rem]">
          <div className="flex flex-col">
            <span className="text-white text-[2rem]">+ 140</span>
            <span className="text-[#9c9c9c] uppercase">Expert coaches</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[2rem]">+ 978</span>
            <span className="text-[#9c9c9c] uppercase">Members Joined</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[2rem]">+ 50</span>
            <span className="text-[#9c9c9c] uppercase">Fitness Programs</span>
          </div>
        </div>
        <div className="flex gap-[1rem] ">
          <button className="btn text-white bg-[#f48915] rounded-md w-[8rem]">
            Get Started
          </button>
          <button className="btn text-white bg-transparent border-[#f48915] rounded-md w-[8rem]">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex flex-1 relative bg-[#f48915]">
        <button className="btn bg-white absolute right-[3rem] text-black top-[2rem] whitespace-nowrap">
          Join now
        </button>
        <div className="flex flex-col bg-[#464D53] items-center rounded-[5px] absolute right-[4rem] top-[7rem] w-fit p-[1rem]  h-fit gap-[1rem]">
          <img src={Hearts} alt="" className="w-[2rem]" />
          <span className="text-[#87929c]">heart rate</span>
          <span className="text-white text-[1.5rem]">116 bpm</span>
        </div>

        <img
          src={hero_image}
          alt=""
          className="absolute top-[10rem] right-[8rem] w-[23rem]"
        />
        <img
          src={hero_image_black}
          alt=""
          className="absolute top-[4rem] right-[20rem] w-[15rem] -z-10"
        />

        <div className="flex gap-[2rem]  p-[1rem] items-center justify-center px-[4rem] absolute top-[32rem] right-[28rem] w-fit rounded-[5px] bg-[#656565]">
          <img src={Calories} alt="" className="w-[3rem]" />
          <div className="flex flex-col justify-between">
            <span className="whitespace-nowrap text-sm" >Calories Burned</span>
            <span className="text-white text-[1.5rem] whitespace-nowrap" >220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

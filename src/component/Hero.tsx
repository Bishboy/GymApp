import React from "react";
import Header from "./Header";
import hero_image from "../../src/assets/hero_image.png";
import hero_image_black from "../../src/assets/hero_image_back.png";
import Hearts from "../../src/assets/heart.png";
import Calories from "../../src/assets/calories.png";
import { motion } from "framer-motion";

const Hero: React.FC = () => {

  const transition = {type: 'spring', duration: 3}
  return (
    <div className="flex flex-col md:flex-row justify-between md:px-[4rem] px-2  gap-2  ">
      <div className="blurr w-[25rem]  lg:w-[52rem] blur-2xl h-[50rem] mt-5  left-0 bg-[#fd782b]/20"></div>
      <div className="py-[1rem] flex items-center md:items-start flex-col gap-[2rem] px-2 w-[70%] ">
        <Header />
        <div className="mt-[4rem] bg-[#363d42] relative text-white items-center justify-start uppercase rounded-[4rem] w-fit p-4 px-6">
          <motion.div className="absolute z-10 bg-[#f48915] w-[4.5rem] h-[80%] left-[8px] top-[6px] rounded-[3rem]"
          initial={{left: '238px'}}
          whileInView={{left:'8px'}}
          transition={{...transition, type: 'tween'}}
          >

          </motion.div>
          <span className="z-50 relative text-xs md:text-base">the best fitness club in town</span>
        </div>

        <div className="flex flex-col gap-[1.5rem] uppercase md:text-[4.5rem] text-center md:text-start font-bold text-white truncate ">
          <div>
            <span className="strokeText ">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="md:text-[1rem] text-[0.8rem] font-light text-wrap md:text-nowrap  leading-3 md:w-[80%] capitalize mb-2">
            <span >
              In here we will help you to shape and build your ideal body and
              live up your life to the fullest
            </span>
          </div>
        </div>
        <div className="flex  gap-3 relative w-full items-center md:gap-[2rem]">
          <div className="flex flex-col">

            <span className="text-white md:text-[2rem] ">+ 140</span>
            <span className="text-[#9c9c9c] uppercase">Expert coaches</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white md:text-[2rem]">+ 978</span>
            <span className="text-[#9c9c9c] uppercase">Members Joined</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white md:text-[2rem]">+ 50</span>
            <span className="text-[#9c9c9c] uppercase">Fitness Programs</span>
          </div>
        </div>
        <div className="flex gap-[1rem]  justify-center md:justify-start ">
          <button className="btn text-white md:textbase text-xs whitespace-nowrap bg-[#f48915] rounded-md md:w-[8rem]">
            Get Started
          </button>
          <button className="btn text-white md:text-base text-xs  whitespace-nowrap bg-transparent border-[#f48915] rounded-md md:w-[8rem]">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex flex-1 relative  md:bg-[#f48915]">
        <button className="btn bg-white absolute right-[3rem] text-black top-[2rem] whitespace-nowrap">
          Join now
        </button>
        <motion.div className="flex flex-col bg-[#464D53] items-center rounded-[5px] absolute right-[4rem] top-[7rem] w-fit p-[1rem]  h-fit gap-[1rem]"
        initial={{right: '-1rem' }}
        whileInView={{right: '4rem'}}
        transition={transition}>
          <img src={Hearts} alt="" className="w-[2rem]" />
          <span className="text-[#87929c]">heart rate</span>
          <span className="text-white text-[1.5rem]">116 bpm</span>
        </motion.div>

        <img
          src={hero_image}
          alt=""
          className="absolute top-[10rem] right-[8rem] w-[23rem]"
        />
        <motion.img
          src={hero_image_black}
          initial={{right: '11rem'}}
          whileInView={{right:'20rem'}}
          transition={transition}
          alt=""
          className="absolute top-[4rem] right-[20rem] w-[15rem] -z-10"
        />

        <motion.div className="flex gap-[2rem]  p-[1rem] items-center justify-center px-[4rem] absolute top-[32rem] right-[28rem] w-fit rounded-[5px] bg-[#656565]"
        initial={{right: '37rem'}}
        whileInView={{right:'28rem'}}
        transition={transition}>
          <img src={Calories} alt="" className="w-[3rem]" />
          <div className="flex flex-col justify-between">
            <span className="whitespace-nowrap text-sm">Calories Burned</span>
            <span className="text-white text-[1.5rem] whitespace-nowrap">
              220 kcal
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

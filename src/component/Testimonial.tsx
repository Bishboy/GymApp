import React, { useState } from 'react'
import { testimonialsData } from '../data/testimonialsData'
import rightArrow from '../assets/rightArrow.png'
import leftArrow from '../assets/leftArrow.png'
import { motion } from 'framer-motion'


const Testimonial = () => {
   const transition = { type: "spring", duration: 3 };
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length;
  //this is beautifulff
    const moveLeft= () => {
        if(selected === 0){
            setSelected(tLength -1)
        }else{
            setSelected((prev)=> prev - 1)
        }
    }

    const moveRight = () => {
        if(selected === tLength - 1){
            setSelected(0)
        }else{
            setSelected((prev)=> prev + 1)
        }
    }
    
  return (
    <div className=" flex flex-col py-[2rem] md:flex-row gap-[3rem] md:gap-[1rem] px-[2rem]">
      <div className="flex flex-1 gap-[2rem] flex-col uppercase text-white">
        <span className="text-orange-500 font-bold">testimonials</span>
        <span className="strokeText font-bold text-[3rem]">What they</span>
        <span className=" font-bold text-[3rem]">say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          className="capitalize  text-justfy"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className="text-orange-500">
            {testimonialsData[selected].name}
          </span>
          -{testimonialsData[selected].status}
        </span>
      </div>

      <div className="relative flex-1 flex flex-col py-[10rem] md:py-0 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute w-[17rem] h-[20rem] border-2 border-orange-400 right-[3rem] md:right-[9rem] bg-transparent top-[0.9rem]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute w-[17rem] h-[19rem] top-[4rem] bg-orange-500 right-[3rem] md:right-[7rem]"
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
          className="absolute  w-[17rem] h-[20rem] object-cover right-[3rem] md:right-[8rem] top-[2rem] "
        />
        <div className="flex gap-2 items-center absolute left-[3rem] bottom-[1rem]  ">
          <img
            onClick={moveLeft}
            src={leftArrow}
            alt=""
            className="w-[1.2rem] cursor-pointer"
          />
          <img
            onClick={moveRight}
            src={rightArrow}
            alt=""
            className=" w-[1.2rem] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial

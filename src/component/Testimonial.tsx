import React, { useState } from 'react'
import { testimonialsData } from '../data/testimonialsData'
import rightArrow from '../assets/rightArrow.png'
import leftArrow from '../assets/leftArrow.png'
const Testimonial = () => {
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length;
  //this is beautiful
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
    <div className=" flex gap-[1rem] px-[2rem]">
      <div className="flex flex-1 gap-[2rem] flex-col uppercase text-white">
        <span className="text-orange-500 font-bold">testimonials</span>
        <span className="strokeText font-bold text-[3rem]">What they</span>
        <span className=" font-bold text-[3rem]">say about us</span>
        <span className="capitalize  text-justfy">
          {testimonialsData[selected].review}
        </span>
        <span>
          <span className="text-orange-500">
            {testimonialsData[selected].name}
          </span>
          -{testimonialsData[selected].status}
        </span>
      </div>
      <div className="relative flex-1">
        <div className="absolute w-[17rem] h-[20rem] border-2 border-orange-400 right-[9rem] bg-transparent top-[0.9rem]"></div>
        <div className="absolute w-[17rem] h-[19rem] top-[4rem] bg-orange-500 right-[7rem]"></div>
        <img
          src={testimonialsData[selected].image}
          alt=""
          className="absolute w-[17rem] h-[20rem] object-cover right-[8rem] top-[2rem] "
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

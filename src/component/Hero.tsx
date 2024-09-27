import React from 'react'
import Header from './Header';

const Hero: React.FC = () => {
  return (
    <div className="flex justify-between  gap-2  ">
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
          <div>
            <span></span>
          </div>
        </div>
      </div>
      <div className="flex flex-1">right side</div>
    </div>
  );
};

export default Hero
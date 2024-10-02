import React from "react";
import image1 from "../../src/assets/image1.png";
import image2 from "../../src/assets/image2.png";
import image3 from "../../src/assets/image3.png";
import image4 from "../../src/assets/image4.png";
import nb from "../../src/assets/nb.png";
import addidas from "../../src/assets/adidas.png";
import nike from "../../src/assets/nike.png";
import tick from "../../src/assets/tick.png";

const Reasons = () => {
  return (
    <div className="px-[2rem] flex  gap-[2rem]">
      <div className="flex-1 grid grid-cols-3 gap-4 auto-rows-fr">
        <img
          src={image1}
          alt=""
          className="object-cover w-[12rem] h-[28rem] row-span-2"
        />
        <img
          src={image2}
          alt=""
          className="object-cover w-auto h-[16rem] col-start-2 col-span-2"
        />
        <img
          src={image3}
          alt=""
          className="object-cover w-[14rem] col-start-2 col-end-3 row-span-1"
        />
        <img
          src={image4}
          alt=""
          className="object-cover w-[10rem]  h-[11.2rem] "
        />
      </div>
      <div className="flex-1 uppercase gap-[1rem] flex flex-col ">
        <span className=" font-bold text-orange-500">Some reasons</span>
        <div className="text-[3rem] text-white font-bold">
          <span className="strokeText  ">Why</span>
          <span className=" "> Choose us</span>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex text-[1rem] gap-[1rem]">
            <img src={tick} alt=""></img>
            <span>Over 140+ Expert Coaches</span>
          </div>
          <div className="flex text-[1rem] gap-[1rem]">
            <img src={tick} alt="" />
            <span>TRAIN SMATER AND FASTER THAN BEFORE </span>
          </div>
          <div className="flex text-[1rem] gap-[1rem]">
            <img src={tick} alt="" />
            <span> 1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div className="flex text-[1rem] gap-[1rem]">
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className="text-gray-500 font-semibold uppercase">
          Our Partners
        </span>
        <div className="flex gap-[1rem]">
          <img src={nb} alt=""  className="w-[2.5rem]"/>
          <img src={addidas} alt="" className="w-[2.5rem]" />
          <img src={nike} alt=""  className="w-[2.5rem]"/>
        </div>
      </div>
    </div>
  );
};
//
export default Reasons;

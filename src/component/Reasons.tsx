import React from 'react'
import image1 from '../../src/assets/image1.png'
import image2 from '../../src/assets/image2.png'
import image3 from "../../src/assets/image3.png";
import image4 from "../../src/assets/image4.png";
import nb from "../../src/assets/nb.png";
import addidas from "../../src/assets/adidas.png";
import nike from "../../src/assets/nike.png";
import tick from "../../src/assets/tick.png";


const Reasons = () => {
  return (
    <div className="px-[2rem] flex " style={{ gridTemplate: "2rem" }}>
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
          className="object-cover w-[10rem]  "
        />
      </div>
      <div className="flex-1 "></div>
    </div>
  );
}
 //
export default Reasons
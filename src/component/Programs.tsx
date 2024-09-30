 import React from "react";
 import { programsData } from "../data/programsData";
 import rightArrow from "../assets/rightArrow.png";

 // Define the type for a single program item
 interface ProgramItem {
   image: React.ReactNode; // Adjust based on how `image` is represented in your data
   heading: string;
   details: string;
 }

 const Programs: React.FC = () => {
   return (
     <div className="flex flex-col gap-[2rem] px-[2rem] py-9">
       <div className="flex gap-[5rem] text-[3rem] font-bold justify-center text-white uppercase italic whitespace-nowrap">
         <span className="strokeText">Explore our</span>
         <span>Programs</span>
         <span className="strokeText"> to shape you</span>
       </div>
       <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-[1rem] justify-between">
         {programsData.map((items: ProgramItem, index: number) => (
           <div
             key={index}
             className="flex min-h-[18rem] lg:min-w-[10rem] min-w-fit flex-col hover:bg-custom-gradient duration-700 transition-all ease-in-out bg-gray-500 p-[2rem] text-white gap-[1rem] justify-between"
           >
             <span className="min-w-[4rem] text-white h-[2rem] flex-shrink-0 fill-white">
               {items.image}
             </span>
             <span className="text-[1rem] font-bold">{items.heading}</span>
             <span className="text-[0.9rem] leading-[25px]">
               {items.details}
             </span>
             <div className="flex gap-[1rem] items-center justify-between">
               <span>Join Now</span>
               <img src={rightArrow} alt="Right Arrow" className="w-[1rem]" />
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };

 export default Programs;

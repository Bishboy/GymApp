import React from 'react' 
import Logo from '../../src/assets/logo.png'

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <img src={Logo} alt="" className="w-[10rem] h-[3rem]" />
        <div>
          <ul className="flex gap-[2rem] text-white cursor-pointer whitespace-nowrap ">
            <li className="hover:text-[#f48915]">Home</li>
            <li className="hover:text-[#f48915]">Programs</li>
            <li className="hover:text-[#f48915]">Why US</li>
            <li className="hover:text-[#f48915]"> plans</li>
            <li className="hover:text-[#f48915]">Testimony</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
import React,{useState} from 'react' 
import Logo from '../../src/assets/logo.png'
import { motion } from "framer-motion";
import { MdLegendToggle } from "react-icons/md";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        {/* <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
          <MdLegendToggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
          <ul className="flex gap-[2rem] text-white cursor-pointer whitespace-nowrap bg-black ">
            <li className="hover:text-[#f48915]">Home</li>
            <li className="hover:text-[#f48915]">Programs</li>
            <li className="hover:text-[#f48915]">Why US</li>
            <li className="hover:text-[#f48915]"> plans</li>
            <li className="hover:text-[#f48915]">Testimony</li>
          </ul>
        </motion.nav> */}
      </div>
    </div>
  );
}

export default Header
import React, { useEffect, useState } from "react";
import Logo from "../../src/assets/logo.png";
import { motion } from "framer-motion";
import { MdLegendToggle } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // This closes the mobile menu
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        scroll ? "bg-[#b0a8a3]" : "bg-orange-300"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={Logo} alt="Logo" className="w-[10rem] h-[2rem]" />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white">
            {["home", "programs", "why-us", "plans", "testimony"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleScroll(e, item)}
                    className="hover:text-[#f48915] transition-colors capitalize"
                  >
                    {item.replace("-", " ")}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IoCloseSharp /> : <MdLegendToggle />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[5rem] left-0 w-full h-[calc(100vh-5rem)] bg-[#b0a8a3] flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8 text-white text-xl">
              {["home", "programs", "why-us", "plans", "testimony"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={(e) => handleScroll(e, item)}
                      className="hover:text-[#f48915] transition-colors capitalize"
                    >
                      {item.replace("-", " ")}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;

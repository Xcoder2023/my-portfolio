import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 hidden lg:block">
      <div className="flex items-center justify-between h-[90px] px-5 md:px-20 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-2 text-[#374151]" style={{ fontFamily: "Georgia" }}>
          <a href="/" className="flex items-center">
            <span className="text-[28.2px] font-bold leading-[32.05px] text-[#1E3A8A]">xcoder</span>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 30 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4 gap-4 font-normal text-[18px] leading-[21.6px]">
          <button onClick={() => handleScroll("about")} className="text-gray-600 hover:text-blue-700">
            About
          </button>
          <button onClick={() => handleScroll("skills")} className="text-gray-600 hover:text-blue-700">
            Skills
          </button>
          <button onClick={() => handleScroll("projects")} className="text-gray-600 hover:text-blue-700">
            Projects
          </button>
        </div>
        <div className="hidden md:block">
          <a
            href="mailto:xcoder2023@gmail.com"
            className="p-[16px] w-full bg-[#1E3A8A] text-white rounded-[8px] font-normal text-[18px] leading-[21.6px]"
          >
            Contact Us
          </a>
        </div>
        <div
          className={`fixed inset-0 h-screen w-full bg-black bg-opacity-25 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out ${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed top-0 right-0 h-screen w-[50%] bg-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 overflow-hidden`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-end h-[108px] px-5 bg-white">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-start gap-7 pl-5 font-normal text-[18px] leading-[21.6px]">
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="text-gray-600 hover:text-blue-700"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("skills")}
                className="text-gray-600 hover:text-blue-700"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="text-gray-600 hover:text-blue-700"
              >
                Projects
              </button>
            </li>
            <li>
              <a
                href="mailto:xcoder2023@gmail.com"
                className="p-[16px] w-[154px] h-[48px] bg-[#1E3A8A] text-white rounded-[16px] font-semibold text-[18px] leading-[21.6px]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Contact from "../contact/Contact";
import Skillpage from "../skills/Skillpage";
import Projects from "../projects/Projects";
import About from "../aboutPage/About";
import CV from "../assets/documents/MATHIAS.pdf"

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  const [click, setClick] = useState(false);
  const handleClicked = () => setClick(!click);

  const [swipe, setSwipe] = useState(false);
  const handleSwiped = () => setSwipe(!swipe);

  const [slide, setSlide] = useState(false);
  const handleSlide = () => setSlide(!slide);

  return (
    <>
      <div className=" bg-[url('/src/components/assets/software-developer.jpg')] bg-center bg-cover w-full h-[100vh] bg-no-repeat hidden lg:block">
        <div className=" flex justify-center text-slate-50 p-5 items-center">
          <ul className="set flex gap-5 bg-blue-700 p-7 -mt-10 cursor-pointer">
            <li
              className=" text-green-300 hover:underline hover:text-yellow-500 text-[30px] font-extrabold"
              onClick={handleSlide}
            >
              About
            </li>
            <li
              className=" hover:underline hover:text-yellow-500 text-[30px] font-extrabold"
              onClick={handleToggle}
            >
              Skills
            </li>
            <li className=" text-white hover:underline hover:text-yellow-500 text-[30px] font-extrabold">
              Experiences
            </li>
            <li
              className=" text-green-300 hover:underline hover:text-yellow-500 text-[30px] font-extrabold"
              onClick={handleSwiped}
            >
              Projects
            </li>
          </ul>
        </div>
        <div className=" flex justify-between items-center pr-12 pt-[120px]">
          <div className=" ml-10 flex justify-center items-center text-[30px] font-serif">
          <TypeAnimation sequence={['Welcome To My Portfolio!',1000,'',1000,'XCODER2023...']} style={{color:'yellow'}} repeat={Infinity} speed={20} wrapper="h1"/>
          </div>
          <div className=" text-blue-50 text-xl w-96 gap-10 flex flex-col font-black ">
            <p>
              Hi, <span className=" text-yellow-500">i am mathias,</span> i
              build smart user interface with usefull interactions, resolves
              design problem, develops classic web applications and seamless web
              experiences.Download my{" "}
              <span className=" text-yellow-500 underline hover:text-green-500">
                <a href={CV} target="" download='mathias-cv.pdf'>
                  CV
                </a>
              </span>{" "}
            </p>
            <div
              className={
                toggle
                  ? "btn active flex justify-center bg-blue-700 "
                  : "btn flex justify-center bg-[rgb(156,15,101)] text-blue-200"
              }
              onClick={handleClicked}
            >
              <button className="bts bg-yellow-30 p-2 flex justify-center items-center gap-2">
                <span className="  flex items-center gap-2 text-center">
                  Hire Me <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
     <div>
     <div className=" hidden xl:block">
        <div
          className={click ? "contact active w-[470px]" : "contact w-[470px]"}
        >
          <TiDeleteOutline
            className="  absolute top-2 left-[440px] bg-gray-300"
            onClick={handleClicked}
          />
          <Contact />
        </div>

        <div className={toggle ? "skill active" : "skill"}>
          <TiDeleteOutline
            className=" absolute left-[634px] top-[106px]  z-10 bg-[red]"
            onClick={handleToggle}
          />
          <Skillpage />
        </div>
        <div className={swipe ? "project active" : "project"}>
          <TiDeleteOutline
            className=" absolute left-[650px] top-[20px] bg-[purple]  text-[white] z-10"
            onClick={handleSwiped}
          />
          <Projects />
        </div>
        <div className={slide ? "about active" : "about"}>
          <TiDeleteOutline
            className=" absolute left-[630px] top-[70px] bg-[yellow]  text-[black] z-10"
            onClick={handleSlide}
          />
          <About />
        </div>
      </div>
     </div>
    </>
  );
};

export default Home;
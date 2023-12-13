import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { FaArrowRight } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineFileDownload } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Contact from "../contact/Contact";
import Skillpage from "../skills/Skillpage";
import Projects from "../projects/Projects";
import About from "../aboutPage/About";
import CV from "../assets/documents/edittedcv.pdf";
import Center from "../mobile/Center";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  const [click, setClick] = useState(false);
  const handleClicked = () => setClick(!click);

  const [swipe, setSwipe] = useState(false);
  const handleSwiped = () => setSwipe(!swipe);

  const [slide, setSlide] = useState(false);
  const handleSlide = () => setSlide(!slide);

  const [scroll, setScroll] = useState(false);
  const handleScroll = () => setScroll(!scroll);

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setisLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spin className=" flex justify-center pt-10" />
      ) : (
        <>
          <div
            className=" bg-[url('/src/components/assets/software-developer.jpg')] bg-center bg-cover w-full h-[100vh] bg-no-repeat hidden lg:block"
            style={{ fontFamily: "poppins" }}
          >
            <div className=" flex justify-center text-slate-50 p-5 items-center text-[20px]">
              <ul className="set flex gap-7 bg-blue-700 p-6 -mt-10 cursor-pointer">
                <li
                  className=" text-green-300 hover:underline hover:text-yellow-500"
                  onClick={handleSlide}
                >
                  About
                </li>
                <li
                  className=" hover:underline hover:text-yellow-500"
                  onClick={handleToggle}
                >
                  Skills
                </li>

                <li
                  className=" text-green-300 hover:underline hover:text-yellow-500"
                  onClick={handleSwiped}
                >
                  Projects
                </li>
              </ul>
            </div>
            <div className=" flex justify-between items-center pr-12 pt-[120px]">
              <div className=" ml-10 flex justify-center items-center text-[20px]">
                <TypeAnimation
                  sequence={[
                    "Welcome To My Portfolio!",
                    1000,
                    "",
                    1000,
                    "XCODER2023...",
                  ]}
                  style={{ color: "yellow" }}
                  repeat={Infinity}
                  speed={20}
                  wrapper="h1"
                />
              </div>
              <div className=" text-blue-50 text-xl w-96 gap-10 flex flex-col">
                <p>
                  Hi, <span className=" text-yellow-500">i am mathias,</span> i
                  build smart user interface with usefull interactions, resolves
                  design problem, develops classic web applications and seamless
                  web experiences.
                  <button className=" text-yellow-500 underline hover:text-green-500 flex items-center">
                    <a href={CV} target="" download="mathias-cv.pdf">
                      CV
                    </a>
                    <MdOutlineFileDownload />
                  </button>{" "}
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
                    Hire Me <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="">
                <div
                  className={
                    click ? "contact active w-[470px]" : "contact w-[470px]"
                  }
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
                    className=" absolute left-[38rem] top-[70px] bg-[yellow]  text-[black] z-10"
                    onClick={handleSlide}
                  />
                  <About />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden block">
            <Center />
          </div>
        </>
      )}
    </>
  );
};

export default Home;

import React from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/documents/TechCv.pdf";

const Mobile = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div className=" bg-[url('/src/components/assets/project/space.jpg')] w-[100%] h-[100vh] bg-no-repeat bg-cover bg-center xl:hidden flex flex-col justify-between">
        <div className=" flex p-2 text-white shadow-md ">
          <p className=" font-black text-[20px]">XCODER</p>
        </div>
        <div
          data-aos="fade-left"
          className=" flex flex-col justify-center items-center mb-[200px] text-[white] p-5 font-bold overflow-hidden"
        >
          <TypeAnimation
            sequence={[
              "Hi,",
              1000,
              "Am Mathias.",
              1000,
              " Front-end developer",
              1000,
            ]}
            style={{ color: "yellow" }}
            repeat={Infinity}
            speed={20}
            wrapper="h1"
          />
          <p>
            I build smart user interface with usefull interactions, resolves
            design problem, develops classic web applications and seamless web
            experiences.
            <button className=" text-yellow-500 underline hover:text-blue-600 cursor-pointer">
              <a href={CV} target="" download="MATHIAS-CV.pdf">
                CV
              </a>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Mobile;

import React from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { TypeAnimation } from "react-type-animation";

const Mobile = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div className=" bg-[url('/src/components/assets/project/space.jpg')] w-[100%] h-[100vh] bg-no-repeat bg-cover bg-center xl:hidden flex flex-col justify-between ">
        <div className=" flex justify-between p-2 text-white shadow-md ">
          <p className=" font-black text-[20px]">XCODER</p>
          <p className=" font-black text[20px]">@2023</p>
        </div>
        <div
          data-aos="fade-left"
          className=" flex flex-col justify-center items-center mb-[200px] text-[white] p-5 font-bold text-[25px] overflow-hidden leading-10"
        >
          <TypeAnimation sequence={['Hi,',1000,'am Mathias E.',1000,' front-end developer',1000]} style={{color:'yellow'}} repeat={Infinity} speed={20} wrapper="h1"/>
          <p>
           I build
            smart user interface with usefull interactions, resolves design
            problem, develops classic web applications and seamless web
            experiences.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mobile;

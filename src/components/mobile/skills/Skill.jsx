import React from 'react'
import { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import htmld from "../../assets/skill logo/downloadhtml.png";
import csslogo from "../../assets/skill logo/CSS3_logo.png";
import js from "../../assets/skill logo/js.webp";
import reactlogo from "../../assets/skill logo/React-icon.svg.png";
import tailwind from "../../assets/skill logo/tailwindcss.jpg";

const Skill = () => {
  useEffect(()=>{
    AOS.init({duration:700});
  },[]);
  return (
    <>
      <div className=' flex flex-col items-center mb-10 overflow-hidden' style={{fontFamily:'poppins'}}>
        <div className=' text-[20px]'><p> Skills</p></div>
          <fieldset className=" border-4 pb-5 pt-5 p-5">
            <legend className=" flex text-center font-extrabold text-[50px] font-serif social"><span className="legend-txt">My Web Tools</span></legend>
            <div className=" grid grid-cols-2 gap-5 items-center ">

              <div data-aos='fade-left' className=" flex items-center justify-center overflow-hidden">
                <img src={htmld} alt="" className="  w-32" />
              </div>

              <div data-aos='fade-right' className=" flex items-center justify-center mb-7 overflow-hidden">
                <img src={tailwind} alt=""/>
              </div>

              <div className=" flex items-center justify-center overflow-hidden">
                <img src={csslogo} alt="" className=" logos w-24" />
              </div>
              <div className=" flex items-center justify-center object-contain overflow-hidden">
                <img src={js} alt="" className=" logos w-32" />
              </div>

              <div  className=" flex items-center justify-center overflow-hidden">
                {" "}
                <img src={reactlogo} alt="" className=" logo w-[100px]" />
              </div>
            </div>
          </fieldset>
        </div>
    </>
  )
}

export default Skill
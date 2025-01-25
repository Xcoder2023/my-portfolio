import React,{useEffect} from 'react'
import "aos/dist/aos.css";
import AOS from "aos";

const Experiences = () => {
  useEffect(()=>{
    AOS.init({duration:700});
  },[]);
  return (
    <>
      <div className="w-[89%] mx-auto flex justify-center overflow-hidden" style={{fontFamily:'poppins'}}>
        <div className=" flex flex-col  items-center  p-3">
          <p className="legend-txt text-[20px] mb-10">
            <span className=" text-[#1E3A8A]">E</span>xperience
          </p>
          <div data-aos='fade-up' className=" flex flex-col gap-3 items-cente border border-[#1E3A8A] rounded-lg p-4 overflow-hidden leading-[24px]">
            <p>
              <span className=" text-[#1E3A8A]">T</span>ranslated complex
              design into interactive user experience to promote customer
              engagement and derive web trafic.
            </p>

            <p >
              <span className=" text-[#1E3A8A]">C</span>ollaborated with other
              developers, designers, and project teams to ensure successful,
              on-schedule development and delivery web applications.
            </p>

            <p >
              {" "}
              <span className=" text-[#1E3A8A]">F</span>ixed website issues or
              bugs that arose.
            </p>

            <p >
              {" "}
              <span className=" text-[#1E3A8A]">C</span>reated tools that
              enhance the user’s experience.
            </p>

            <p >
              <span className=" text-[#1E3A8A]">R</span>outine tested websites
              for ease of use, speed and other quality factors.
            </p>

            <p >
              <span className=" text-[#1E3A8A]">W</span>orked with client to
              developed the overall look and design of a website.
            </p>

            <p >
              <span className=" text-[#1E3A8A]">E</span>nsured website
              accessiblity across gadgets of different sizes such as phones,
              tabs and laptops.
            </p>

            <p >
              <span className=" text-[#1E3A8A]">I</span>ncorporated audio and
              video clips, applications and graphics into client website.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experiences
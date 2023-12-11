import React,{useEffect} from 'react'
import "aos/dist/aos.css";
import AOS from "aos";

const Experiences = () => {
  useEffect(()=>{
    AOS.init({duration:700});
  },[]);
  return (
    <>
      <div className=" flex justify-center overflow-hidden" style={{fontFamily:'poppins'}}>
        <div className=" flex flex-col  items-center  text-white p-3">
          <p className=" text-[20px] pb-2 hover:text-yellow-500 text-[black]">
            <span className=" text-yellow-600">E</span>xperience
          </p>
          <div data-aos='fade-left' className=" flex flex-col gap-3 items-cente border-2 p-3  bg-black rounded-2xl overflow-hidden">
            <p className=" w-[50%">
              <span className=" text-yellow-600">T</span>ranslated complex
              design into interactive user experience to promote customer
              engagement and derive web trafic.
            </p>

            <p >
              <span className=" text-yellow-600">C</span>ollaborated with other
              developers, designers, and project teams to ensure successful,
              on-schedule development and delivery web applications.
            </p>

            <p >
              {" "}
              <span className=" text-yellow-600">F</span>ixed website issues or
              bugs that arose.
            </p>

            <p >
              {" "}
              <span className=" text-yellow-600">C</span>reated tools that
              enhance the user’s experience.
            </p>

            <p >
              <span className=" text-yellow-600">R</span>outine tested websites
              for ease of use, speed and other quality factors.
            </p>

            <p >
              <span className=" text-yellow-600">W</span>orked with client to
              developed the overall look and design of a website.
            </p>

            <p >
              <span className=" text-yellow-600">E</span>nsured website
              accessiblity across gadgets of different sizes such as phones,
              tabs and laptops.
            </p>

            <p >
              <span className=" text-yellow-600">I</span>ncorporated audio and
              video clips, applications and graphics into client website.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experiences
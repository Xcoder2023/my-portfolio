import React from "react";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import mathy from "../../assets/about/mathy.jpg";

const ReadMe = () => {
  const [read, setRead] = useState(false);
  const [visible, setVisible] = useState(true);
  const handleRead = () => {
    setRead((prev) => !prev);
    setVisible(false);
  };
  const toggle = () => {
    setVisible(true);
    setRead((prev) => !prev);
  };
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div className=" flex flex-col justify-center items-center my-3 overflow-hidden" style={{fontFamily:'poppins'}}>
        <div
          data-aos="fade-up"
          className=" flex justify-center text-[20px] overflow-hidden"
        >
          <p className="legend-txt my-10">About</p>
        </div>
        <div
          data-aos="fade-left"
          className=" flex flex-col items-center justify-center gap-5 p-5  overflow-hidden w-[89%] mx-auto"
        >
          <div className="  hover:bg-[blue] flex justify-center">
            <p>
              Hey!{" "}
              <span className=" text-[#1E3A8A] font-black">
                I'm Mathias,
              </span>{" "}
               A passionate front-end developer dedicated to creating elegant user interfaces and seamless web experiences. I specialize in solving design challenges, crafting modern web applications, and delivering impactful interactions that enhance usability and functionality.
            </p>
          </div>
          <div className=" ">
            <img src={mathy} alt="" className=" rounded-full w-32" />
          </div>
          <div className=" flex">
            <div className=" flex justify-center text-start">
              <p>
                {" "}
                Specialized in web development, user interface design, HTML and reactJS adept at identifying opportunities to enhance front-end-design, improve the user experience contributing to
                a highly collaborative work environment, finding solutions and
                determining customer satisfaction.
                <span onClick={handleRead}>
                  {" "}
                  {visible && (
                    <div className=" text-[#1E3A8A]">Read more...</div>
                  )}
                </span>
                {read && (
                  <span className="">
                    I builds exceptional user freindly website of different
                    purpose ranging from E-commernce, School/Church, NGO{" "}
                    <span className="">et al</span> websites I'm a young dynamic
                    and highly motivated person, striving to live a professional
                    life in a performance driven environment where I can face
                    new challenges and exceed all expectations base on
                    improvement built on competence without compromising
                    integrity and with ability to work with little or no
                    supervision to achieve organizational goals or objectives
                    and hope to bring the drive, dedication and cooperation to
                    make significant contribution to the society. <br />{" "}
                    <span className=" text-yellow-500" onClick={toggle}>
                      See less...
                    </span>{" "}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMe;

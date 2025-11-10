import React from "react";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
// import mathy from "../../assets/about/mathy.jpg";

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
            <img src='/profile.jpeg' alt="" className=" rounded-[10px] w-full" />
          </div>
          <div className=" flex">
            <div className=" flex justify-center text-start">
              <p>
                {" "}
                Front-end developer skilled in HTML, CSS, JavaScript, React, TypeScript, Next.js, and Remix. Adept at identifying opportunities to enhance UI/UX design and improve user experience. Strong collaborator with a focus on finding effective solutions and ensuring customer satisfaction in dynamic, team-oriented environments.
                <span onClick={handleRead}>
                  {" "}
                  {visible && (
                    <div className=" text-[#1E3A8A]">Read more...</div>
                  )}
                </span>
                {read && (
                  <span className="">
                    I build exceptional, user-friendly websites for various purposes, including e-commerce, educational institutions, churches, and non-governmental organizations (NGOs).
                     As a young, dynamic, and highly motivated developer, I am passionate about delivering excellence in a performance-driven environment. I thrive on new challenges and continuously seek improvement built on competence, innovation, and integrity. With the ability to work effectively both independently and collaboratively, I am dedicated to achieving organizational goals while contributing positively to society through creativity, commitment, and teamwork <br />
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

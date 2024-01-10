import React from "react";
import mathy from "../assets/about/mathy.jpg";

const About = () => {
  return (
    <>
      <div className=" flex justify-center items-center p-12" style={{fontFamily:"poppins"}}>
        <div className=" flex flex-col items-center justify-center gap-5 bg-[black] text-[white p-5">
          <div className=" text-white  hover:underline hover:bg-[blue] hover:p-2" >
            <p>
              Hey!{" "}
              <span className=" text-yellow-300">I'm Mathias,</span>{" "}
              Front-end developer in Lagos Nigeria.
            </p>
          </div>

          <div className=" flex">
            <div className=" flex justify-center text-start w-[40rem] leading-7 text-[white]">
              <p>
                {" "}
                Specialized in web development, user interface design, HTML, reactJS adept at identifying opportunities to enhance front-end-design, improve the user experience contributing to
                a highly collaborative work environment, finding solutions and
                determining customer satisfaction.
                with my  dynamic and highly motivated ability, I strive to live a
                professional life in a performance driven environment where I
                can face new challenges and exceed all expectations base on
                improvement built on competence without compromising integrity
                and with ability to work with little or no supervision to
                achieve organizational goals or objectives and hope to bring the
                drive, dedication and cooperation to make significant
                contribution to the society.{" "}
              </p>
            </div>
            <div className=" ">
              <img src={mathy} alt="" className=" rounded-full w-32" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

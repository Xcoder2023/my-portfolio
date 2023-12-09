import React from "react";
import mathy from "../assets/about/mathy.jpg";

const About = () => {
  return (
    <>
      <div className=" flex justify-center items-center p-12">
        <div className=" flex flex-col items-center justify-center gap-5 bg-[black] text-[white p-5">
          <div className=" text-white font-black hover:underline hover:bg-[blue] hover:p-2">
            <p>
              Hey!{" "}
              <span className=" text-yellow-300 font-black">
                I'm Mathias E,
              </span>{" "}
              a front-end developer in Lagos Nigeria.
            </p>
          </div>

          <div className=" flex">
            
            <div className=" flex justify-center text-start w-[40rem] font-sans leading-7 font-black text-[rgb(207,223,255)] abouttxt">
              <p>
                {" "}
                with one year experience working with javascript, react,
                html/css/tailwindcss to deliver exceptional customer experiences.
                Adept at contributing to a highly collaborative work
                environment, finding solutions and determing customer
                satisfaction. I builds exceptional user freindly website of
                different purpose ranging from E-commernce, School/Church, NGO{" "}
                <span className="">et al</span> websites I'm a young dynamic and
                highly motivated person, striving to live a professional life in
                a performance driven environment where I can face new challenges
                and exceed all expectations base on improvement built on
                competence without compromising integrity and with ability to
                work with little or no supervision to achieve organizational
                goals or objectives and hope to bring the drive, dedication and
                cooperation to make significant contribution to the society.{" "}
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

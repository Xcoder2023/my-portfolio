import React from "react";

const About = () => {
  return (
    <>
     <div className="hidden lg:block">
     <div
        
        className="flex items-center mx-auto w-[91%]"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <div className="flex items-start gap-8">
            <div  className="text-start w-[40rem] leading-7">
              <p>
                I specialize in web development, designing intuitive user
                interfaces, and building dynamic, responsive applications. My
                expertise lies in optimizing front-end designs, enhancing user
                experiences, and collaborating in team-driven environments to
                deliver exceptional results.
              </p>
              <p className="mt-4">
                I am dedicated to upholding competence and integrity, excelling
                both independently and within teams to achieve organizational
                objectives. Driven by a passion for continuous improvement, I
                strive to deliver impactful solutions that contribute to
                organizational success and positively impact society.
              </p>
            </div>
      
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default About;

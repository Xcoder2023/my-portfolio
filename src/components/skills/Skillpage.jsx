import React from "react";
import htmld from "../assets/skill logo/downloadhtml.png";
import csslogo from "../assets/skill logo/CSS3_logo.png";
import js from "../assets/skill logo/js.webp";
import reactlogo from "../assets/skill logo/React-icon.svg.png";
import tailwind from "../assets/skill logo/tailwindcss.jpg";

const Skillpage = () => {
  return (
    <>
        <div className=" flex flex-col p-12 gap-10 absolute w-[700px] top-[50px] bg-purple-600">
          <fieldset className=" border-4 pb-5 pt-5">
            <legend className=" flex text-center font-extrabold font-serif social"><span className="legend-txt">My Web Tools</span></legend>
            <div className=" grid grid-cols-3 gap-5 items-center ">

              <div className=" flex items-center justify-center">
                <img src={htmld} alt="" className=" logos w-40" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={tailwind} alt="" className=" logo rounded-2xl" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={csslogo} alt="" className=" logos w-28" />
              </div>
              <div className=" flex items-center justify-center object-contain">
                <img src={js} alt="" className=" logo w-40" />
              </div>

              <div className=" flex items-center justify-center">
                {" "}
                <img src={reactlogo} alt="" className=" logo w-[170px]" />
              </div>

            </div>
          </fieldset>
        </div>
    </>
  );
};

export default Skillpage;

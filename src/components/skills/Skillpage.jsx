import React from "react";
import htmld from "../assets/skill logo/downloadhtml.png";
import csslogo from "../assets/skill logo/CSS3_logo.png";
import js from "../assets/skill logo/js.webp";
import reactlogo from "../assets/skill logo/React-icon.svg.png";
import tailwind from "../assets/skill logo/tailwindcss.jpg";

const Skillpage = () => {
  return (
    <>
       <div className="hidden lg:block">
       <div className=" flex flex-col gap-10 w-[87%] mx-auto rounded-md my-10  ">
          <fieldset className="border border-[#1E3A8A] rounded-lg pb-5 pt-5">
            <legend className=" flex text-center font-extrabold font-serif social"><span className="legend-txt">My Web Tools</span></legend>
            <div className=" grid grid-cols-3 gap-5 items-center ">

              <div className=" flex flex-col items-center justify-center">
                <img src={htmld} alt="" className=" logos w-40" />
                <p>HTML</p>
              </div>

              <div className=" flex items-center justify-center">
                <img src={tailwind} alt="" className=" logo rounded-2xl" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={csslogo} alt="" className=" logos w-28" />
              </div>
              <div className=" flex flex-col items-center justify-center object-contain">
                <img src={js} alt="" className=" logo w-40" />
                <p>Javascript</p>
              </div>

              <div className=" flex flex-col items-center justify-center">
                {" "}
                <img src={reactlogo} alt="" className=" logo w-[170px]" />
                <p>ReactJs</p>
              </div>
<div>
  <img src="data:image/png;base64,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" alt="Nextjs-icon" />
</div>
            </div>
          </fieldset>
        </div>
       </div>
    </>
  );
};

export default Skillpage;

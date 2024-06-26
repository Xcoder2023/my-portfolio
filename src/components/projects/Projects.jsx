import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";
import { MdLink } from "react-icons/md";


const Projects = () => {
  return (
    <>
        <div className=" w-[700px] flex justify-center bg-[rgb(2,1,24)] p-3 gap-2 overflow-hidden" style={{fontFamily:'poppins'}}>
          <div className=" flex justify-center items-center  bg-[url('/src/components/assets/project/michHome.png')] bg-cover w-[50%] bg-no-repeat rounded-xl bg-center"></div>
          <div className=" flex flex-col w-[50%] justify-center items-center bg-[white] rounded-xl p-1">
            <p className=" text-[20px]"> Mich Homes</p>
            <p className=" text-[15.67px]">
              {" "}
              Mich Homes is a web site that lists different classic homes with a
              very astonishing houses, appartments and lodges that are available
              within Awka metropolies for rent.
            </p>
            <p className=" flex items-center gap-5">
                <a
                  href="https://mich-homes-apartment.vercel.app/"
                  target="blank"
                >
                  <MdLink />
                </a>
                ||
                <a
                  href="https://github.com/Xcoder2023/mich-homes-apartment"
                  target="blank"
                >
                  <PiGithubLogoLight />
                </a>
              </p>
          </div>
        </div>

        <div className=" w-[700px] flex justify-center bg-[rgb(2,1,24)] p-3 gap-2 overflow-hidden" style={{fontFamily:'poppins'}}>
          <div className=" flex flex-col w-[50%] justify-center items-center bg-[white] rounded-xl p-1">
            <p className=" text-[20px]"> Yeksgreen-Nig</p>
            <p className=" text-[11px]">
              {" "}
              Yerksgreen-Nig is a comprehensive culinary resource dedicated to teaching how to cook healthy Nigerian recipes. It offers a wide range of tutorials, from traditional meals to delightful desserts and refreshing drinks, all emphasizing nutritious and wholesome ingredients. Whether you're a beginner or an experienced cook, Yerksgreen-Nig provides step-by-step guidance to help you master the art of Nigerian cuisine while prioritizing your health.
            </p>
            <p className=" flex items-center gap-5">
                <a
                  href="https://github.com/Xcoder2023/Yeksgreen-Nigeria"
                  target="blank"
                >
                  <PiGithubLogoLight />
                </a>
                ||
                <a
                  href="https://yeksgreen.vercel.app/"
                  target="blank"
                >
                  <MdLink />
                </a>
              </p>
          </div>
          <div className=" flex justify-center items-center  bg-[url('/src/components/assets/project/yerksgreen2.png')] bg-cover w-[50%] bg-no-repeat rounded-xl bg-center"></div>
        </div>

        <div className=" w-[700px] flex justify-center bg-[rgb(2,1,24)] p-3 gap-2 overflow-hidden" style={{fontFamily:'poppins'}}>
          <div className=" flex justify-center items-center  bg-[url('/src/components/assets/project/images.jpeg')] bg-cover w-[50%] bg-no-repeat rounded-xl bg-center">
              <input type="text" placeholder="Choose a dog breed " readOnly className=" flex p- bg-transparent border-2 placeholder:text-white placeholder:text-center"/>
          </div>
          <div className=" flex flex-col w-[50%] justify-center items-center bg-[white] rounded-xl p-1">
            <p className=" text-[20px]">Infinite Dog App</p>
            <p className=" text-[15.67px]">
              {" "}
              Dog App displays all kinds of dog breed of varying species. It is
              a recommendable site for who is looking for any breed of dog and
              its sample. just hit the search bar with the dog breed name and
              see wonders.
            </p>
            <p className=" flex items-center gap-5">
                <a href="https://infinite-dog-app.vercel.app/" target="blank">
                  <MdLink />
                </a>
                ||
                <a
                  href="https://github.com/Xcoder2023/Infinite-dog-app"
                  target="blank"
                >
                  <PiGithubLogoLight />
                </a>
              </p>
          </div>
        </div>
    </>
  );
};

export default Projects;

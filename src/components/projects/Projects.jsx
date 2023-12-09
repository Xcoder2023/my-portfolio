import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";
import { MdLink } from "react-icons/md";

const Projects = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-2 p-5">
        <div className=" w-[700px] flex justify-center bg-[rgb(2,1,24)] p-3 gap-2">
          <div className=" flex justify-center items-center  bg-[url('/src/components/assets/project/michHome.png')] bg-cover w-[50%] bg-no-repeat rounded-xl bg-center"></div>
          <div className=" flex flex-col w-[50%] justify-center items-center bg-[white] rounded-xl p-3">
            <p className=" text-[20px]"> Mich Homes</p>
            <p className="">
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

        <div className=" w-[700px] flex justify-center bg-[rgb(2,1,24)] p-3 gap-2">
          <div className=" flex flex-col w-[50%] justify-center items-center bg-[white] rounded-xl p-3">
            <p className=" text-[20px]"> Mamaket</p>
            <p className="">
              {" "}
              Mamaket is a mini e-commernce web site that showcase African
              products in USA for sale. It is an online African marketplace for
              buying,selling and celebrating culture.
            </p>
            <p className=" flex items-center gap-5">
                <a
                  href="https://github.com/Xcoder2023/mamaket-landing-page"
                  target="blank"
                >
                  <PiGithubLogoLight />
                </a>
                ||
                <a
                  href="https://mamaket-landing-page.vercel.app/"
                  target="blank"
                >
                  <MdLink />
                </a>
              </p>
          </div>
          <div className=" flex justify-center items-center  bg-[url('/src/components/assets/project/mamaket.png')] bg-cover w-[50%] bg-no-repeat rounded-xl bg-center"></div>
        </div>

        <div className=" w-[700px] flex justify-center bg-[rgb(2,1,24)] p-3 gap-2">
          <div className=" flex justify-center items-center  bg-[url('/src/components/assets/project/images.jpeg')] bg-cover w-[50%] bg-no-repeat rounded-xl bg-center">
              <input type="text" placeholder="Dog Breed Name" readOnly className=" flex p- bg-transparent border-2 placeholder:text-green-500 placeholder:text-center"/>
          </div>
          <div className=" flex flex-col w-[50%] justify-center items-center bg-[white] rounded-xl p-3">
            <p className=" text-[20px]">Infinite Dog App</p>
            <p className="">
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
      </div>
    </>
  );
};

export default Projects;

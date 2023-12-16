import React from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { PiGithubLogoLight } from "react-icons/pi";
import { MdLink } from "react-icons/md";
import home from "../../assets/project/michHome.png";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div>
        <div className=" flex flex-col justify-center items-center gap-2 p-5 overflow-hidden" style={{fontFamily:'poppins'}}>
          <div
            data-aos="fade-down"
            className=" text-[20px]  overflow-hidden"
          >
            <p>Projects</p>
          </div>
          <div className=" w-[100%] flex flex-col justify-center bg-[rgb(2,1,24)] p-3 gap-2">
            <div
              data-aos="fade-right"
              className=" flex justify-center items-center"
            >
              {" "}
              <img src={home} alt="" className=" h-[50vh] rounded-xl" />
            </div>
            <div
              data-aos="fade-left"
              className=" flex flex-col h-[50%] justify-center items-center bg-[white] p-1 overflow-hidden"
            >
              <p> Mich Homes</p>
              <p className="">
                {" "}
                Mich Homes is a web site that lists different classic homes with
                a very astonishing houses, appartments and lodges that are
                available within Awka metropolies for rent.
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

          <div className=" w-[100%] flex flex-col justify-center bg-[rgb(2,1,24)] p-3 gap-2">
            <div
              data-aos="fade-up"
              className=" flex justify-center items-center  bg-[url('/src/components/assets/project/market23.jpg')] bg-cover h-[50vh] bg-no-repeat bg-center overflow-hidden"
            ></div>
            <div
              data-aos="fade-down"
              className=" flex flex-col h-[50%] justify-center items-center bg-[white] rounded-xl p-1 overflow-hidden"
            >
              <p> Mamaket</p>
              <p className="">
                {" "}
                Mamaket is a mini e-commernce web site that showcase African
                products in USA for sale. It is an online African marketplace
                for buying,selling and celebrating culture.
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
          </div>

          <div className=" w-[100%] flex flex-col justify-center bg-[rgb(2,1,24)] p-3 gap-2">
            <div
              data-aos="fade-left"
              className=" flex justify-center items-center  bg-[url('/src/components/assets/project/images.jpeg')] bg-cover h-[50vh] bg-no-repeat rounded-xl bg-center overflow-hidden"
            >
              <input
                type="text"
                placeholder="Choose a dog breed"
                readOnly
                className=" flex p- bg-transparent border-2 placeholder:text-white placeholder:text-center"
              />
            </div>
            <div
              data-aos="fade-right"
              className=" flex flex-col h-[50%] justify-center items-center bg-[white] rounded-xl p-1 overflow-hidden"
            >
              <p>Infinite Dog App</p>
              <p className="">
                {" "}
                Dog App displays all kinds of dog breed of varying species. It
                is a recommendable site for who is looking for any breed of dog
                and its sample. just hit the search bar with the dog breed name
                and see wonders.
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
      </div>
    </>
  );
};

export default Project;

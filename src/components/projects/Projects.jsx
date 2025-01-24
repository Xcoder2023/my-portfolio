import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";
import { MdLink } from "react-icons/md";

const Projects = () => {
  return (
    <>
      <div id="projects" className="my-20 hidden lg:block">
        <div className=" flex justify-center mb-10">
          <p className="legend-txt">Projects</p>
        </div>
        <section className="w-[87%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Mich Homes Card */}
          <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/michHome.png')]"></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-2xl font-semibold mb-3">Mich Homes</h3>
              <p className="text-sm text-center mb-4">
                Mich Homes is a website that lists different classic homes with
                astonishing houses, apartments, and lodges available for rent in
                Awka.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://mich-homes-apartment.vercel.app/"
                  target="_blank"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <a
                  href="https://github.com/Xcoder2023/mich-homes-apartment"
                  target="_blank"
                  className="text-xl hover:text-blue-400"
                >
                  <PiGithubLogoLight />
                </a>
              </div>
            </div>
          </div>

          {/* Yeksgreen-Nig Card */}
          <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/yerksgreen2.png')]"></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-2xl font-semibold mb-3">Yeksgreen-Nig</h3>
              <p className="text-sm text-center mb-4">
                Yerksgreen-Nig is a culinary resource dedicated to teaching
                healthy Nigerian recipes with tutorials for beginners and
                experienced cooks alike.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Xcoder2023/Yeksgreen-Nigeria"
                  target="_blank"
                  className="text-xl hover:text-blue-400"
                >
                  <PiGithubLogoLight />
                </a>
                <a
                  href="https://yeksgreen.vercel.app/"
                  target="_blank"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
              </div>
            </div>
          </div>

          {/* Infinite Dog App Card */}
          <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/images.jpeg')]"></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-2xl font-semibold mb-3">Infinite Dog App</h3>
              <p className="text-sm text-center mb-4">
                The Dog App displays a variety of dog breeds. Search for any
                breed and explore information about it.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://infinite-dog-app.vercel.app/"
                  target="_blank"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <a
                  href="https://github.com/Xcoder2023/Infinite-dog-app"
                  target="_blank"
                  className="text-xl hover:text-blue-400"
                >
                  <PiGithubLogoLight />
                </a>
              </div>
            </div>
          </div>

          {/* Slobaj Engineering Project Card */}
          <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/slobaj-image.png')]"></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-2xl font-semibold mb-3">
                Slobaj Engineering Website
              </h3>
              <p className="text-sm text-center mb-4">
                A responsive and user-friendly website showcasing the services
                and expertise of Slobaj Engineering and Construction (Nig) LTD.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://slobaj.com.ng/"
                  target="_blank"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <a
                  href="https://github.com/Xcoder2023/slobajLtd"
                  target="_blank"
                  className="text-xl hover:text-blue-400"
                >
                  <PiGithubLogoLight />
                </a>
              </div>
            </div>
          </div>

          {/* Slobaj Engineering Project Card */}
          <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/pairlance.png')]"></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-2xl font-semibold mb-3">Pairlance Website</h3>
              <p className="text-sm text-center mb-4">
                A responsive and user-friendly website matching candidate with
                job recruiter.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://pairlance-frontend.vercel.app/"
                  target="_blank"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <a
                  href="https://github.com/Xcoder2023/pairlance-frontend  "
                  target="_blank"
                  className="text-xl hover:text-blue-400"
                >
                  <PiGithubLogoLight />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;

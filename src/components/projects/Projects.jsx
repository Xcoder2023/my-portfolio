import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";
import { MdLink } from "react-icons/md";

const Projects = () => {
  return (
    <>
      <div className="my-20 block">
        <div className=" flex justify-center mb-10">
          <p className="legend-txt">Projects</p>
        </div>
        <section className="w-[87%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Mich Homes Card */}
          <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div
              data-aos="zoom-out"
              className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/michHome.png')]"
            ></div>
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
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <a
                  href="https://github.com/Xcoder2023/mich-homes-apartment"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <PiGithubLogoLight />
                </a>
                <a
                  href="https://yeksgreen.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
              </div>
            </div>
          </div>

          {/* Infinite Dog App Card */}
          <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div
              data-aos="zoom-out"
              className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/images.jpeg')]"
            ></div>
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
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <a
                  href="https://github.com/Xcoder2023/Infinite-dog-app"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  href="https://slobaj-ltd.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <a
                  href="https://github.com/Xcoder2023/slobajLtd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <PiGithubLogoLight />
                </a>
              </div>
            </div>
          </div>

          {/* Slobaj Engineering Project Card */}
          <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div
              data-aos="zoom-out"
              className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/pairlance.png')]"
            ></div>
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
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <a
                  href="https://github.com/Xcoder2023/pairlance-frontend  "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <PiGithubLogoLight />
                </a>
              </div>
            </div>
          </div>

          <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div
              data-aos="zoom-out"
              className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/delvefun.png')]"
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-2xl font-semibold mb-3">Delve Fun</h3>
              <p className="text-sm text-center mb-4">
                Delve Fun is an AI-powered language learning app that helps
                users improve their skills through interactive and engaging
                methods. I contributed to its development by implementing
                responsive designs, animations, and functional components to
                ensure a smooth and user-friendly experience.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://delve.fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <span className="text-sm italic">
                  (Code is private; I worked as a collaborator.)
                </span>
              </div>
            </div>
          </div>

          <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div
              data-aos="zoom-out"
              className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/serenehealth.png')]"
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-2xl font-semibold mb-3">
                Serene Scheal Initiative Website
              </h3>
              <p className="text-sm text-center mb-4">
                Built a responsive, accessible website showcasing the Serene
                Scheal Initiative’s programs and mission.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://sereneschealdev.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <a
                  href="https://github.com/Xcoder2023/web_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <PiGithubLogoLight />
                </a>
              </div>
            </div>
          </div>



           <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div
              data-aos="zoom-out"
              className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/mamaket.png')]"
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-2xl font-semibold mb-3">
               Mamaket African Marketplace
              </h3>
              <p className="text-sm text-center mb-4">
                Developed a responsive landing page for an African marketplace celebrating culture. Focused on clean design, intuitive navigation, and mobile-friendly performance to engage users and showcase products effectively.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://mamaket-landing-page.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <a
                  href="https://github.com/Xcoder2023/mamaket-landing-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <PiGithubLogoLight />
                </a>
              </div>
            </div>
          </div>



              <div className="relative bg-black rounded-xl overflow-hidden group h-auto w-full">
            <div
              data-aos="zoom-out"
              className="w-full h-[250px] bg-cover bg-center bg-[url('/src/components/assets/project/limtech.png')]"
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-2xl font-semibold mb-3">SimbiTech</h3>
              <p className="text-sm text-center mb-4">
              Developed a full, responsive website for SimbiTech, a platform empowering girls to learn, build, and lead in tech. Built with a focus on accessibility, seamless navigation, and mobile optimization to showcase programs, inspire engagement, and support user interaction across the site.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://simbitech-webapp.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-blue-400"
                >
                  <MdLink />
                </a>
                <span className="text-sm italic">
                  (Code is private; I worked as a collaborator.)
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;

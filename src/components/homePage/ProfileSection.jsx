import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import mathy from "../assets/about/mathy.jpg";
import CV from "../assets/documents/MATHIASEDE.pdf";
import Modal from "../contact/Modal";

const ProfileSection = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const handleClicked = () => {
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div
        className="w-full h-[100%] bg-no-repeat hidden lg:block"
        style={{ fontFamily: "poppins" }}
        
      >
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <div className="flex flex-col items-center mx-auto">
            <section className="w-[200px] flex justify-center">
              <div>
                <img
                  src={mathy}
                  alt="Mathias"
                  className="rounded-full w-32"
                  style={{ position: "relative", objectFit: "cover" }}
                />
              </div>
            </section>
            <div className="flex justify-center items-center text-[20px] w-[300px]">
              <TypeAnimation
                sequence={[
                  "Welcome To My Portfolio!",
                  1000,
                  "",
                  1000,
                  "XCODER2023...",
                ]}
                style={{ color: "#1E3A8A" }}
                repeat={Infinity}
                speed={20}
                wrapper="h1"
              />
            </div>
          </div>

          <div className="w-96 gap-5 flex flex-col pt-10">
            <p>
              Hello,{" "}
              <span className="text-[#1E3A8A] text-xl">I’m Mathias,</span> a
              passionate front-end developer dedicated to creating elegant user
              interfaces and seamless web experiences. I specialize in solving
              design challenges, crafting modern web applications, and
              delivering impactful interactions that enhance usability and
              functionality.
            </p>
            <button className="text-[#1E3A8A] underline hover:text-green-500 flex items-center">
              <a href={CV} target="_blank" download="mathias-cv.pdf">
                Download CV
              </a>
              <MdOutlineFileDownload />
            </button>

            <div
              className="btn flex justify-center bg-[#1E3A8A] w-[50%] rounded-[3px] text-blue-200"
              onClick={handleClicked}
            >
              <button className="p-2 flex justify-center items-center gap-2">
                Hire Me <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default ProfileSection;

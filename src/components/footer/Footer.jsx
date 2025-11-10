import React from "react";
import fb from "../assets/socialMedia/facebook.png";
import lin from "../assets/socialMedia/linkedin.png";
import twitter from "../assets/socialMedia/twitter.png";
// import youtube from "../assets/socialMedia/youtube.png";
import instagram from "../assets/socialMedia/instagram.png";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer
      className="bg-[#0D183A] text-white py-8 hidden lg:block"
      style={{ fontFamily: "lato" }}
    >
      <div className="container mx-auto lg:w-[90%] w-full flex flex-col-reverse md:flex-row justify-between lg:items-center px-4">
        <div className="flex flex-col lg:items-center md:items-start">
          <div className="mb-4 flex" style={{ fontFamily: "Georgia" }}>
            <h1 className="text-xl font-bold leading-[32.05px]">xcoder</h1>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/ede.mathias.5?mibextid=ZbWKwL" className="social">
              <img src={fb} alt="fb" width={24} height={24} />
            </a>
            <a
              href="https://www.instagram.com/edcodez?igsh=eW1ubDNjZjlodzFr"
              className="text-white social"
            >
              <img
                src={instagram}
                alt="instagram-icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://x.com/mathybaba?t=p5RpzJNltJ6vZ85V5P1zfw&s=09"
              className="text-white social"
            >
              <img src={twitter} alt="twiter icpn" width={24} height={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/edemathiasdev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-white"
            >
              <img src={lin} alt="linkedin-icon" width={24} height={24} className="social"/>
            </a>
                  <a
                    href="https://wa.me//09014043981"
                    // target="blank"
                  >
                    <ImWhatsapp  className="text-green-400 text-[25px] social" />
                  </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:mx-8">
          <h2 className="text-[18px] leading-[21.6px] font-semibold">
            Contact
          </h2>
          {/* <p className="text-[16px] leading-[19.2px] font-normal mt-2 text-[#FFFFFF]">
            xcoder2023@gmail.com
          </p> */}
          <a
  href="mailto:xcoder2023@gmail.com"
  className="text-[16px] leading-[19.2px] font-normal mt-2 text-[#FFFFFF] hover:underline"
>
  xcoder2023@gmail.com
</a>

        </div>

        <div className="mt-8 md:mt-0">
          <h2
            className="text-[24px] font-normal leading-[30.17px]"
            style={{ fontFamily: "Merriweather" }}
          >
            Quick Links
          </h2>
          <ul className="flex gap-3 list-disc list-inside cursor-pointer">
            <li onClick={() => handleScroll("about")}>About</li>
            <li onClick={() => handleScroll("skills")}>Skills</li>
            <li onClick={() => handleScroll("projects")}>Projects</li>
          </ul>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="border-t border-[#EEEFF2] mt-8 pt-4 w-[90%] mx-auto">
        <p className="text-center text-[12px] text-gray-400 leading-[14.4px] font-normal mt-1">
          © {new Date().getFullYear()} xcoder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

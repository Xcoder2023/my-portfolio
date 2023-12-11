import React from "react";
import fb from "../../assets/socialMedia/facebook.png";
import lin from "../../assets/socialMedia/linkedin.png";
import twitter from "../../assets/socialMedia/twitter.png";
import youtube from "../../assets/socialMedia/youtube.png";
import instagram from "../../assets/socialMedia/instagram.png";

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col items-center bg-[black] text-[white] p-3" style={{fontFamily:'poppins'}}>
        <div className=" flex flex-col  items-center gap-2">
          <div className=" flex justify-between gap-20 items-center">
            <div className=" flex justify-center font-serif">
              <p className=" text-[20px]">XCODER</p>
            </div>
              <ul className=" flex gap-3">
                <li className=" bg-[white] h-5">
                  <a
                    href="https://twitter.com/mathybaba?t=1tQggG_vbnxVp-koS1k4iA&s=09"
                    target="blank"
                  >
                    <img
                      src={twitter}
                      alt="twitter logo"
                      className=" w-5 social "
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={youtube}
                      alt="u-tube logo"
                      className=" w-5 social"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={lin}
                      alt="linkedin logo"
                      className=" w-5 social"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={instagram}
                      alt="instagram logo"
                      className=" w-5 social"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ede.mathias.5?mibextid=ZbWKwL"
                    target="blank"
                  >
                    <img src={fb} alt="facebook logo" className=" w-5 social" />
                  </a>
                </li>
              </ul>
          </div>
            <p className=" "> Tel:09014043981</p>
        </div>
        <hr className=" w-[100%]" />
        <div className=" flex gap-10 text-blue-500">
          <p>&copy;all right reserved</p>
          <p>courtesy:Me</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

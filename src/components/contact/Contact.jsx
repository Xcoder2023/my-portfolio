import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import fb from "../assets/socialMedia/facebook.png";
import lin from "../assets/socialMedia/linkedin.png";
import twitter from "../assets/socialMedia/twitter.png";
import youtube from "../assets/socialMedia/youtube.png";
import instagram from "../assets/socialMedia/instagram.png";
import { message } from "antd";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0axkyhk', 'template_mkmyajh', form.current, 'hDA_gOWpMLhI5u_RZ')
      .then((result) => {
          message.success("submitted successfully");
          form.current.reset();
      }, (error) => {
          message.error("Network error, try again");
      });
      
  };
  return (
    <>
      <div className=" flex flex-col justify-center items-center p-12 text-white  bg-[url('/src/components/assets/images.jpeg')] h-[100vh] bg-no-repeat bg-cover bg-center" style={{fontFamily:'poppins'}}>
        <div className=" flex justify-center font-black text-2xl tracking-widest">
          <p>Contact Me</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className=" flex flex-col p-12 gap-1">
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text" placeholder="First Name" name="firstName"
            className=" border-2 p-2 w-[300px] text-black capitalize"
            required
          />

          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text" placeholder="Last Name" name="lastName"
            className=" border-2 p-2 w-[300px] text-black capitalize"
            required
          />

          <label htmlFor="first-name">Email:</label>
          <input
            type="Email" placeholder="Email" name="email"
            className=" border-2 p-2 w-[300px] text-black"
            required
          />
          <label htmlFor="text">message</label>
       <div className=" flex flex-col gap-5">
          <textarea name="user_message" id="user_message" placeholder="message" required className=" flex p-3 text-black "></textarea>

            <button className=" p-2 bg-yellow-300 w-full ">
              submit
            </button>
       </div>
         
        </form>
        <div className="  ">
          <ul className=" flex gap-5">
            <li>
              <a href="https://twitter.com/mathybaba?t=1tQggG_vbnxVp-koS1k4iA&s=09" target="blank">
                <img src={twitter} alt="twitter logo" className=" w-20 social"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtube} alt="u-tube logo" className=" w-20 social"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={lin} alt="linkedin logo" className=" w-20 social"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="instagram logo" className=" w-20 social"/>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ede.mathias.5?mibextid=ZbWKwL" target="blank">
                <img src={fb} alt="facebook logo" className=" w-20 social" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;

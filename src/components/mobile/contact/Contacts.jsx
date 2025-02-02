import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "aos/dist/aos.css";
import AOS from "aos";
import { message } from "antd";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0axkyhk",
        "template_mkmyajh",
        form.current,
        "hDA_gOWpMLhI5u_RZ"
      )
      .then(
        (result) => {
          message.success("submitted successfully")
          form.current.reset();
        },
        (error) => {
          message.error("Network error, try again")
        }
      );
  };

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div className="w-[93%] mx-auto " style={{ fontFamily: "poppins" }}>
        <div className=" flex justify-center text-2xl text-[20px]">
          <p className="legend-txt">Contact Me</p>
        </div>
        <div
          data-aos="fade-down"
          className=" flex flex-col items-cente m-5 border-2 bg-[black] py-5 text-[white] rounded-xl"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col gap-5 p-5"
          >
           <div className=" flex flex-col gap-2">
           <label htmlFor="first-name" className=" text-[17px]">
              First Name:
            </label>
            <input
              type="firstName"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className=" border-2 p-2 w-[300px font-bold text-black capitalize"
              required
            />
           </div>

           <div className=" flex flex-col gap-2">
           <label htmlFor="last-name" className=" text-[17px]">
              Last Name:
            </label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className=" border-2 p-2 w-[300px font-bold text-black capitalize"
              required
            />
           </div>

           <div className=" flex flex-col gap-2">
           <label htmlFor="first-name" className=" text-[17px]">
              Email:
            </label>
            <input
              type="user_email"
              id="user_email"
              name="email"
              placeholder="Email"
              className=" border-2 p-2 w-[300px font-bold text-[black]"
              required
            />
           </div>

          <div className=" flex flex-col gap-2">
          <label htmlFor="text" className=" text-[17px]">
              message:
            </label>
            
              <textarea
                required
                name="user_message"
                id="user_message"
                placeholder="message"
                className=" flex p-3 border-2 w-[300px font-bold text-black"
              ></textarea>
           
          </div>
            {/* <div className=" flex py-5"> */}
              <button
                className=" p-2 bg-yellow-500  text-black"
                type="submit"
                value="Send"
              >
                submit
              </button>
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;

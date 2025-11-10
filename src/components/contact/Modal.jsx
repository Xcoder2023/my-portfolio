import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const Modal = ({ showModal, closeModal }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0axkyhk",
        "template_mkmyajh",
        form.current,
        "hDA_gOWpMLhI5u_RZ"
      )
      .then(
        (result) => {
          message.success("Submitted successfully");
          form.current.reset();
          setLoading(false);
          closeModal(); 
        },
        (error) => {
          message.error("Network error, try again");
          setLoading(false);
        }
      );
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex justify-end items-center bg-gray-500 bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 w-1/3 max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-5 borde border-[#1d3344 bg-white p-5 rounded-[3px]"
              style={{ fontFamily: "Poppins" }}
            >
              <div className="flex justify-center font-black text-xl tracking-widest text-[#1d3344]">
                <p className="legend-txt">Contact Me</p>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="first-name">First Name:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  className="border border-[#1d3344] p-2 w-full text-black capitalize outline-none rounded-[3px] h-[54px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="last-name">Last Name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  className="border border-[#1d3344] p-2 w-full text-black capitalize outline-none rounded-[3px] h-[54px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="border border-[#1d3344] p-2 w-full h-[54px] text-black outline-none rounded-[3px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-5 border border-[#1d3344]">
                <textarea
                  name="user_message"
                  id="user_message"
                  placeholder="Enter your message..."
                  required
                  className="flex p-3 text-black outline-none h-[200px] rounded-[3px]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="p-2 bg-[#1E3A8A] w-full h-[54px] text-white mt-5 rounded-[3px]"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiLoader } from "react-icons/fi";


const Join = () => {
  const [loading, setLoading] =  useState(false)
  const formRef = useRef<HTMLFormElement | null>(null); // useRef called only once

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      setLoading(true)
      emailjs.sendForm("service_yanj0pg", "template_tazsx7w", formRef.current, "qjTRi2u1mR7GmP8vP" )
        .then(
          () => {
            console.log("SUCCESS!");
            setLoading(false)
          },
          (error: { text: string }) => {
            console.log("FAILED...", error.text);
            setLoading(false)
          }
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-[10rem] px-[2rem]">
      <div className="text-white text-center md:text-start relative text-[3rem] font-bold">
        <hr className="absolute w-[10.5rem] border-2 border-orange-500 rounded mt-[-10px]" />
        <div>
          <span className="strokeText">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="strokeText"> WITH US</span>
        </div>
      </div>

      <div className="bg-white relative">
        <form
          ref={formRef}
          className="flex md:gap-[3rem] bg-gray-400 p-[1rem] gap-1 md:px-8 rounded"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
            className="bg-transparent border-none outline-none text-gray-200 placeholder:text-gray-200 "
          />
          <button className="btn bg-orange-400 text-white  whitespace-nowrap">
            {loading ? <FiLoader className="animate-spin w-[3rem] " /> : "Join now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;

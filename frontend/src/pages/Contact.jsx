import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
import FeedBack from "../components/FeedBack";

const Contact = () => {
  return (
    <div className="mt-20 h-full ">
      <div className="max-w-[80rem] mx-auto px-6">
        <div className="w-full md:py-10 py-5  flex flex-col justify-center items-center">
          <h1 className="flex items-center gap-2 text-3xl md:text-5xl font-bold justify-center text-textColor">
            Contact Us <FaArrowRight className="text-accent text-xl md:text-3xl font-bold" />
          </h1>
          <p className="text-accent text-lg py-2 md:py-6">
            Do you have any problems, questions or ideas, Feel free to send us a message
          </p>
        </div>

        <form className="w-full max-w-3xl mx-auto flex flex-col gap-6 my-20">
          <div className="flex flex-col gap-2 relative text-text-color">
            <input
              required=""
              type="text"
              name="text"
              placeholder="Enter name..."
              className=" w-full h-[45px] outline-none py-0 px-7 rounded-lg text-textColor text-md bg-transparent shadow-shadow1 focus:border-2 focus:border-transparent focus:text-background focus:shadow-shadow2 focus:bg-secondary"
            />
          </div>
          <div className="flex flex-col gap-2 relative text-text-color">
            <input
              required=""
              type="text"
              name="text"
              placeholder="Enter email..."
              className=" w-full h-[45px] outline-none py-0 px-7 rounded-lg text-textColor text-md bg-transparent shadow-shadow1 focus:border-2 focus:border-transparent focus:text-background focus:shadow-shadow2 focus:bg-secondary"
            />
          </div>
          <div className="flex flex-col gap-2 relative text-text-color">
            <textarea
              required=""
              type="text"
              name="text"
              placeholder="Enter Message..."
              className=" w-full outline-none py-7 px-7 rounded-lg text-textColor text-md bg-transparent shadow-shadow1 focus:border-2 focus:border-transparent focus:text-background focus:shadow-shadow2 focus:bg-secondary"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </form>
      </div>
      <FeedBack />
      <Footer />
    </div>
  );
};

export default Contact;

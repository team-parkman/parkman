import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center h-[100vh]">
      <div className="relative">
        <h1 className="text-accent text-[6rem] lg:text-[12rem] font-extralight tracking-widest">OOPS!</h1>
        <div className="bg-secondary absolute  transform translate-x-[-50%] translate-y-[-10%] -bottom-[90px] left-1/2 w-[80%] rounded-xl">
          <p className="text-center md:text-xl py-4">404 - THE PAGE CAN'T BE FOUND</p>
          <div className="flex justify-center items-center pb-4">
            <Link to="/" className="bg-background text-textColor py-3 px-7 rounded-lg">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

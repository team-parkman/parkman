import React from "react";
import { FaArrowRight, FaEnvelope, FaGoogle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-20 2xl:h-[100vh]">

    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full md:py-10 py-5 flex-col flex justify-center items-center">
        <h1 className="flex items-center gap-2 text-3xl md:text-5xl font-bold justify-center text-textColor">
          Welcome Back!! <FaArrowRight className="text-accent text-xl md:text-3xl font-bold" />
        </h1>
        <p className="text-accent text-lg py-2 md:pt-6">Fill in the correct details to continue</p>
      </div>

      

        <form className="flex w-full justify-center flex-col gap-6 pb-10">
          
          <div className="flex leading-[30px] items-center relative w-full md:w-[500px] mx-auto">
            <FaEnvelope className="absolute left-[1rem] w-[1rem] h-[1rem] text-3xl text-background" />
            <input
              className="w-full h-[50px] py-0 px-[3rem] border-2 border-transparent rounded-lg outline-none bg-secondary text-background duration-200 placeholder:text-gray-500 focus:outline-none focus:border-accent focus:shadow-shadow1 focus:bg-secondary hover:outline-none hover:border-accent hover:shadow-shadow1 hover:bg-secondary "
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex leading-[30px] items-center relative w-full md:w-[500px] mx-auto">
            <FaLock className="absolute left-[1rem] w-[1rem] h-[1rem] text-3xl text-background" />
            <input
              className="w-full h-[50px] py-0 px-[3rem] border-2 border-transparent rounded-lg outline-none bg-secondary text-background duration-200 placeholder:text-gray-500 focus:outline-none focus:border-accent focus:shadow-shadow1 focus:bg-secondary hover:outline-none hover:border-accent hover:shadow-shadow1 hover:bg-secondary "
              type="password"
              placeholder="Password"
            />
          </div>
          
          <div className=" relative w-full md:w-[500px] mx-auto">
            <button type="submit" className="bg-accent py-4 w-full rounded-lg text-lg font-semibold">
              Login
            </button>
            <p className="text-center text-textColor py-6 text-lg font-semibold">Or</p>
            <button
              type="button"
              className="bg-secondary py-4 w-full rounded-lg text-lg font-semibold flex justify-center items-center gap-4"
            >
              <FaGoogle className="text-pink-600 text-3xl" /> Google Account
            </button>

            <div className="flex justify-center gap-3 mt-4 mb-6">
              <div className="w-full">
              <p className=" text-textColor">Don't have an account?</p>
                <Link to="/login" className="text-accent underline py-2 w-full rounded-lg text-lg font-semibold">
                  Register
                </Link>
              </div>
              <div className="w-full font-semibold flex justify-end text-accent">
              <Link to="/forgot-password">Forgot Password?</Link>

              </div>
            </div>
          </div>
        </form>
      
    </div>
  </div>
  )
};

export default Login;

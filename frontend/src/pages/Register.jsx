import React, { useState } from "react";
import { FaArrowRight, FaEnvelope, FaGoogle, FaHome, FaLock, FaMapMarker, FaMobile, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [isChecked, setIsChecked] = useState("personal");

  const handleChange = (e) => {
    let active = e.target.value;
    setIsChecked(active);
  };

  return (
    <div className="mt-20 2xl:h-[100vh]">

      <div className="max-w-5xl mx-auto px-6">
        <div className="w-full md:py-10 py-5 flex-col flex justify-center items-center">
          <h1 className="flex items-center gap-2 text-3xl md:text-5xl font-bold justify-center text-textColor">
            Register <FaArrowRight className="text-accent text-xl md:text-3xl font-bold" />
          </h1>
          <p className="text-accent text-lg py-2 md:pt-6">Follow the simple steps to join our community</p>
        </div>

        <div className="w-full md:w-[500px] mb-6 mx-auto flex justify-between">
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="value-1"
              onChange={handleChange}
              checked={isChecked === "personal"}
              name="value-radio"
              value="personal"
              className="appearance-none w-[2em] h-[2em] bg-background rounded-full duration-200 ease-in-out hover:scale-150 cursor-pointer checked:bg-accent "
            />

            <div className="relative top-[0.01em] -left-[1.1em] w-[0.6em] h-[0.6em] bg-accent scale-0 rounded-lg duration-200 ease-in-out"></div>
            <p className="text-textColor font-semibold text-xl">Personal</p>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="value-1"
              onChange={handleChange}
              name="value-radio"
              value="company"
              className="appearance-none w-[2em] h-[2em] bg-background rounded-full duration-200 ease-in-out hover:scale-150 cursor-pointer checked:bg-accent"
            />

            <div className="relative top-[0.01em] -left-[1.1em] w-[0.6em] h-[0.6em] bg-accent scale-0 rounded-lg duration-200 ease-in-out"></div>
            <p className="text-textColor font-semibold text-xl">Business</p>
          </div>
        </div>

        {isChecked === "personal" ? (
          <form className="flex w-full justify-center flex-col gap-6 pb-10">
            <div className="flex leading-[30px] items-center relative w-full md:w-[500px] mx-auto">
              <FaUser className="absolute left-[1rem] w-[1rem] h-[1rem] text-3xl text-background" />
              <input
                className="w-full h-[50px] py-0 px-[3rem] border-2 border-transparent rounded-lg outline-none bg-secondary text-background duration-200 placeholder:text-gray-500 focus:outline-none focus:border-accent focus:shadow-shadow1 focus:bg-secondary hover:outline-none hover:border-accent hover:shadow-shadow1 hover:bg-secondary "
                type="text"
                placeholder="Username"
              />
            </div>
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
            <div className="flex leading-[30px] items-center relative w-full md:w-[500px] mx-auto">
              <FaLock className="absolute left-[1rem] w-[1rem] h-[1rem] text-3xl text-background" />
              <input
                className="w-full h-[50px] py-0 px-[3rem] border-2 border-transparent rounded-lg outline-none bg-secondary text-background duration-200 placeholder:text-gray-500 focus:outline-none focus:border-accent focus:shadow-shadow1 focus:bg-secondary hover:outline-none hover:border-accent hover:shadow-shadow1 hover:bg-secondary "
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className=" relative w-full md:w-[500px] mx-auto">
              <button type="submit" className="bg-accent py-4 w-full rounded-lg text-lg font-semibold">
                Create Account
              </button>
              <p className="text-center text-textColor py-6 text-lg font-semibold">Or</p>
              <button
                type="button"
                className="bg-secondary py-4 w-full rounded-lg text-lg font-semibold flex justify-center items-center gap-4"
              >
                <FaGoogle className="text-pink-600 text-3xl" /> Google Account
              </button>

              <div className="flex justify-center gap-3 items-center mt-4 mb-6">
                <p className=" text-textColor">Already had an account?</p>
                <div className="  flex justify-center items-center text-center">
                  <Link to="/login" className="text-accent underline py-2 w-full rounded-lg text-lg font-semibold">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <form className="flex w-full justify-center flex-col gap-6 pb-10">
            <div className="flex leading-[30px] items-center relative w-full md:w-[500px] mx-auto">
              <FaUser className="absolute left-[1rem] w-[1rem] h-[1rem] text-3xl text-background" />
              <input
                className="w-full h-[50px] py-0 px-[3rem] border-2 border-transparent rounded-lg outline-none bg-secondary text-background duration-200 placeholder:text-gray-500 focus:outline-none focus:border-accent focus:shadow-shadow1 focus:bg-secondary hover:outline-none hover:border-accent hover:shadow-shadow1 hover:bg-secondary "
                type="text"
                placeholder="Business Name"
              />
            </div>
            <div className="flex leading-[30px] items-center relative w-full md:w-[500px] mx-auto">
              <FaEnvelope className="absolute left-[1rem] w-[1rem] h-[1rem] text-3xl text-background" />
              <input
                className="w-full h-[50px] py-0 px-[3rem] border-2 border-transparent rounded-lg outline-none bg-secondary text-background duration-200 placeholder:text-gray-500 focus:outline-none focus:border-accent focus:shadow-shadow1 focus:bg-secondary hover:outline-none hover:border-accent hover:shadow-shadow1 hover:bg-secondary "
                type="email"
                placeholder="Business Email"
              />
            </div>

            <div className="flex leading-[30px] items-center relative w-full md:w-[500px] mx-auto">
              <FaHome className="absolute left-[1rem] w-[1rem] h-[1rem] text-3xl text-background" />
              <select
                className="w-full h-[50px] py-0 px-[3rem] border-2 border-transparent rounded-lg outline-none bg-secondary text-background duration-200 placeholder:text-gray-500 focus:outline-none focus:border-accent focus:shadow-shadow1 focus:bg-secondary hover:outline-none hover:border-accent hover:shadow-shadow1 hover:bg-secondary "
                type="email"
                placeholder="Business Address"
              >
                <optgroup label="Business Type">
                  <option value="car_park">Car Park</option>
                  <option value="car_wash">Car Wash</option>
                </optgroup>
                {/* <option value="">Company Type</option> */}
              </select>
            </div>
            <div className="flex leading-[30px] items-center relative w-full md:w-[500px] mx-auto">
              <FaMapMarker className="absolute left-[1rem] w-[1rem] h-[1rem] text-3xl text-background" />
              <input
                className="w-full h-[50px] py-0 px-[3rem] border-2 border-transparent rounded-lg outline-none bg-secondary text-background duration-200 placeholder:text-gray-500 focus:outline-none focus:border-accent focus:shadow-shadow1 focus:bg-secondary hover:outline-none hover:border-accent hover:shadow-shadow1 hover:bg-secondary "
                type="email"
                placeholder="Business Address"
              />
            </div>
            <div className="flex leading-[30px] items-center relative w-full md:w-[500px] mx-auto">
              <FaMobile className="absolute left-[1rem] w-[1rem] h-[1rem] text-3xl text-background" />
              <input
                className="w-full h-[50px] py-0 px-[3rem] border-2 border-transparent rounded-lg outline-none bg-secondary text-background duration-200 placeholder:text-gray-500 focus:outline-none focus:border-accent focus:shadow-shadow1 focus:bg-secondary hover:outline-none hover:border-accent hover:shadow-shadow1 hover:bg-secondary "
                type="number"
                placeholder="Business Phone Number"
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
            <div className="flex leading-[30px] items-center relative w-full md:w-[500px] mx-auto">
              <FaLock className="absolute left-[1rem] w-[1rem] h-[1rem] text-3xl text-background" />
              <input
                className="w-full h-[50px] py-0 px-[3rem] border-2 border-transparent rounded-lg outline-none bg-secondary text-background duration-200 placeholder:text-gray-500 focus:outline-none focus:border-accent focus:shadow-shadow1 focus:bg-secondary hover:outline-none hover:border-accent hover:shadow-shadow1 hover:bg-secondary "
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className=" relative w-full md:w-[500px] mx-auto">
              <button type="submit" className="bg-accent py-4 w-full rounded-lg text-lg font-semibold">
                Create Account
              </button>
              {/* <p className="text-center text-textColor py-6 text-lg font-semibold">Or</p>
            <button
              type="button"
              className="bg-secondary py-4 w-full rounded-lg text-lg font-semibold flex justify-center items-center gap-4"
            >
              <FaGoogle className="text-pink-600 text-3xl" /> Google Account
            </button> */}

              <div className="flex justify-center gap-3 items-center mt-4 mb-6">
                <p className=" text-textColor">Already had an account?</p>
                <div className="  flex justify-center items-center text-center">
                  <Link to="/login" className="text-accent underline py-2 w-full rounded-lg text-lg font-semibold">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;

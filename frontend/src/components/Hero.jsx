import { Link } from "react-router-dom";
import { phoneMokup } from "../assets";
import { FaLock, FaSuperpowers, FaUserCircle } from "react-icons/fa";

function Hero() {
  return (
    <section className=" relative 2xl:py-20">
      <div className="flex md:justify-center md:items-center pt-20 md:pt-10 ">
        <div className="grid gap-8 max-w-screen-xl px-4 py-8 2xl:py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-textColor overflow-hidden">
              Welcome to <span className="text-accent">SafeBay</span> Car Services
            </h1>
            <p className="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Join us in preserving your vehicle's safety and shine – because every journey deserves a SafeBay touch.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary bg-accent rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-textColor border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              How it works?
            </Link>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={phoneMokup} alt="mockup" />
          </div>
        </div>
      </div>

      <div className="bg-secondary w-full px-4  py-6 hidden lg:block">
        <div className="max-w-7xl mx-auto md:flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex items-center gap-4 max-w-[400px]">
            <span
              className="bg-accent rounded-full flex justify-center itemc
                 md:w-50 w-30 md:h-50 h-30 p-4"
            >
              <FaLock className="text-3xl text" />
            </span>
            <div className="w-full">
              <h4 className="font-bold">Secure Car Parking</h4>
              <p>Leave your worries behind as you entrust your vehicle to SafeBay's secure car park facilities.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 max-w-[400px]">
            <span
              className="bg-accent rounded-full flex justify-center itemc
                 md:w-50 w-30 md:h-50 h-30 p-4"
            >
              <FaUserCircle className="text-3xl text" />
            </span>
            <div className="w-full">
              <h4 className="font-bold">Convenience at Your Fingertips</h4>
              <p>
                At SafeBay, we prioritize your convenience. We understand that your time is precious, and we aim to make
                your experience seamless and efficient.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 max-w-[400px]">
            <span
              className="bg-accent rounded-full flex justify-center itemc
                 md:w-50 w-30 md:h-50 h-30 p-4"
            >
              <FaSuperpowers className="text-3xl text" />
            </span>
            <div className="w-full">
              <h4 className="font-bold">Professional Car Wash</h4>
              <p>Treat your car to a spa day with our professional car wash services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

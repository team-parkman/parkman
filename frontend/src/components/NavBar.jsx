import { useState } from "react";
import Button from "./elements/Button";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaCar, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#010014] fixed top-0 w-full z-50 ">
      <div className=" flex justify-between items-center px-4 max-w-7xl mx-auto">
        <div className="font-bold text-2xl flex gap-2 items-center py-2 md-py-0">
          <FaCar className="text-5xl text-accent"/>
          <span className=" text-[#ffffff] text-sm md:text-2xl">SafeBay</span>
        </div>
        
        <div>
          <div className="hidden text-textColor lg:flex justify-center items-center gap-4 text-[14px] pl-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " bg-accent text-primary grid place-content-center skew-x-12  duration-150 h-[70px] px-6"
                  : "px-6 hover:text-accent"
              }
            >
              <span className="-skew-x-12 ">Home</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-accent text-primary bg-accent grid place-content-center skew-x-12  duration-150 h-[70px] px-6"
                  : "px-6 hover:text-accent"
              }
            >
              <span className="-skew-x-12 ">About</span>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-accent text-primary bg-accent grid place-content-center skew-x-12  duration-150 h-[70px] px-6"
                  : "px-6 hover:text-accent"
              }
            >
              <span className="-skew-x-12 ">Services</span>
            </NavLink>
           
            <NavLink
              to="/find-lot"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-accent text-primary bg-accent grid place-content-center skew-x-12  duration-150 h-[70px] px-6"
                  : "px-6 hover:text-accent"
              }
            >
              <span className="-skew-x-12 ">Find Lot</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-accent text-primary bg-accent grid place-content-center skew-x-12  duration-150 h-[70px] px-6"
                  : "px-6 hover:text-accent"
              }
            >
              <span className="-skew-x-12 ">Contact</span>
            </NavLink>

            <Link
              to="/register"
              className="inline-flex lg:ml-20 items-center justify-center px-4 py-2 mr-3 text-base font-medium text-center text-primary bg-accent rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
          </div>



          {/* mobile */}
          <MdMenu className="text-3xl text-textColor lg:hidden" onClick={handleMenu} />

          <div
            className={
              isOpen
                ? "bg-background h-[100%] w-[90%] z-50 pt-[6rem] fixed top-0 right-0 bottom-0 text-textColor flex flex-col lg:hidden items-left gap-8 text-[16px]"
                : "hidden"
            }
          >
            <FaTimes className="text-3xl absolute top-[20px] left-[20px]" onClick={handleMenu} />
            <NavLink
              to="/"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive ? "hover:bg-primary bg-accent text-primary grid  duration-150 py-4 w-full px-6" : "px-6"
              }
            >
              <span className="">Home</span>
            </NavLink>

            <NavLink
              to="/about"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive ? "hover:bg-primary bg-accent text-primary grid  duration-150 py-4 w-full px-6" : "px-6"
              }
            >
              <span className=" ">About</span>
            </NavLink>
            <NavLink
              to="/services"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive ? "hover:bg-primary bg-accent text-primary grid  duration-150 py-4 w-full px-6" : "px-6"
              }
            >
              <span className=" ">Services</span>
            </NavLink>

            <NavLink
              to="/find-lot"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive ? "hover:bg-primary bg-accent text-primary grid  duration-150 py-4 w-full px-6" : "px-6"
              }
            >
              <span className=" ">Find Lot</span>
            </NavLink>

            <NavLink
              to="/contact"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive ? "hover:bg-primary bg-accent text-primary grid  duration-150 py-4 w-full px-6" : "px-6"
              }
            >
              <span className=" ">Contact</span>
            </NavLink>

            {/* <div className="absolute bottom-10 flex justify-center items-center flex-col gap-6">
              <p className="text-primary text-xs">
                Email Address:{" "}
                <span className="text-background">buildream@info.com</span>{" "}
              </p>
              <span className="flex gap-4 ">
                <FaFacebook />
                <FaInstagram />
                <span className="text-sm">Admin?</span>
              </span>
            </div> */}

            <Link
              to="/register"
              className="inline-flex items-center justify-center mx-6 w-40 px-5 py-3 mr-3 text-base font-medium text-center text-primary bg-accent rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default NavBar;

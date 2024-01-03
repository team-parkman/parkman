import { FaArrowRight } from "react-icons/fa";
import { BgB } from "../assets";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-bgA  h-[750px] md:h-auto  w-full bg-no-repeat bg-cover bg-center text-textColor mt-20  px-6 md:py-20 py-10 ">
      <div className="md:flex justify-between gap-4 md:gap-10 max-w-7xl mx-auto ">

        <div className="w-full  flex flex-col items-center md:items-start mt-10">
            <h1 className="flex items-center  gap-2 text-4xl md:text-7xl font-bold justify-center">
            About Us <FaArrowRight className="text-accent text-3xl font-bold" />
            </h1>
            <p className="text-textColor mt-6 text-lg  py-2 md:py-6">
            SafeBay was born out of a simple idea: to provide people with a better way to find parking and car wash
            services. We understood the frustrations of endlessly searching for a parking spot and the desire for a clean
            and sparkling car. That's when we decided to create a platform that would revolutionize the way you experience
            these everyday tasks.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary bg-textColor rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Read More
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

        <div className="w-full lg:w-[800px] h-full my-4 ">
            {/* <div className="w-full bg-accent absolute -z-[1px] rounded-md h-[250px]"/> */}
            <img src={BgB} alt="workers image" className="w-full h-full object-cover rounded-lg " />
        </div>

      </div>
    </div>
  );
}

export default About;

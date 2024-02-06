import React from "react";
import { FaArrowRight, FaGlobe, FaHandshake, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { carLot, carWash } from "../assets";
import Footer from "../components/Footer";
import FeedBack from "../components/FeedBack";

const Services = () => {
  return (
    <div className="mt-20 h-full ">
      <div className="max-w-[80rem] mx-auto px-6">
        <div className="w-full md:py-10 py-5  flex flex-col justify-center items-center">
          <h1 className="flex items-center gap-2 text-3xl md:text-5xl font-bold justify-center text-textColor">
            Our Services <FaArrowRight className="text-accent text-xl md:text-3xl font-bold" />
          </h1>
          {/* <p className="text-accent text-lg py-2 ">What we do.</p> */}
        </div>

        <div>
          <div className="md:flex justify-between gap-4 md:gap-10 mt-12">
            <div className="w-full">
              <h2 className="text-accent text-3xl">Secure Parking Facilities</h2>
              <p className="text-textColor text-lg  pt-2 pb-6">
                Locate parking lots in your vicinity quickly and easily. Filter results based on distance, price, and
                other preferences.
                <br /> <br />
                Never waste time circling the block again! SafeBay enables you to locate the nearest parking lots with
                just a few clicks. Our user-friendly interface lets you filter results based on preferences such as
                covered parking, security features, and pricing. Say goodbye to parking stress and hello to convenience.
              </p>
              <Link
                to="/find-lot"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary bg-textColor rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
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
            <div className="w-full mt-8 lg:w-[800px] h-full ">
              {/* <div className="w-full bg-accent absolute -z-[1px] rounded-md h-[250px]"/> */}
              <img src={carLot} alt="workers image" className="w-full h-full object-cover rounded-lg " />
            </div>
          </div>

          <div className="md:flex flex-row-reverse justify-between gap-4 md:gap-10 mt-20">
            <div className="w-full">
              <h2 className="text-accent text-3xl">The Car wash system</h2>
              <p className="text-textColor text-lg  pt-2 pb-6">
                Find the closest car wash facilities to keep your vehicle looking its best. Sort options by user ratings
                and reviews to make an informed choice.
                <br /> <br />
                Discover nearby car wash services to keep your vehicle looking its best. Filter options based on
                services offered, pricing, and customer reviews. SafeBay makes it simple to schedule a wash that fits
                into your busy routine. Treat your car to the care it deserves.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary bg-textColor rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
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
            <div className="w-full mt-8 lg:w-[800px] h-full ">
              {/* <div className="w-full bg-accent absolute -z-[1px] rounded-md h-[250px]"/> */}
              <img src={carWash} alt="workers image" className="w-full h-full object-cover rounded-lg " />
            </div>
          </div>
        </div>

        <div className="text-textColor mb-20">
          <div className="w-full  flex flex-col items-center md:items-start mt-20 ">
            <h1 className="flex items-center gap-2 text-2xl lg:text-4xl font-bold justify-center text-center md:text-left">
              Good News For Lot Owners and Car Wash Operators
            </h1>
          </div>

          <div className="mt-20 flex flex-col justify-center items-start gap-10 md:gap-6 md:flex-row">
            <div className="text-center w-full flex flex-col justify-center items-center">
              <div className="bg-secondary w-[70px] h-[70px] rounded-NewRadius flex justify-center items-center">
                <FaGlobe className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold pt-3">Boost Your Business Visibility:</h3>
              <p className="pt-2 text-md ">
                Join SafeBay to increase your company's exposure and connect with car owners actively seeking parking
                and car wash services. Registering your lot or car wash is quick and easy, putting your business on the
                map for potential customers.
              </p>
            </div>

            <div className="text-center w-full flex flex-col justify-center items-center">
              <div className="bg-secondary w-[70px] h-[70px] rounded-NewRadius flex justify-center items-center">
                <FaTachometerAlt className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold pt-3">Flexible Management Tools:</h3>
              <p className="pt-2 text-md ">
                Take control of your listings with our user-friendly dashboard. Update availability, adjust pricing, and
                showcase special promotions effortlessly. SafeBay empowers you to manage your business efficiently.
              </p>
            </div>

            <div className="text-center w-full flex flex-col justify-center items-center">
              <div className="bg-secondary w-[70px] h-[70px] rounded-NewRadius flex justify-center items-center">
                <FaHandshake className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold pt-3">Build Trust with Reviews:</h3>
              <p className="pt-2 text-md ">
                Earn the trust of potential customers by showcasing positive reviews. Happy car owners can leave
                feedback, helping you establish a solid reputation within the SafeBay community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FeedBack />
      <Footer />
    </div>
  );
};

export default Services;

import { FaArrowRight } from "react-icons/fa";

function MissionAndVision() {
  return (
    <div className="max-w-7xl mx-auto md:flex my-20 py-4 px-4">
      <div className="bg-secondary py-4 px-6 rounded-lg hover:scale-105 duration-150 ease-in-out">
        <h3 className="text-xl font-semibold pb-2 flex gap-2 items-center">Our Mission <FaArrowRight className="text-accent text-xl font-bold" /></h3>

        <p className="text-lg">
          At Safebay, we are driven by a singular mission: to simplify the way you find parking and car wash services
          while making a positive impact on your life, your vehicle, and the environment. We understand the everyday
          challenges of parking your vehicle and keeping it clean. Our mission is to provide a user-friendly platform
          that simplifies these tasks, saving you time and reducing the stress associated with urban travel. We want to
          make your journeys more enjoyable, your errands less stressful, and your vehicles spotless.
        </p>
      </div>
      <div className="bg-accent py-4 px-6 rounded-lg hover:scale-105 duration-150 ease-in-out">
        <h3 className="text-xl font-semibold pb-2 flex gap-2 items-center ">Our Vision <FaArrowRight className="text-secondary text-xl font-bold" /></h3>

        <p className="text-lg">
          At Safebay, we are driven by a singular mission: to simplify the way you find parking and car wash services
          while making a positive impact on your life, your vehicle, and the environment. We understand the everyday
          challenges of parking your vehicle and keeping it clean. Our mission is to provide a user-friendly platform
          that simplifies these tasks, saving you time and reducing the stress associated with urban travel. We want to
          make your journeys more enjoyable, your errands less stressful, and your vehicles spotless.
        </p>
      </div>
    </div>
  );
}

export default MissionAndVision;

import { FaArrowRight, FaFacebook, FaInstagram } from "react-icons/fa";
import FeedBack from "../components/FeedBack";
import Footer from "../components/Footer";
import { BgB, Noble } from "../assets";

function About() {
  return (
    <div className="mt-20 h-full ">
      <div className="max-w-[80rem] mx-auto px-6">
        <div className="w-full md:py-10 py-5  flex justify-center items-center">
          <h1 className="flex items-center gap-2 text-3xl md:text-5xl font-bold justify-center text-textColor">
            About Us <FaArrowRight className="text-accent text-xl md:text-3xl font-bold" />
          </h1>
          {/* <p className="text-accent text-lg py-2 md:py-6">W</p> */}
        </div>
        <div className="flex gap-8 mt-10 ">
        <div className="w-full lg:w-[800px] h-full hidden md:block">
            {/* <div className="w-full bg-accent absolute -z-[1px] rounded-md h-[250px]"/> */}
            <img src={BgB} alt="workers image" className="w-full h-full object-cover rounded-lg " />
        </div>
          <div className="w-full">
            <p className="text-md leading-6 tracking-wider text-textColor">
              Welcome to SafeBay, your trusted companion for all your parking and car wash needs. We believe in making
              life simpler and more convenient for everyone on the go.
            </p>
            <br />
            <br />

            <h4 className="text-xl md:text-2xl text-textColor font-bold pb-4">Our Story</h4>
            <p className="text-md leading-6 tracking-wider text-textColor">
              SafeBay was born out of a simple idea: to provide people with a better way to find parking and car wash
              services. We understood the frustrations of endlessly searching for a parking spot and the desire for a
              clean and sparkling car. That's when we decided to create a platform that would revolutionize the way you
              experience these everyday tasks. Our journey began with a vision of enhancing convenience and reducing
              stress for all our users. We've since worked tirelessly to make that vision a reality.
            </p>
            <br />
            <br />

            <h4 className="text-xl md:text-2xl text-textColor font-bold pb-4">What Sets Us Apart?</h4>

            <p className="text-md leading-6 tracking-wider text-textColor">
              User-Centric Approach: At SafeBay, you're at the center of everything we do. We continuously improve our
              platform based on your feedback, ensuring that your experience is as smooth as possible. Real-Time
              Information: We believe that access to real-time information is the key to better decision-making. Our app
              provides up-to-the-minute updates on parking availability and car wash schedules, so you're always in the
              know. Join a growing network of SafeBay users who rely on us to simplify their parking and car wash
              experiences.
            </p>

            <br />
            <br />
          </div>
        </div>
        <div className="mt-20">
          <div>
            <h1 className="flex items-center gap-2 text-3xl md:text-5xl font-bold justify-center text-textColor">
              Meet the Team <FaArrowRight className="text-accent text-xl md:text-3xl font-bold" />
            </h1>
          </div>
          <div className="md:flex justify-center items-center gap-8 mt-10">
            <div className="w-full h-[350px] md:w-[250px]  duration-200 ease-in-out rounded-lg shadow-xl mt-8 hover:rounded-2xl hover:cursor-pointer hover:scale-100 hover:bg-secondary group overflow-hidden">
              <div class="w-full h-full duration-200 flex justify-center items-center opacity-100 rounded-lg group-hover:h-[0px] group-hover:opacity-0 relative">
                <img src={Noble} alt="" className="w-full  object-cover" />
                <div className="flex flex-col justify-center px-4 absolute bg-accent w-full bottom-0">
                  <h2 className="font-bold pt-4 pb-1 text-xl text-background">Noble Chinonso</h2>
                  <p className="text-sm pb-4 font-semibold">
                    Mern Stack Developer <br /> React | Node | HTML | CSS | Javascript etc.
                  </p>
                </div>
              </div>

              <div class="h-0 w-full opacity-0 flex justify-center items-center flex-col gap-4 rounded-lg  duration-200 rotate-90 -scale-100 group-hover:h-full group-hover:opacity-100 group-hover:rotate-180 group-hover:text-md px-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil voluptates inventore modi
                  blanditiis? Repellat reprehenderit repudiandae aspernatur beatae corrupti odit dolor, saepe
                  exercitationem dolorem corporis ut ex fugit fugiat.
                </p>
                <div className="flex justify-center items-center flex-col gap-6">
                  <p className="text-background text-sm font-semibold">
                    Email Address: <span className="text-background">nobleugwuja@gmail.com</span>{" "}
                  </p>
                  <span className="flex gap-4 ">
                    <FaFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-[350px] md:w-[250px]  duration-200 ease-in-out rounded-lg shadow-xl mt-8 hover:rounded-2xl hover:cursor-pointer hover:scale-100 hover:bg-secondary group overflow-hidden">
              <div class="w-full h-full duration-200 flex justify-center items-center opacity-100 rounded-lg group-hover:h-[0px] group-hover:opacity-0 relative">
                <img src={Noble} alt="" className="w-full  object-cover" />
                <div className="flex flex-col justify-center px-4 absolute bg-pink-700 w-full bottom-0">
                  <h2 className="font-bold pt-4 pb-1 text-xl text-textColor">Noble Chinonso</h2>
                  <p className="text-sm pb-4 font-semibold text-textColor">
                    Mern Stack Developer <br /> React | Node | HTML | CSS | Javascript etc.
                  </p>
                </div>
              </div>

              <div class="h-0 w-full opacity-0 flex justify-center items-center flex-col gap-4 rounded-lg  duration-200 rotate-90 -scale-100 group-hover:h-full group-hover:opacity-100 group-hover:rotate-180 group-hover:text-md px-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil voluptates inventore modi
                  blanditiis? Repellat reprehenderit repudiandae aspernatur beatae corrupti odit dolor, saepe
                  exercitationem dolorem corporis ut ex fugit fugiat.
                </p>
                <div className="flex justify-center items-center flex-col gap-6">
                  <p className="text-background text-sm font-semibold">
                    Email Address: <span className="text-background">nobleugwuja@gmail.com</span>{" "}
                  </p>
                  <span className="flex gap-4 ">
                    <FaFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default About;

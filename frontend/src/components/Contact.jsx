import { FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
    <div className="text-textColor pt-20 w-full px-6 md:flex  max-w-[80rem] mx-auto pb-20">
      <div className="w-full  flex flex-col items-center md:items-start">
        <h1 className="flex items-center gap-2 text-4xl md:text-7xl font-bold justify-center">
          Contact Us <FaArrowRight className="text-accent text-3xl font-bold" />
        </h1>
        <p className="text-accent text-lg py-2 md:py-6">
          Do you have any problems, questions or ideas, Feel free to send us a message
        </p>
      </div>

      <form className="w-full flex flex-col gap-6 mt-10 md:mt-0">
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
            <textarea required=""
            type="text"
            name="text"
            placeholder="Enter Message..."
            className=" w-full outline-none py-7 px-7 rounded-lg text-textColor text-md bg-transparent shadow-shadow1 focus:border-2 focus:border-transparent focus:text-background focus:shadow-shadow2 focus:bg-secondary" cols="30" rows="10">

            </textarea>
         
          
        </div>
      </form>
    </div>
  );
}

export default Contact;

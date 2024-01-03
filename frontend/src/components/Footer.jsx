import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="bg-bgA bg-cover py-10">
        <div className="flex items-center flex-col md:flex-row justify-between max-w-7xl mx-auto md:divide-x-2 px-6 gap-4">
          <div className="w-full ">
            <p className="text-lg font-semibold text-secondary">SUBSCRIBE TO OUR</p>
            <h2 className="text-3xl md:text-4xl uppercase font-bold text-accent">Newsletter</h2>
          </div>
          <form className="relative w-full md:pl-8">
            <input
              type="text"
              className="w-full rounded-xl border-none bg-gray-50 p-4"
              placeholder="Enter your email..."
            />
            <button className="bg-background text-textColor py-3 px-8 rounded-xl absolute right-1 top-1">Submit</button>
          </form>
        </div>
      </div>

      <div>
        <div className="pt-10 flex flex-col md:flex-row md:gap-20 gap-12 max-w-7xl mx-auto pb-20 px-6">
          <div className="text-background max-w-[400px] w-full">
            <h4 className="text-lg font-bold pb-6 text-textColor">About Us</h4>
            <p className="text-gray-300">
              SafeBay was born out of a simple idea: to provide people with a better way to find parking and car wash
              services. We understood the frustrations of endlessly searching for a parking spot and the desire for a
              clean and sparkling car.
            </p>
          </div>
          <div className="text-background max-w-[400px] w-full">
            <h4 className="text-lg font-bold pb-6 text-textColor">About Us</h4>
            <p className="text-gray-300">Opining Days :</p>
            <p className="text-gray-300">Monday – Friday : 9am to 20 pm Saturday : 9am to 17 pm</p>
          </div>
          <div className="text-background max-w-[400px] w-full flex flex-col">
            <h4 className="text-lg font-bold pb-6 text-textColor">Quick Links</h4>
            <div className="flex flex-col justify-start items-start gap-3 md:flex-row">
              <Link to="/" className="text-gray-300  hover:text-primary duration-150">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-primary duration-150">
                About
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-primary duration-150">
                Services
              </Link>
              <Link to="/find-lot" className="text-gray-300 hover:text-primary duration-150">
                Find Lot
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-primary duration-150">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <hr />
        <p className="text-sm text-gray-300 py-4 text-center">Copyright ©2023 SsafeBay. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;

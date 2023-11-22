import { useState } from "react";
import Button from "./elements/Button";

function NavBar() {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Our Services", link: "/" },
    { name: "Find Lot", link: "/" },
    { name: "Contact Us", link: "/" }
  ];
  return (
    <div className="w-full  top-0 left-0 bg-[#010014]">
      <nav className="md:flex py-4">
        <div className="font-bold text-2xl pl-9">
          <span className=" text-[#ffffff]">Logo</span>
        </div>
        <div
          className="text-[#ffffff] text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <div
          className={`md:flex md:items-center  
                        absolute md:static md:text-[#ffffff] 
                        md:z-auto z-[-1] left-0 w-full md:pl-0 pl-9 md:ml-9 
                        transition-all duration-500 ease-in ${open ? "top-15" : "top-[-490px] "} cursor-pointer`}
        >
          <ul className="md:flex md:justify-center text-[20px] w-full mr-2 md:items-center ">
            {Links.map((item) => {
              return (
                <li key={item.name} className="md:ml-8 md:my-0 my-7  hover:bg-gray-700 ">
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
          <div className="w-40 bg-[#8BF708] rounded-[3px] transiton hover:text-neutral-600 md:mr-4">
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

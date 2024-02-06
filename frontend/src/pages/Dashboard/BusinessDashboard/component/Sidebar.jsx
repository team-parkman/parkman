import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard, MdDepartureBoard, MdHistory, MdLocalCarWash, MdLogout, MdPeople, MdPerson, MdSettings } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-background h-[100vh] w-[150px] 2xl:w-[200px] py-20 border-r border-gray-800  grid-rows-4 place-items-start hidden md:grid">
      <div className="flex flex-col gap-4 2xl:gap-6 justify-center items-start mt-4 2xl:mt-0 text-secondary row-span-3 w-full">

        <NavLink to="/business-dashboard" 
        className={({ isActive }) =>
                isActive ? "flex gap-2 items-center w-full px-4  bg-accent rounded-lg text-background duration-150 py-3" : "flex gap-2 items-center px-4 py-3 duration-150 hover:bg-accent w-full rounded-lg hover:text-background"
              }
        // className="flex gap-2 items-center relative w-full px-4 group"
        >
          <MdDashboard className="text-2xl" />
          <span className="text-[15px]">Dashboard</span>
        </NavLink>
        
        <NavLink to="/business-users" className={({ isActive }) =>
                isActive ? "flex gap-2 items-center w-full px-4  bg-accent rounded-lg text-background duration-150 py-3" : "flex gap-2 items-center px-4 py-3 duration-150 hover:bg-accent w-full rounded-lg hover:text-background"
              }>
          <MdPeople className="text-2xl" />
          <span className="text-[15px]">Users</span>
        </NavLink>
        <NavLink to="/business-carlot" className={({ isActive }) =>
                isActive ? "flex gap-2 items-center w-full px-4  bg-accent rounded-lg text-background duration-150 py-3" : "flex gap-2 items-center px-4 py-3 duration-150 hover:bg-accent w-full rounded-lg hover:text-background"
              }>
          <MdDepartureBoard className="text-2xl" />
          <span className="text-[15px]">Car Park</span>
        </NavLink>
        <NavLink to="/business-carwash" className={({ isActive }) =>
                isActive ? "flex gap-2 items-center w-full px-4  bg-accent rounded-lg text-background duration-150 py-3" : "flex gap-2 items-center px-4 py-3 duration-150 hover:bg-accent w-full rounded-lg hover:text-background"
              }>
          <MdLocalCarWash className="text-2xl" />
          <span className="text-[15px]">Car Wash</span>
        </NavLink>
        <NavLink to="/business-history" className={({ isActive }) =>
                isActive ? "flex gap-2 items-center w-full px-4  bg-accent rounded-lg text-background duration-150 py-3" : "flex gap-2 items-center px-4 py-3 duration-150 hover:bg-accent w-full rounded-lg hover:text-background"
              }>
          <MdHistory className="text-2xl" />
          <span className="text-[15px]">History</span>
        </NavLink>
      </div>

      <div className="flex flex-col gap-4 2xl:gap-6 justify-center items-start mt-6 2xl:mt-0 text-secondary row-span-1 w-full">
      <NavLink to="/profile" 
        className={({ isActive }) =>
                isActive ? "flex gap-2 items-center w-full px-4 text-[15px] bg-accent rounded-lg text-background duration-150 py-3" : "flex gap-2 items-center px-4 py-3 duration-150 text-[15px] hover:bg-accent w-full rounded-lg hover:text-background"
              }
        // className="flex gap-2 items-center relative w-full px-4 group"
        >
          <MdPerson className="text-2xl" />
          <span className="">Profile</span>
        </NavLink>
      <NavLink to="/settings" 
        className={({ isActive }) =>
                isActive ? "flex gap-2 items-center w-full px-4 text-[15px] bg-accent rounded-lg text-background duration-150 py-3" : "flex gap-2 items-center px-4 py-3 duration-150 text-[15px] hover:bg-accent w-full rounded-lg hover:text-background"
              }
        // className="flex gap-2 items-center relative w-full px-4 group"
        >
          <MdSettings className="text-2xl" />
          <span className="">Settings</span>
        </NavLink>
        <button className="flex gap-2 items-center px-4 py-3 duration-150 hover:bg-accent w-full rounded-lg hover:text-background text-[15px]">
          <MdLogout className="text-2xl"/>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

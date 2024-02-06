import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./component/Sidebar";

export const BusinessRoot = () => {
  const isAtenticated = false;
  return (
    <div className="w-full h-[100vh] bg-black">
      {isAtenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="w-full md:flex">
          <div>
            <Sidebar />
          </div>
          <div className="flex flex-1 h-full px-6">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

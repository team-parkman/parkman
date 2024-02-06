import React from "react";
import { chartData } from "../data";
import BarChart from "../component/charts/Bar";
import LineChart from "../component/charts/LineChart";
import { ads } from "../images";

const BusinessHome = () => {
  return (
    <div className=" mt-20 w-full h-[100vh]">
      <div className="grid md:grid-cols-8 w-full h-full gap-8">
        <div className="w-full  h-full md:col-span-5 bg-secondary rounded-lg">
          <div className="flex justify-center flex-col h-full w-full mx-auto gap-8 pt-4">
            <div className=" w-full md:h-full ">
              <div className="">
                <h4 className="pl-6 font-semibold text-lg pb-2 text-gray-700">Sales Trends</h4>
              </div>
              <div className=" md:h-[300px] px-2">
                <BarChart />
              </div>
            </div>

            <div className="relative overflow-x-auto shadow-md rounded-lg h-full">
              <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                <div>
                  <h4 className="pl-6 font-semibold text-lg pb-2 text-gray-700">Last Booked</h4>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="text-xs text-gray-600 font-normal bg-gray-50 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 hidden md:block">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 hidden md:block">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b text-xs md:text-md hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 whitespace-nowrap font-semibold ">Neil Sims</td>
                      <td className="px-6 py-4 hidden md:block">Nov/15/2023</td>
                      <td className="px-6 py-4">₦300.00</td>
                      <td className="px-6 py-4 hidden md:block">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Paid
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b text-xs md:text-md hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 whitespace-nowrap font-semibold ">Neil Sims</td>
                      <td className="px-6 py-4 hidden md:block">Nov/15/2023</td>
                      <td className="px-6 py-4">₦300.00</td>
                      <td className="px-6 py-4 hidden md:block">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Paid
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b text-xs md:text-md hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 whitespace-nowrap font-semibold ">Neil Sims</td>
                      <td className="px-6 py-4 hidden md:block">Nov/15/2023</td>
                      <td className="px-6 py-4">₦300.00</td>
                      <td className="px-6 py-4 hidden md:block">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Paid
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b text-xs md:text-md hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 whitespace-nowrap font-semibold ">Neil Sims</td>
                      <td className="px-6 py-4 hidden md:block">Nov/15/2023</td>
                      <td className="px-6 py-4">₦300.00</td>
                      <td className="px-6 py-4 hidden md:block">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Paid
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b text-xs md:text-md hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 whitespace-nowrap font-semibold ">Neil Sims</td>
                      <td className="px-6 py-4 hidden md:block">Nov/15/2023</td>
                      <td className="px-6 py-4">₦300.00</td>
                      <td className="px-6 py-4 hidden md:block">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Paid
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:col-span-3 bg-secondary rounded-lg pb-4">
          <div className="grid md:grid-cols-2">
            <div className="pt-4 px-2">
              <div>
                <LineChart />
                <div>
                  <h4 className=" font-semibold text-sm text-gray-500">Car Park Total Booking:</h4>
                  <h1 className=" font-bold text-2xl text-gray-700">200</h1>
                </div>
              </div>
            </div>
            <div className="pt-4 px-2 mt-8 md:mt-0 ">
              <div>
                <LineChart />
                <div>
                  <h4 className=" font-semibold text-sm text-gray-500">Car Wash Total Booking:</h4>
                  <h1 className=" font-bold text-2xl text-gray-700">100</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 px-2">
            <div>
              <h4 className=" font-semibold text-lg text-gray-700 pb-4">News</h4>
              <img src={ads} alt="ads_picture" className="rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHome;

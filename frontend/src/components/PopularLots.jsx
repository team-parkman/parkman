import React, { useState } from "react";
import { FaArrowRight, FaStar, FaStarHalf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Nature } from "../assets";

const PopularLots = () => {
  return (
    <div className="text-textColor mt-20 w-full px-6 flex flex-col md:flex-row items-start justify-center max-w-[80rem] mx-auto">
      <div className="w-full  flex flex-col items-start">
        <h1 className="flex items-center gap-2 text-4xl md:text-7xl font-bold justify-center">
          Popular <FaArrowRight className="text-accent text-3xl font-bold" />
        </h1>
        <p className="text-accent text-lg md:text-2xl text-center py-2 md:py-6">Most popular vehicle lots</p>
      </div>
      <div className="w-full md:w-[60%] relative">
        <Swiper
          //   slidesPerView={2}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          breakpoints={{
            320: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          loop
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          modules={[Pagination, Autoplay]}
          className="w-full h-[280px] md:h-[320px] flex pb-12 mt-10 md:mt-0"
        >
          <SwiperSlide className="bg-textColor text-background rounded-md flex flex-col justify-between">
            <div className="w-full h-[100px] relative ">
              <img src={Nature} alt="car_lot image" className="object-cover w-full h-full rounded-md" />
            </div>
            <h3 className="text-md sm:text-lg font-bold px-2">Regus Parking</h3>
            <p className="text-sm sm:text-md px-2 line-clamp-3">
              A bustling place with lots of activities from people and businesses.
            </p>
            <div className="flex justify-between px-2 py-2">
              <p className="text-lg font-semibold text-primary">₦300</p>
              <div className="flex justify-center items-center">
                <FaStar className="text-yellow-400 text-sm" />
                <FaStar className="text-yellow-400 text-sm" />
                <FaStar className="text-yellow-400 text-sm" />
                <FaStar className="text-yellow-400 text-sm" />
                <FaStarHalf className="text-yellow-400 text-sm" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-textColor text-background rounded-md flex flex-col justify-between ">
            <div className="w-full h-[100px] relative ">
              <img src={Nature} alt="car_lot image" className="object-cover w-full h-full rounded-md" />
            </div>
            <h3 className="text-md sm:text-lg font-bold px-2">Idumota Park</h3>
            <p className="text-sm sm:text-md px-2 line-clamp-3">
              It's a very big apportioned space for parking vehicles..
            </p>
            <div className="flex justify-between px-2 py-2">
              <p className="text-lg font-semibold text-primary">₦200</p>
              <div className="flex justify-center items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStarHalf className="text-yellow-400" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-textColor text-background rounded-md flex flex-col justify-between">
            <div className="w-full h-[100px] relative ">
              <img src={Nature} alt="car_lot image" className="object-cover w-full h-full rounded-md" />
            </div>
            <h3 className="text-md sm:text-lg font-bold px-2">Regus Parking2</h3>
            <p className="text-sm sm:text-md px-2 line-clamp-3">
              A bustling place with lots of activities from people and businesses.
            </p>
            <div className="flex justify-between px-2 py-2">
              <p className="text-lg font-semibold text-primary">₦300</p>
              <div className="flex justify-center items-center">
                <FaStar className="text-yellow-400 text-sm" />
                <FaStar className="text-yellow-400 text-sm" />
                <FaStar className="text-yellow-400 text-sm" />
                <FaStar className="text-yellow-400 text-sm" />
                <FaStarHalf className="text-yellow-400 text-sm" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-textColor text-background rounded-md flex flex-col justify-between ">
            <div className="w-full h-[100px] relative ">
              <img src={Nature} alt="car_lot image" className="object-cover w-full h-full rounded-md" />
            </div>
            <h3 className="text-md sm:text-lg font-bold px-2">Idumota Park2</h3>
            <p className="text-sm sm:text-md px-2 line-clamp-3">
              It's a very big apportioned space for parking vehicles..
            </p>
            <div className="flex justify-between px-2 py-2">
              <p className="text-lg font-semibold text-primary">₦200</p>
              <div className="flex justify-center items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStarHalf className="text-yellow-400" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularLots;

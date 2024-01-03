import React, { useState } from "react";
import { FaArrowRight, FaStar, FaStarHalf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Nature } from "../assets";

function FeedBack() {
  return (
    <div className="text-textColor pt-20 w-full px-6 md:flex  max-w-[80rem] mx-auto pb-20">
      <div className="w-full  flex flex-col items-center md:items-start">
        <h1 className="flex items-center gap-2 text-4xl md:text-7xl font-bold justify-center">
          Feedbacks <FaArrowRight className="text-accent text-3xl font-bold" />
        </h1>
        <p className="text-accent text-lg py-2 md:py-6">What do our clients say about us?</p>
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
              slidesPerView: 1
            },
            1024: {
              slidesPerView: 2
            }
          }}
          loop
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          modules={[Pagination, Autoplay]}
          className="w-full h-auto md:h-[320px] flex pb-12 mt-10 md:mt-0"
        >
          <SwiperSlide className="bg-textColor text-background rounded-md flex flex-col justify-between  gap-2 dark:text-white max-w-md w-full pb-4 p-5 shadow-md h-auto hover:scale-105 hover:duration-150 duration-150">
            <div className="">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className=" rounded-md w-20 h-4 font-semibold">John Doe</div>
                  <div className="bg-gray-200 rounded-full w-20 h-20"></div>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full pb-2">
                {/* <div class="bg-gray-200 dark:bg-neutral-700 rounded-md w-40 h-2"></div> */}

                <div className="text-xs">
                  <div className="flex justify-center items-center">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                </div>
              </div>

              <div className="rounded-md w-full line-clamp-5">
                I recently used SafeBay on a road trip, and it was a game-changer. I could locate parking lots and car
                washes at every stop, which made our journey smooth and enjoyable. The reviews helped us choose the best
                spots. Highly recommend this app!
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-textColor text-background rounded-md flex flex-col justify-between  gap-2 dark:text-white max-w-md w-full pb-4 p-5 shadow-md h-auto hover:scale-105 hover:duration-150 duration-150">

              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className=" rounded-md w-20 h-4 font-semibold">Jane Doe</div>
                  <div className="bg-gray-200 rounded-full w-20 h-20"></div>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full pb-2">
                {/* <div class="bg-gray-200 dark:bg-neutral-700 rounded-md w-40 h-2"></div> */}

                <div className="text-xs">
                  <div className="flex justify-center items-center">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                </div>
              </div>

              <div className="rounded-md w-full line-clamp-5">
                I recently used SafeBay on a road trip, and it was a game-changer. I could locate parking lots and car
                washes at every stop, which made our journey smooth and enjoyable. The reviews helped us choose the best
                spots. Highly recommend this app!
              </div>
        
          </SwiperSlide>
          <SwiperSlide className="bg-textColor text-background rounded-md flex flex-col justify-between  gap-2 dark:text-white max-w-md w-full pb-4 p-5 shadow-md h-auto hover:scale-105 hover:duration-150 duration-150">

              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className=" rounded-md w-20 h-4 font-semibold">Peter Doe</div>
                  <div className="bg-gray-200 rounded-full w-20 h-20"></div>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full pb-2">
                {/* <div class="bg-gray-200 dark:bg-neutral-700 rounded-md w-40 h-2"></div> */}

                <div className="text-xs">
                  <div className="flex justify-center items-center">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                </div>
              </div>

              <div className="rounded-md w-full line-clamp-5">
              I live in the city, and parking has always been a headache. SafeBay has made a huge difference in my daily life. It's so easy to find nearby parking spots and car wash facilities. The real-time updates are incredibly helpful. No more circling the block endlessly. Highly recommended!
              </div>
 
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default FeedBack;

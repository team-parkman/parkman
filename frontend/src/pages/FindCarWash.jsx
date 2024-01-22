import React, { useEffect, useState } from "react";
import { FaArrowRight, FaCar, FaStar, FaStarHalf } from "react-icons/fa";
import Map, { GeolocateControl, Marker, NavigationControl, ScaleControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { BgB } from "../assets";
import Footer from "../components/Footer";

const parkingLots = [
    {
      id: 1,
      name: "Regus Parking",
      image: BgB,
      description: "A bustling place with lots of activities from people and businesses.",
      price: 300,
      rating: 4.5,
      latitude: 4.8472206,
      longitude: 6.974614,
    },
    {
      id: 2,
      name: "Idumota Parking",
      image: BgB,
      description: "A bustling place with lots of activities from people and businesses.",
      price: 200,
      rating: 4.5,
      latitude: 4.8472246,
      longitude: 6.974604,
    },
    // Add more parking lots as needed
  ];


const FindCarWash = () => {
    const [position, setPosition] = useState({ latitude: null, longitude: null });

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        });
      } else {
        console.log("Geolocation is not available in your browser.");
      }
    }, []);
  
  //   console.log(position);
    
    return (
      <div className="mt-20 h-full ">
        <div className="max-w-[80rem] mx-auto px-6">
          <div className="w-full md:py-10 py-5  flex flex-col justify-center items-center">
            <h1 className="flex items-center gap-2 text-3xl md:text-5xl font-bold justify-center text-textColor">
              Find The Nearest Car Wash <FaArrowRight className="text-accent text-xl md:text-3xl font-bold" />
            </h1>
            <p className="text-accent text-lg py-2 ">Finding the nearest car wash within your location have never been easy.</p>
          </div>
  
          <div className="w-full h-[500px] flex justify-center pt-10 overflow-hidden rounded-lg  ">
            {position.latitude && position.longitude ? (
              <Map
                mapboxAccessToken={import.meta.env.VITE_ACCESS_TOKEN_KEY}
                initialViewState={{
                  longitude: position.longitude,
                  latitude: position.latitude,
                  zoom: 12
                }}
                attributionControl={false}
                style={{ width: "100vw", height: "500px" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              >
                <NavigationControl />
                <GeolocateControl />
                
                {/* <Marker longitude={-100} latitude={40} anchor="bottom">
                  <img src="./pin.png" />
                </Marker> */}
                {parkingLots.map((lot) => (
                  <Marker
                    key={lot.id}
                    longitude={lot.longitude}
                    latitude={lot.latitude}
                  //   anchor="bottom"
                  >
                    {/* Use an appropriate marker for your application */}
                    <FaCar className="text-3xl text-accent"/>
                  </Marker>
                ))}
                <ScaleControl />
              </Map>
            ) : (
              <p>Loading...</p>
            )}
          </div>
  
          <div className="mt-10 flex gap-6 flex-col md:flex-row pb-20 flex-wrap">
            {parkingLots.map((lot) => (
              <div
                key={lot.id}
                className="bg-secondary p-2 md:p-4 flex justify-center w-full md:w-[600px] rounded-lg gap-4 shadow-2xl"
              >
                <div className=" h-[119px] w-[210px]">
                  <img src={lot.image} alt={lot.name} className="rounded-lg object-cover h-full" />
                </div>
                <div className="w-full">
                  <h3 className="font-semibold pb-2 md:text-xl text-lg">{lot.name}</h3>
                  <p className="tracking-wider line-clamp-2 leading-4">{lot.description}</p>
                  <div className="flex items-center justify-between mt-2 gap-2">
                    <h5 className="font-semibold text-2xl">₦{lot.price}</h5>
                    <div className="flex justify-center items-center">
                      {/* Display stars based on the rating */}
                      {[...Array(Math.floor(lot.rating))].map((_, index) => (
                        <FaStar key={index} className="text-yellow-400" />
                      ))}
                      {lot.rating % 1 !== 0 && <FaStarHalf className="text-yellow-400" />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
        
        <Footer/>
      </div>
    );
};

export default FindCarWash;

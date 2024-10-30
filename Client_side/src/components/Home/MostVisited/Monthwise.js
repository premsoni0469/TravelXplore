import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"; // Import useNavigate hook
import bestcitydata from "./Dataset/Places/bestcitytovisit.json"
import {Link, NavLink} from 'react-router-dom'


function Monthwise() {
  const navigate = useNavigate(); // Initialize navigate

  // const handleBookNow = (path = "/booking-detail") => {
  //   navigate(path); // Replace with the correct path to your booking page
  // };
  const handleBookNow = (cityName) => {
    navigate("/booking-detail", { state: { city: cityName } });
  };

  const [ciytname, setCityName] = useState([]); // Store all cities from the JSON
  const [currentCityName, setCurrentCityName] = useState([]); // Store the four cities to display
  const [startIndex, setStartIndex] = useState(0); // Track the start index for slicing

  // Load data on component mount
  useEffect(() => {
      setCityName(bestcitydata);
      setCurrentCityName(bestcitydata.slice(0, 4)); // Initialize with the first four cities
  }, []);

  // Update displayed cities every 2 minutes
  useEffect(() => {
      const intervalId = setInterval(() => {
          setStartIndex((prevIndex) => {
              const newIndex = (prevIndex + 4) % bestcitydata.length;
              setCurrentCityName(bestcitydata.slice(newIndex, newIndex + 4));
              return newIndex;
          });
      }, 60000); // 60000 ms = 1 minutes

      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
  }, [bestcitydata]);

  return (
    <section className="text-gray-600 body-font">
      
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:mb-0 text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 pb-2">
              Month-wise Most Visited Tourist Places
            </h1>
            <div className="h-1 w-60 bg-blue-600 rounded m-auto"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {currentCityName.map((ciytname, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg " style={{ height: "600px" }}>
                <img
                  className="h-40 rounded w-full object-cover object-center mb-3"
                  src="https://dummyimage.com/720x400"
                  alt="image"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {ciytname.City}
                </h2>
                <p className="leading-relaxed text-base" style={{ height: "210px" }}>
                {ciytname.City_desc
                  .replace(/^[\[\]"'\\/,\s]+|[\[\]"'\\/,\s]+$/g, "")  // Removes symbols, spaces, and commas from start/end
                  .split(".")[0] + "."}
                </p>
                <p className="text-gray-600 mt-2" style={{ height: "50px" }}>
                  <strong>Best time to visit:</strong> {ciytname.Best_time_to_visit || "All Month"} 
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Rating:</strong> {ciytname.Ratings}
                </p>
                <button
                  onClick={() => handleBookNow(ciytname.City)}
                  className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-600 rounded"
                >
                  See Details
                </button>
              </div>
              
            </div>
            
          ))}
            
        </div>
        <div className="text-center mt-4">
            <Link to="/month-wise-place-explore" className="text-blue-500 inline-flex mt-3 items-center ml-4">
              View More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
      </div>
    </div>
    </section>

  );
}

export default Monthwise;

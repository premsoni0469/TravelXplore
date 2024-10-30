import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import city_Data from "../Home/MostVisited/Dataset/Places/bestcitytovisit.json"
import destinationsData from "../Home/MostVisited/Dataset/Places/bestplacesincity.json"



function Monthwisedetail() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate();

  // const handleBookNow = () => {
  //   if (selectedDestination) {
  //     console.log(`Booking for ${selectedDestination.name}`);
  //     navigate("/booking", { state: { destination: selectedDestination.name } });
  //   }
  // };
  
  const handleBookNow = (cityName) => {
    navigate("/booking", { state: { place: cityName } });
  };

  const location = useLocation();
  const {city}  = location.state || {};

  
  const [cityInfo, setCityInfo] = useState(null);

  useEffect(() => {
    if (city) {
      // Find the city data in the JSON based on the city value from location.state
      const cityData = city_Data.find(item => item.City === city);
      setCityInfo(cityData || null); // Set to null if city is not found
    }
  }, [city]);
  

  

  const filteredDestinations = destinationsData
    .filter(destination => destination.City === city ) // Filter by the specific city and rating
    .sort((a, b) => b.Ratings - a.Ratings) // Sort by rating descending
    .slice(0, 8); // Limit to top 8 items


  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating); // Full stars
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star
    const emptyStars = totalStars - fullStars - halfStars; // Empty stars

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={i}
            fill="currentColor"
            stroke="currentColor"
            className="w-4 h-4 text-yellow-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        {halfStars === 1 && (
          <svg
            fill="currentColor"
            stroke="currentColor"
            className="w-4 h-4 text-yellow-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 15.4L8.24 17.67l.99-4.28L5.5 9.9l4.38-.38L12 5.1l2.12 4.43 4.38.38-3.73 3.48.99 4.28zM12 2l2.83 5.92 6.48.55-4.89 4.23 1.46 6.25L12 17.27 5.18 21l1.46-6.25L1.75 8.47l6.48-.55L12 2z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={i}
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 text-gray-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
    <Navbar />
    <section className="text-gray-600 body-font" style={{
        background: 'linear-gradient(to right, #b6f2f0, #a8f0bd)', // Add your gradient colors here
      }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:mb-0 text-center">
            <h1 style={{ fontSize: '7rem', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)'}} className="sm:text-4xl font-medium title-font mb-14 mt-16 text-gray-950 pb-4 ">
              {city}
            </h1>
            
            {cityInfo ? (
              <p className="leading-relaxed text-lg text-gray-700 max-w-3xl mx-auto">{cityInfo.City_desc.replace(/^[\[\]"'\\/,\s]+|[\[\]"'\\/,\s]+$/g, "")  // Removes symbols, spaces, and commas from start/end
                 + "."}</p> 
            ) : (
              <p >No information available for {city}</p>
            )}
            
            <div className="h-1 w-60 bg-blue-600 rounded m-auto my-6"></div>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="flex flex-wrap -m-4">
          {filteredDestinations.map((destination, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div
                className={`bg-gray-100 p-6 rounded-lg cursor-pointer ${
                  selectedDestination === destination ? "border border-blue-500" : ""
                }`}
                onClick={() => setSelectedDestination(destination)} // Set selected destination on click
              >
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="image"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4" style={{ height: "70px" }}>
                  {destination.Place}
                </h2>
                <p className="leading-relaxed text-base" style={{ height: "300px" }}>
                {destination.Place_desc.split(" ").slice(0, 45).join(" ")}{destination.Place_desc.split(" ").length > 45 ? "" : ""}.
                </p>
                <p className="text-gray-600 text-1xl">{destination.
                Distance}</p>
                {/* Rating section */}
                <div className="flex items-center mb-4">
                  {renderStars(destination.Ratings)}
                  <span className="ml-2 text-gray-600">{destination.Ratings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => handleBookNow(city)}
            className={`text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded `}
            // Disable button if no destination is selected
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Monthwisedetail;
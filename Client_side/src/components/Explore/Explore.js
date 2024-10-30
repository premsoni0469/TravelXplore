import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useLocation } from 'react-router-dom';
import destinationsData from "../Home/MostVisited/Dataset/Places/bestplacesincity.json";

function Explore() {
  useEffect(() => {
    document.title = "TravelXplore | Explore"; // Change the title
  }, []);

  const navigate = useNavigate();
  const handleBookNow = (cityName) => {
    navigate("/booking", { state: { place: cityName } });
  };

  const location = useLocation();
  const { city } = location.state || {};
  

  // Capitalize the first letter of the city
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : null;

  // Filter destinations based on the city
  const filteredDestinations = city
    ? destinationsData.filter(destination => destination.City.toLowerCase() === city.toLowerCase())
    : [];
  if (filteredDestinations.length === 0) {
    alert("No data available for the selected place.");
  }
  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 8; // Number of items per page

  // Pagination logic
  const totalPages = Math.ceil(filteredDestinations.length / destinationsPerPage);
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = filteredDestinations.slice(
    indexOfFirstDestination,
    indexOfLastDestination
  );

  // Handle case when no destinations match
  

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Helper to render pagination numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = totalStars - fullStars - halfStars;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} fill="currentColor" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        {halfStars === 1 && (
          <svg fill="currentColor" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
            <path d="M12 15.4L8.24 17.67l.99-4.28L5.5 9.9l4.38-.38L12 5.1l2.12 4.43 4.38.38-3.73 3.48.99 4.28zM12 2l2.83 5.92 6.48.55-4.89 4.23 1.46 6.25L12 17.27 5.18 21l1.46-6.25L1.75 8.47l6.48-.55L12 2z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={i} fill="none" stroke="currentColor" className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 mt-12 text-gray-900 text-center" style={{ fontSize: '5rem', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)'}}>
                {formattedCity}

                
              </h1>
              
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              <h2 className="font-semibold text-black">
                Explore the Rich Heritage of India
              </h2>
              At TravelXplore, we bring you closer to the captivating
              destinations of India. Discover the diverse cultures, rich
              history, and breathtaking landscapes that make this country a
              traveler's paradise. From majestic palaces to serene backwaters,
              let us guide you on your next unforgettable journey through India.
            </p>
          </div>

          { /* Destination Cards */}
          <div className="flex flex-wrap -m-4">
            {currentDestinations.map((destination, index) => (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg cursor-pointer">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="image"
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4" style={{ height: "70px" }}>
                    {destination.Place}
                  </h2>
                  <p className="leading-relaxed text-base" style={{ height: "300px" }}>
                  {destination.Place_desc
                    .replace(/^\d+\.\s*/, '') // Remove leading "1. ", "2. ", etc.
                    .split(" ")
                    .slice(0, 45)
                    .join(" ")}
                  {destination.Place_desc.split(" ").length > 45 ? "" : ""}
                  </p>
                  <p className="text-gray-600 text-1xl">{destination.Distance}</p>
                  {/* Rating section */}
                  <div className="flex items-center mb-4">
                    {renderStars(destination.Ratings)}
                    <span className="ml-2 text-gray-600">{destination.Ratings}</span>
                  </div>
                  <button
                    onClick={() => handleBookNow(destination.City)}
                    className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-600 rounded"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-10">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === 1 ? "bg-gray-100" : "bg-gray-100"
              } hover:bg-gray-200 transition-all duration-300`}
            >
              <svg
                className="w-6 h-6 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {getPageNumbers().map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`mx-1 px-3 py-1 border rounded ${
                  currentPage === number ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
                } hover:bg-gray-200 transition-all duration-300`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === totalPages ? "bg-gray-100" : "bg-gray-100"
              } hover:bg-gray-200 transition-all duration-300`}
            >
              <svg
                className="w-6 h-6 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Explore;

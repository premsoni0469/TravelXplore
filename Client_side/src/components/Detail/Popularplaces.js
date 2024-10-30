import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import popularPlaceData from "../Home/MostVisited/Dataset/Places/TopIndianPlacetovisit.json";

function Popularplaces() {
  const navigate = useNavigate();
  const location = useLocation();
  const { place } = location.state || {};
  const [placeInfo, setPlaceInfo] = useState(null);

  useEffect(() => {
    if (place) {
      const placeData = popularPlaceData.find(item => item.Name === place);
      setPlaceInfo(placeData || null);
    }
  }, [place]);

  const handleBookNow = (cityName) => {
    navigate("/booking", { state: { place: cityName } });
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = totalStars - fullStars - halfStars;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} fill="currentColor" stroke="currentColor" className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        {halfStars === 1 && (
          <svg fill="currentColor" stroke="currentColor" className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24">
            <path d="M12 15.4L8.24 17.67l.99-4.28L5.5 9.9l4.38-.38L12 5.1l2.12 4.43 4.38.38-3.73 3.48.99 4.28zM12 2l2.83 5.92 6.48.55-4.89 4.23 1.46 6.25L12 17.27 5.18 21l1.46-6.25L1.75 8.47l6.48-.55L12 2z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={i} fill="none" stroke="currentColor" className="w-5 h-5 text-gray-400" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        <span className="ml-2 text-gray-700">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 py-10 mt-20">
        <div className="container mx-auto px-4 mt-4 mb-4">
          {placeInfo ? (
            <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
              {/* Image Section */}
              <div className="lg:w-1/2 relative">
                <img src="https://dummyimage.com/720x400"
                  alt="image" className="w-full h-72 object-cover transition duration-500 hover:opacity-75" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                  <h1 className=" font-bold p-2" style={{ fontSize: '5rem', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)'}}>{placeInfo.Name}</h1>
                  <button
                    onClick={() => handleBookNow(placeInfo.City)} // Pass city name here
                    className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </div>
              
              {/* Details Section */}
              <div className="lg:w-1/2 p-6 flex flex-col justify-between">
                <h2 className="text-3xl font-semibold mb-4">Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.keys(placeInfo).map((key) => {
                    if (key && key !== "" && key !== "imageUrl") { // Exclude empty keys and imageUrl
                      return (
                        <div key={key} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                          <span className="font-semibold">{key}:</span> 
                          {key === 'Google review rating' ? renderStars(placeInfo[key]) : ` ${placeInfo[key]}`}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-200">Loading place information...</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Popularplaces;

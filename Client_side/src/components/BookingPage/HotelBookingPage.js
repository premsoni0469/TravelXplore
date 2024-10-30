import React, { useState, useEffect } from 'react';
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import hotelsData from './Hotels/hotels.json';
import { useNavigate } from "react-router"; 
import { useLocation } from 'react-router-dom';

const HotelPage = () => {
  const [hotelData, setHotelData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [nights, setNights] = useState(1);
  const [checkInDate, setCheckInDate] = useState(""); // State for check-in date
  const [bookingDetails, setBookingDetails] = useState(null);
  const hotelsPerPage = 9;

  const navigate = useNavigate(); 
  const location = useLocation();
  const { passengerdetails } = location.state || {};
  const { flightdetails } = location.state || {};
  const { traindetails } = location.state || {};
  const { totaltrainprice } = location.state || {};
  const { totalflightprice } = location.state || {};
  const { departureDate } = location.state || {};
  const { place } = location.state || {}; 
  const { traveltype } = location.state || {};  

  let traveldetail;
  let traveltotalcost;
  

  if(traveltype === "flight")
  {
      traveldetail = flightdetails;
      traveltotalcost = totalflightprice;
      
  }
  if(traveltype === "train"){
      traveldetail = traindetails;
      traveltotalcost = totaltrainprice;
     
  }

  const handleBookNow = () => {
    navigate("/check-out-page", { state: { place: place, passengerdetails: passengerdetails, traveldetail: traveldetail, traveltotalcost: traveltotalcost, departureDate: departureDate, hotelbookingDetails: bookingDetails, traveltype: traveltype } });
  };

  const handleCancel = () => {
    setBookingDetails(null); // Reset booking details
  };

  const getPriceByRating = (rating) => {
    switch (rating) {
      case 5: return 8000; 
      case 4: return 5000; 
      case 3: return 3000; 
      default: return 1500; 
    }
  };

  useEffect(() => {
    const filteredHotels = hotelsData.filter(hotel => hotel.city.toLowerCase() === place.toLowerCase());
    if (filteredHotels.length > 0) {
      setHotelData(filteredHotels[0]); // Load the first hotel by default
    } else {
      setHotelData(null); // No hotel found for the selected city
    }
  }, [place]);

  const handleSimilarHotelClick = (hotelIndex) => {
    const filteredHotels = hotelsData.filter(hotel => hotel.city.toLowerCase() === place.toLowerCase());
    setHotelData(filteredHotels[hotelIndex]);
    setCurrentPage(1);
    setBookingDetails(null);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(hotelsData.length / hotelsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  

  const currentHotels = hotelsData.filter(hotel => hotel.city.toLowerCase() === place.toLowerCase()).slice(
    (currentPage - 1) * hotelsPerPage,
    currentPage * hotelsPerPage
  );

  const handleProceedToPayment = () => {
    const pricePerRoom = getPriceByRating(hotelData.hotel_star_rating);
    const totalPrice = pricePerRoom * rooms * nights;

    // Calculate check-out date
    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkOutDate.getDate() + nights);

    setBookingDetails({
      hotelName: hotelData.property_name,
      hotelAddress: hotelData.address,
      totalRooms: rooms,
      totalNights: nights,
      pricePerRoom,
      totalPrice,
      checkInDate,  // Include check-in date
      checkOutDate: checkOutDate.toLocaleDateString() // Format check-out date
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
      );
    }
    return <div>{stars}</div>;
  };

  if (!hotelData) return <p>No hotels found for the selected city.</p>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8 mt-20">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src="https://dummyimage.com/800x400/cccccc/000000&text=Hotel+Image"
            alt="Hotel" className="w-full h-80 object-cover" 
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{hotelData.property_name}</h1>
            <p className="text-gray-600 mb-2">{`${hotelData.city}, ${hotelData.province}, ${hotelData.country}`}</p>
            <p className="text-gray-500 mb-4">{hotelData.address}</p>
            <p className="text-gray-800 mb-4">{hotelData.hotel_description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Rating: {renderStars(hotelData.hotel_star_rating)} ({hotelData.hotel_star_rating} / 5)</span>
              <span className="text-lg font-semibold">Price: ₹{getPriceByRating(hotelData.hotel_star_rating)} / night</span>
              <span className="text-sm text-gray-500">{hotelData.site_review_count || "No"} Reviews</span>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Amenities</h2>
              <ul className="grid grid-cols-2 gap-2 text-gray-700">
                {hotelData.hotel_facilities.split("|").map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Select Rooms and Nights</h2>
              <div className="flex items-center mb-4">
                <label className="mr-2">Rooms:</label>
                <input
                  type="number"
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  min="1"
                  className="border rounded p-2 mr-4"
                />
                <label className="mr-2">Nights:</label>
                <input
                  type="number"
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                  min="1"
                  className="border rounded p-2"
                />
              </div>
              <div className="flex items-center mb-4">
                <label className="mr-2">Check-In Date:</label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="border rounded p-2"
                  required
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <button 
                onClick={handleProceedToPayment}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg mr-4"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Similar Hotels */}
        <div className="max-w-5xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4">Similar Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentHotels.map((hotel, index) => {
              const price = getPriceByRating(hotel.hotel_star_rating);
              return (
                <div 
                  key={index} 
                  onClick={() => handleSimilarHotelClick((currentPage - 1) * hotelsPerPage + index)}
                  className="cursor-pointer block bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img 
                    src="https://via.placeholder.com/200" 
                    alt={hotel.property_name} 
                    className="h-40 w-full object-cover" 
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{hotel.property_name}</h3>
                    <div className="flex justify-between items-center">
                      {renderStars(hotel.hotel_star_rating)}
                      <span className="font-semibold">₹{price} / night</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

         {/* Pagination Controls */}
         <div className="flex justify-between mt-4">
            <button 
              onClick={handlePrevPage} 
              disabled={currentPage === 1}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button 
              onClick={handleNextPage} 
              disabled={currentPage >= Math.ceil(hotelsData.length / hotelsPerPage)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

       

        {/* Booking Details Modal */}
        {bookingDetails && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Booking Details</h2>
            <div className="space-y-4">
              <p><strong>Hotel:</strong> {bookingDetails.hotelName}</p>
              <p><strong>Address:</strong> {bookingDetails.hotelAddress}</p> {/* Display hotel address */}
              <p><strong>Rooms:</strong> {bookingDetails.totalRooms}</p>
              <p><strong>Nights:</strong> {bookingDetails.totalNights}</p>
              <p><strong>Price of Room per Night:</strong> ₹{bookingDetails.pricePerRoom}</p>
              <p><strong>Check-In Date:</strong> {bookingDetails.checkInDate}</p>
              <p><strong>Check-Out Date:</strong> {bookingDetails.checkOutDate}</p>
              <p className="text-xl font-bold text-green-600">
                <strong>Total Price:</strong> ₹{bookingDetails.totalPrice}
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button 
                onClick={handleBookNow} 
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mr-4"
              >
                Continue
              </button>
              <button 
                onClick={handleCancel} 
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}


      </div>
      <Footer />
    </>
  );
};

export default HotelPage;

import React, { useState } from 'react';
import economyFlights from './Flight/economy.json';
import businessFlights from './Flight/business.json';
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const FlightBookingPage = () => {
  const [availableFlights, setAvailableFlights] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedFlightClass, setSelectedFlightClass] = useState('Economy');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState(''); // State for departure date
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();
  const { place } = location.state || {};
  const { passengerdetails } = location.state || {};
  
  const totalFullNames = passengerdetails.filter(person => person.fullName.trim() !== "").length;
  const flightsPerPage = 10; // Show 10 flights per page
  const maxFlightsToShow = 50; // Limit to 50 flights total

  const handleSearchFlights = (e) => {
    e.preventDefault();
    const flightsData = selectedFlightClass === 'Economy' ? economyFlights : businessFlights;

    const filteredFlights = flightsData
      .filter(
        (flight) =>
          flight.from.toLowerCase() === from.toLowerCase() &&
          flight.to.toLowerCase() === to.toLowerCase()
      )
      .slice(0, maxFlightsToShow) // Limit to 50 flights
      .map((flight) => {
        const finalPrice = parseFloat(flight.price.replace(',', ''));
        return {
          ...flight,
          price: finalPrice,
          flightNumber: `${flight.ch_code} ${flight.num_code}`,
        };
      });

    setAvailableFlights(filteredFlights);
    setCurrentPage(1); // Reset to the first page on every new search

    if (filteredFlights.length === 0) {
      alert("No Flights available for the selected route.");
    }
  };

  const handleBookFlight = (flight) => {
    setBookingDetails({ ...flight, departureDate }); // Include departure date in booking details
    setTotalPrice(flight.price);
  };

  const totalPages = Math.ceil(availableFlights.length / flightsPerPage);
  const currentFlights = availableFlights.slice(
    (currentPage - 1) * flightsPerPage,
    currentPage * flightsPerPage
  );

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen mt-20">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md ">
          <p className="text-2xl text-center text-black font-bold mb-4">Book Your Flight</p>
          <form onSubmit={handleSearchFlights}>
            <div className="mb-4">
              <label htmlFor="from" className="block font-medium mb-1">From</label>
              <input
                type="text"
                id="from"
                name="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Enter departure city"
                className="w-full border-gray-300 border-2 p-2 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="to" className="block font-medium mb-1">To</label>
              <input
                type="text"
                id="to"
                name="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Enter destination city"
                className="w-full border-gray-300 border-2 p-2 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="departure-date" className="block font-medium mb-1">
                Departure Date
              </label>
              <input
                type="date"
                id="departure-date"
                name="departure-date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)} // Update state with selected date
                className="w-full border-gray-300 border-2 p-2 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="flightClass" className="block font-medium mb-1">Flight Class</label>
              <select
                id="flightClass"
                name="flightClass"
                value={selectedFlightClass}
                onChange={(e) => setSelectedFlightClass(e.target.value)}
                className="border-gray-300 border-2 p-2 rounded"
                required
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Search Flights
            </button>
          </form>
        </div>

        {availableFlights.length > 0 && (
          <div className="max-w-2xl mx-auto mt-8">
            <h3 className="text-xl font-semibold mb-4">Available Flights</h3>
            {currentFlights.map((flight, index) => (
              <div key={index} className="bg-white p-4 mb-4 rounded shadow transition hover:shadow-lg">
                <div className="flex justify-between mb-2">
                  <p className="font-semibold text-lg">{flight.airline}</p>
                  <p className="text-gray-500">{flight.flightNumber}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-medium">From: {flight.from}</p>
                    <p className="font-medium">To: {flight.to}</p>
                    <p className="text-sm text-gray-600">Departure: {flight.dep_time}</p>
                  </div>
                  <div>
                    <p className="font-medium">Arrival: {flight.arr_time}</p>
                    <p className="font-medium">Duration: {flight.time_taken}</p>
                    <p className="text-sm text-gray-600">Stoppage: {flight.stop}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-green-600">₹{flight.price}</p>
                  <button
                    onClick={() => handleBookFlight(flight)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 bg-gray-300 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
              >
                Previous
              </button>
              <span className="font-medium text-lg">Page {currentPage} of {totalPages}</span>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 bg-gray-300 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
              >
                Next
              </button>
            </div>
          </div>
        )}

      {bookingDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
            <h3 className="text-3xl font-semibold mb-4 text-center text-blue-600">Booking Summary</h3>
            <div className="space-y-4">
              <p className="text-lg"><strong>Flight:</strong> {bookingDetails.airline} - {bookingDetails.flightNumber}</p>
              <p className="text-lg"><strong>From:</strong> {bookingDetails.from}</p>
              <p className="text-lg"><strong>To:</strong> {bookingDetails.to}</p>
              <p className="text-lg"><strong>Duration:</strong> {bookingDetails.time_taken}</p>
              <p className="text-lg"><strong>Stoppage:</strong> {bookingDetails.stop}</p>
              <p className="text-lg"><strong>Flight Date:</strong> {departureDate}</p> {/* Adjust to use actual date */}
              <p className="text-lg"><strong>Price:</strong> ₹{bookingDetails.price}</p>
              <p className="text-3xl font-bold text-green-600">Total Price ({totalFullNames} Passengers): ₹{(totalPrice * totalFullNames).toFixed(2)}</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => navigate("/hotel-booking", { state: { place: place, passengerdetails: passengerdetails, flightdetails: bookingDetails, totalflightprice: (totalPrice * totalFullNames).toFixed(2), departureDate: departureDate, traveltype: "flight"} })}
                  className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 mr-4"
                >
                  Continue 
                </button>
                <button
                  onClick={() => setBookingDetails(null)} // Cancel action
                  className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>
      <Footer />
    </>
  );
};

export default FlightBookingPage;

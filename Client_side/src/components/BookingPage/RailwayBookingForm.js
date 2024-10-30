import React, { useState } from "react";
import trainData from "./Train/full_train_details.json"; // Import JSON file with train data
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const RailwayBookingPage = () => {
  const [availableTrains, setAvailableTrains] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedClass, setSelectedClass] = useState("Sleeper");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
 
  const [currentPage, setCurrentPage] = useState(1);
  const [departureDate, setDepartureDate] = useState(""); // Add state for departure date
  const trainsPerPage = 10;

  const navigate = useNavigate();

  
  const location = useLocation();
  const { place } = location.state || {};
  const { passengerdetails } = location.state || {};
  const totalFullNames = passengerdetails.filter(person => person.fullName.trim() !== "").length;

  // Pricing multipliers based on class
  const classPricing = {
    Sleeper: 1,
    "AC 3 Tier": 1.5,
    "AC 2 Tier": 2,
    "AC First Class": 3,
  };

  // Default base price for calculation
  const basePrice = 1000;

  // Handle searching trains by filtering JSON data
  const handleSearchTrains = (e) => {
    e.preventDefault();
    const filteredTrains = trainData.filter((train) => {
      const fromMatches =
        train["Station Name"]?.toLowerCase().includes(fromCity.toLowerCase()) ||
        train["Station Code"]?.toLowerCase() === fromCity.toLowerCase(); // Check for Station Code
  
      const toMatches =
        train["Destination Station Name"]?.toLowerCase().includes(toCity.toLowerCase()) ||
        train["Destination Station"]?.toLowerCase() === toCity.toLowerCase(); // Check for Destination Station Code
  
      return fromMatches && toMatches;
    });
  
    setAvailableTrains(filteredTrains);
    setCurrentPage(1); // Reset to first page

    // Check if no trains are available
    if (filteredTrains.length === 0) {
      alert("No trains available for the selected route.");
    }
  };

  const handleBookTrain = (train) => {
    const classMultiplier = classPricing[selectedClass];
    const finalPrice = basePrice * classMultiplier;
    setBookingDetails({ ...train, finalPrice });
    setTotalPrice(finalPrice);
  };

  // Calculate the trains to display based on current page
  const indexOfLastTrain = currentPage * trainsPerPage;
  const indexOfFirstTrain = indexOfLastTrain - trainsPerPage;
  const currentTrains = availableTrains.slice(indexOfFirstTrain, indexOfLastTrain);

  // Pagination controls
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(availableTrains.length / trainsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center justify-center mt-20">
        {/* Railway Booking Form */}
        <div className="railway-info-form bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Book Your Train Ticket</h2>

          {/* Form for booking train */}
          <form onSubmit={handleSearchTrains} className="space-y-4">
            <div className="form-group">
              <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                From
              </label>
              <input
                type="text"
                id="from"
                name="from"
                placeholder="Enter departure city or code"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                To
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Enter destination city or code"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="departure-date" className="block text-sm font-medium text-gray-700">
                Departure Date
              </label>
              <input
                type="date"
                id="departure-date"
                name="departure-date"
                value={departureDate} // Set value to state
                onChange={(e) => setDepartureDate(e.target.value)} // Update state on change
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                Class
              </label>
              <select
                id="class"
                name="class"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="Sleeper">Sleeper</option>
                <option value="AC 3 Tier">AC 3 Tier</option>
                <option value="AC 2 Tier">AC 2 Tier</option>
                <option value="AC First Class">AC First Class</option>
              </select>
            </div>

            
            <button
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              type="submit"
            >
              Search Trains
            </button>
          </form>
        </div>

        {/* Display available trains after search */}
        {availableTrains.length > 0 && (
          <div className="available-trains space-y-4 w-full max-w-2xl mt-8">
            <h3 className="text-xl font-bold mb-4">Available Trains</h3>
            {currentTrains.map((train, index) => (
              <div
                key={index}
                className="train-card bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div className="train-info">
                  <div className="train-details mb-2">
                    <span className="font-bold">{train["Train Name"]}</span>
                    <span className="text-gray-600 ml-2">{train["Train No"]}</span>
                  </div>
                  <div className="train-schedule mb-2">
                    <span className="block">
                      From: {train["Station Name"]} ({train["Station Code"]})
                    </span>
                    <span className="block">
                      To: {train["Destination Station Name"]} ({train["Destination Station"]})
                    </span>
                  </div>
                  <div className="train-timings mb-2">
                    <span className="block">Arrival: {train["Arrival time"]}</span>
                    <span className="block">Departure: {train["Departure Time"]}</span>
                    <span className="block">Distance: {train["Distance"]} km</span>
                  </div>
                </div>
                <div className="price-actions text-right">
                  <span className="block font-semibold">
                    ₹{(basePrice * classPricing[selectedClass]).toFixed(2)}
                  </span>
                  <span className="block text-sm text-gray-500">
                    per person ({selectedClass})
                  </span>
                  <button
                    className="mt-2 bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    onClick={() => handleBookTrain(train)}
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination Controls */}
            <div className="pagination mt-4 flex justify-center space-x-2">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === number ? "bg-indigo-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Booking Details Modal */}
      {bookingDetails && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Booking Details</h2>
            <div className="space-y-4">
              <p className="text-lg mb-2">
                <strong>Train Name:</strong> {bookingDetails["Train Name"]}
              </p>
              <p className="text-lg mb-2">
                <strong>From:</strong> {bookingDetails["Station Name"]} ({bookingDetails["Station Code"]})
              </p>
              <p className="text-lg mb-2">
                <strong>To:</strong> {bookingDetails["Destination Station Name"]} ({bookingDetails["Destination Station"]})
              </p>
              <p className="text-lg mb-2">
                <strong>Arrival Time:</strong> {bookingDetails["Arrival time"]}
              </p>
              <p className="text-lg mb-2">
                <strong>Departure Time:</strong> {bookingDetails["Departure Time"]}
              </p>
              <p className="text-lg mb-2">
                <strong>Distance:</strong> {bookingDetails["Distance"]} km
              </p>
              <p className="text-lg mb-2">
                <strong>Departure Date:</strong> {departureDate} {/* Display departure date */}
              </p>
              <p className="text-lg mb-2">
                <strong>Price per person:</strong> ₹{bookingDetails.finalPrice.toFixed(2)}
              </p>
              <p className="text-3xl font-bold text-green-600">
                Total Price ({totalFullNames} Passengers): ₹{(bookingDetails.finalPrice * totalFullNames).toFixed(2)}
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => navigate("/hotel-booking", { state: { place: place, passengerdetails: passengerdetails, traindetails: bookingDetails, totaltrainprice: (bookingDetails.finalPrice * totalFullNames).toFixed(2), departureDate: departureDate, traveltype: "train" } })}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 mr-4"
              >
                Continue
              </button>
              <button
                onClick={() => setBookingDetails(null)} // Resets booking details
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default RailwayBookingPage;

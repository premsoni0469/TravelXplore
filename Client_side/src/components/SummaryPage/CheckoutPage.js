import React, { useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const { passengerdetails } = location.state || {};
  const { traveldetail } = location.state || {};
  const { traveltotalcost } = location.state || {};
  const { departureDate } = location.state || {};
  const { place } = location.state || {};
  const { hotelbookingDetails } = location.state || {};
  const { traveltype } = location.state || {};

  const navigate = useNavigate();
  const bookingDetails = traveldetail;
  const [prefillDetails, setPrefillDetails] = useState({
    name: passengerdetails[0]?.fullName || '',
    email: 'Enter your Email ID',
    contact: 'Enter your Contact No.',
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrefillDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookNow = () => {
    navigate("/home");
  };

  const totalFullNames = passengerdetails.filter(person => person.fullName.trim() !== "").length;
  const hotelDetails = hotelbookingDetails;
  const orderSummary = {
    totalPrice: Number(hotelDetails.totalPrice) + Number(traveltotalcost),
  };
  const destinationSummary = place;
  const billingDetails = hotelbookingDetails;

  const openRazorpay = async () => {
    const { data } = await axios.post('http://localhost:5001/create-order', {
      amount: orderSummary.totalPrice
    });

    const options = {
      key: 'rzp_test_6VYMw2fVpJUcES',
      amount: data.amount,
      currency: data.currency,
      name: 'TravelXplore',
      description: 'Payment for booking',
      order_id: data.id,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        handleBookNow();
      },
      prefill: {
        name: prefillDetails.name,
        email: prefillDetails.email,
        contact: prefillDetails.contact,
      },
      notes: {
        address: 'Customer Address'
      },
      theme: {
        color: '#F37254'
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleProceedToPay = () => {
    setIsModalOpen(true); // Open the modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen w-screen font-sans bg-gray-200 mt-20">
        <aside className="w-1/4 bg-white text-gray-800 p-5 flex flex-col justify-center">
          <h2 className="text-2xl mb-4">Order Summary</h2>
          <div className="order-summary">
            <p className="text-lg my-2"><strong>Hotel:</strong> ₹{hotelDetails.totalPrice}</p>
            {traveltype === "flight" ? (
              <p className="text-lg my-2"><strong>Flight:</strong> ₹{traveltotalcost}</p>
            ) : (
              <p className="text-lg my-2"><strong>Railway Ticket:</strong> ₹{traveltotalcost}</p>
            )}
            <p className="text-lg my-2"><strong>Total:</strong> ₹{orderSummary.totalPrice}</p>
          </div>
        </aside>

        <main className="w-3/4 p-10 overflow-y-auto">
          <h1 className="text-4xl mb-6 text-gray-800">Review & Confirm Your Details</h1>

          <section className="mb-5 p-5 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-600 mb-2">Destination Summary</h2>
            <p className="text-gray-700">{destinationSummary}</p>
          </section>

          <section className="mb-5 p-5 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-600 mb-2">Traveller Information</h2>
            {passengerdetails.map((person, index) => (
              <li key={index} className="mb-2 p-2 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="font-medium">{`Person ${index + 1}:`}</span>
                  <span className="text-gray-700">{`Age: ${person.age}, Gender: ${person.gender}`}</span>
                </div>
                <div className="text-gray-600">{person.fullName}</div>
              </li>
            ))}
          </section>

          <section className="mb-5 p-5 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-600 mb-2">Hotel Details</h2>
            <p className="text-gray-700"><strong>Hotel:</strong> {billingDetails.hotelName}</p>
            <p className="text-gray-700"><strong>Address:</strong> {billingDetails.hotelAddress}</p>
            <p className="text-gray-700"><strong>Rooms:</strong> {billingDetails.totalRooms}</p>
            <p className="text-gray-700"><strong>Nights:</strong> {billingDetails.totalNights}</p>
            <p className="text-gray-700"><strong>Price of Room per Night:</strong> {billingDetails.pricePerRoom}</p>
            <p className="text-gray-700"><strong>Check-In Date:</strong> {billingDetails.checkInDate}</p>
            <p className="text-gray-700"><strong>Check-Out Date:</strong> {billingDetails.checkOutDate}</p>
            <p className="text-gray-700"><strong>Total Price:</strong> ₹{billingDetails.totalPrice}</p>
          </section>
          <section className="mb-5 p-5 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-600 mb-2">Travel Details</h2>
            {traveltype === "flight" ? (
              <>
                <p className="text-gray-700"><strong>Flight:</strong> {bookingDetails.airline} - {bookingDetails.flightNumber}</p>
                <p className="text-gray-700"><strong>From:</strong> {bookingDetails.from}</p>
                <p className="text-gray-700"><strong>To:</strong> {bookingDetails.to}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {bookingDetails.time_taken}</p>
                <p className="text-gray-700"><strong>Flight Date:</strong> {departureDate}</p>
                <p className="text-gray-700"><strong>Price:</strong> ₹{bookingDetails.price}</p>
                
                <p className="text-gray-700"><strong>Total Price ({totalFullNames} Passengers):</strong> ₹{(bookingDetails.price * totalFullNames).toFixed(2)} {/* Display departure date */}</p>
              
              </>
            ) : (
              <>
                <p className="text-gray-700"><strong>Train Name:</strong> {bookingDetails["Train Name"]}</p>
                <p className="text-gray-700"><strong>From:</strong> {bookingDetails["Station Name"]} ({bookingDetails["Station Code"]})</p>
                <p className="text-gray-700"><strong>To:</strong> {bookingDetails["Destination Station Name"]} ({bookingDetails["Destination Station"]})</p>
                <p className="text-gray-700"> <strong>Arrival Time:</strong> {bookingDetails["Arrival time"]}</p>
                <p className="text-gray-700"><strong>Departure Time:</strong> {bookingDetails["Departure Time"]}</p>
                <p className="text-gray-700"> <strong>Distance:</strong> {bookingDetails["Distance"]} km</p>
                <p className="text-gray-700"><strong>Departure Date:</strong> {departureDate} {/* Display departure date */}</p>
                <p className="text-gray-700"><strong>Price:</strong> ₹{bookingDetails.finalPrice}</p>
                <p className="text-gray-700"><strong>Total Price ({totalFullNames} Passengers):</strong> ₹{(bookingDetails.finalPrice * totalFullNames).toFixed(2)} {/* Display departure date */}</p>
                
                
              </>
            )}
          </section>


          <button
            onClick={handleProceedToPay}
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Proceed to Pay
          </button>
        </main>
      </div>
      <Footer />

      {/* Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl text-gray-600 mb-2">Payment Details</h2>
            <label className="block text-gray-600 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={prefillDetails.name}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 mb-4 rounded w-full"
              required
            />
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={prefillDetails.email}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 mb-4 rounded w-full"
              required
            />
            <label className="block text-gray-600 mb-2">Contact</label>
            <input
              type="tel"
              name="contact"
              value={prefillDetails.contact}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 mb-4 rounded w-full"
              required
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={openRazorpay}
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;

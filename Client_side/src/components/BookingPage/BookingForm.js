import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useLocation } from 'react-router-dom';

const BookingForm = () => {
  const [persons, setPersons] = useState([
    { fullName: "", age: "", gender: "" },
  ]);
  const [showDetails, setShowDetails] = useState(false); // State to manage visibility of passenger details
  const navigate = useNavigate();
  const location = useLocation();
  const { place } = location.state || {};

  const handlePersonChange = (index, e) => {
    const updatedPersons = persons.map((person, i) =>
      i === index ? { ...person, [e.target.name]: e.target.value } : person
    );
    setPersons(updatedPersons);
  };

  const addPerson = () => {
    setPersons([
      ...persons,
      { fullName: "", age: "", gender: "" },
    ]);
  };

  const removePerson = (index) => {
    const updatedPersons = persons.filter((_, i) => i !== index);
    setPersons(updatedPersons);
  };

  const handleDone = () => {
    setShowDetails(true); // Show passenger details when "Done" is clicked
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center mb-6 mt-20">
        <nav className="w-full bg-gray-200 p-4 mr-\-4 fixed top-4 left-4 right-4 rounded-lg shadow-lg mt-20">
          <div className="container mx-auto flex justify-center space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-green-700 transition duration-300 flex items-center"
              onClick={() => navigate("/flight-booking", {state: {place: place, passengerdetails: persons}})}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 mr-2 text-white" fill="white">
                <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2l137.7 0c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48l-57.4 0c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32l576 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448c-17.7 0-32 14.3-32 32z"></path>
              </svg>
              Flight Booking
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-green-700 transition duration-300 flex items-center"
              onClick={() => navigate("/railway-booking", {state: {place: place, passengerdetails: persons}})}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 mr-2 text-white" fill="white">
                <path d="M96 0C43 0 0 43 0 96L0 352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512l39.7 0c8.5 0 16.6-3.4 22.6-9.4L160 448l128 0 54.6 54.6c6 6 14.1 9.4 22.6 9.4l39.7 0c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9l0-256c0-53-43-96-96-96L96 0zM64 96c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-96zM224 288a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
              Railway Booking
            </button>
          </div>
        </nav>
        <div className="container mx-auto w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-28 mb-8">
          <h1 className="font-bold text-2xl text-center text-gray-800 mb-6">
            Booking Information
          </h1>
          <form>
            {persons.map((person, index) => (
              <div key={index} className="person-form mb-6">
                <h2 className="text-center font-bold text-lg mb-4">
                  Person {index + 1}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="block font-medium mb-1">Full Name:</label>
                    <input
                      type="text"
                      name="fullName"
                      value={person.fullName}
                      onChange={(e) => handlePersonChange(index, e)}
                      className="w-full border-2 border-gray-300 p-2 rounded"
                      placeholder="First-Name Middle-Name Last-Name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="block font-medium mb-1">Age:</label>
                    <input
                      type="number"
                      name="age"
                      value={person.age}
                      onChange={(e) => handlePersonChange(index, e)}
                      className="w-full border-2 border-gray-300 p-2 rounded"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="block font-medium mb-1">Gender:</label>
                    <select
                      name="gender"
                      value={person.gender}
                      onChange={(e) => handlePersonChange(index, e)}
                      className="w-full border-2 border-gray-300 p-2 rounded"
                      required
                    >
                      <option value="">Not Selected</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    className="absolute top-5 right-5 -mt-6 mr-4 px-4 py-2 border-2 border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition duration-300"
                    onClick={() => removePerson(index)}
                  >
                    Remove Person
                  </button>
                )}
                <hr className="my-4 mt-3" />
              </div>
            ))}
            <button
              type="button"
              className="block w-full md:w-auto px-4 py-2 mt-4 mb-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
              onClick={addPerson}
            >
              Add Another Person
            </button>
            <button
              type="button"
              className="block w-full md:w-auto px-4 py-2 mb-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              onClick={handleDone}
            >
              Done
            </button>
          </form>

          {/* Conditional rendering of passenger details */}
          {showDetails && (
            <div className="passenger-details mt-6 p-4 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
              <h2 className="font-bold text-xl mb-4">Passenger Details:</h2>
              <ul className="list-disc pl-6">
                {persons.map((person, index) => (
                  <li key={index} className="mb-2 p-2 border-b border-gray-200">
                    <div className="flex justify-between">
                      <span className="font-medium">{`Person ${index + 1}:`}</span>
                      <span className="text-gray-700">{`Age: ${person.age}, Gender: ${person.gender}`}</span>
                    </div>
                    <div className="text-gray-600">{person.fullName}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingForm;

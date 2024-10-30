import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoginClick = () => {
    navigate("/login"); // Redirect to login page
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <header
        className={`${
          isScrolled ? "shadow-lg rounded-lg p-3 mt-4 mx-4" : "p-5"
        } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <NavLink
            to="/home"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl font-bold">TravelXplore</span>
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-blue-500 font-semibold text-xl"
                    : "hover:text-gray-900"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-blue-500 font-semibold text-xl"
                    : "hover:text-gray-900"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-blue-500 font-semibold text-xl"
                    : "hover:text-gray-900"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-blue-500 font-semibold text-xl"
                    : "hover:text-gray-900"
                }`
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-blue-500 font-semibold text-xl"
                    : "hover:text-gray-900"
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
          <div className="relative mx-4 items-center hidden md:flex">
            <input
              type="text"
              className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-white focus:shadow-md"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <button className="ml-2 bg-blue-500 text-white rounded-full py-2 px-4 focus:outline-none hover:bg-blue-700">
              Search
            </button>
          </div>
          <button
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-3xl text-base mt-4 md:mt-0 mr-2"
            onClick={handleLoginClick}
          >
            Log In
          </button>
          <button
            className="inline-flex items-center bg-blue-450 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 bg-blue-800 text-white mt-4 md:mt-0 mr-2 rounded-3xl"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
          <div className="md:hidden flex items-center">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar2;

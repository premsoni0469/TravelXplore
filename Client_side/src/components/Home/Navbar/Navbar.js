import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/explore", { state: { city: searchTerm } });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleProfileClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogoutClick = () => {
        // Perform logout logic here
        setIsDropdownOpen(false);
        navigate("/home");
    };

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
                        {/* <NavLink
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
                        </NavLink> */}
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
                    <div className="relative mx-4 flex items-center md:flex">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
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
                        <button
                            className="ml-2 bg-blue-500 text-white rounded-full py-2 px-4 focus:outline-none hover:bg-blue-700"
                            onClick={handleSearch} // Call handleSearch on button click
                        >
                            Search
                        </button>
                    </div>
                    {/* <div className="relative">
                        <img
                            id="avatarButton"
                            type="button"
                            data-dropdown-toggle="userDropdown"
                            data-dropdown-placement="bottom-start"
                            className="w-10 h-10 rounded-full cursor-pointer"
                            src="https://i.imghippo.com/files/WQUWh1727872682.jpg"
                            alt="User dropdown"
                            onClick={handleProfileClick}
                        />
                        {isDropdownOpen && (
                            <div id="userDropdown" className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div>Prem Soni</div>
                                    <div className="font-medium truncate">premsoni0469@gmail.com</div>
                                </div>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                    <li>
                                        <Link to="/user-profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Info</Link>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My bookings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={handleLogoutClick}>Log out</a>
                                </div>
                            </div>
                        )}
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
                    </button> */}
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

export default Navbar;

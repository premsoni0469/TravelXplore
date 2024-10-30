import React, { useState, useEffect } from "react";
import Navbar1 from "./Navbar/Navbar2";
import Navbar from "./Navbar/Navbar";
import Marquee from "./Marquee/Marquee";
import Carousel from "./Carousel/Carousel";
import Features from "./Features/Features";
import MostVisited from "./MostVisited/MostVisited";
import Testimonials from "./MostVisited/Testimonials";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router";
import Monthwise from "./MostVisited/Monthwise";

const slides = [
  "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/1266916471/photo/mumbai-india-gateway-of-india-arch-monument-used-as-a-symbolic-ceremonial-entrance-to-british.jpg?s=2048x2048&w=is&k=20&c=9ShhYPHAxZwFgiqbNtw1_syf1RTzpXcqiL5JWogonMU=",
  "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Home() {
  const navigate = useNavigate(); // Initialize navigate
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  useEffect(() => {
    // Check login status (this is just a placeholder, replace with actual login check)
    const userLoggedIn = true; // Replace with actual login check logic
    setIsLoggedIn(userLoggedIn);
    document.title = "TravelXplore | Home"; // Change the title
  }, []);

  const handleBookNow = () => {
    navigate("/booking"); // Replace with the correct path to your booking page
  };

  return (
    <div>
      {/* <Navbar isLoggedIn={isLoggedIn} /> */}
      <Navbar isLoggedIn={isLoggedIn} handleBookNow={handleBookNow} />
      <Marquee />
      <Carousel>
        {slides.map((s, index) => (
          <img
            key={index}
            src={s}
            alt={`Slide ${index}`}
            className="w-full h-fit "
          />
        ))}
      </Carousel>
      <Features />
      <MostVisited />
      <Monthwise />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;

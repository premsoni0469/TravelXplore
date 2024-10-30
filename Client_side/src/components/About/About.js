import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "TravelXplore | About Us"; // Change the title
  }, []);
  return (
    <div>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div className="relative">
          <img
            src="https://i.imghippo.com/files/c2u301727849163.jpg"
            alt="background"
            className="w-full h-[50vh] md:h-[65vh] object-cover"
          />
          <div className="absolute text-white text-center font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 md:text-7xl text-3xl">
            <h3>About Us</h3>
          </div>
        </div>

        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              Who are we?
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Your Ultimate Travel Planner
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              At TravelXplore, we believe that travel should be more than just a
              destination—it’s about creating unforgettable experiences,
              stress-free journeys, and discovering the world on your terms.
            </p>
          </div>
          <div className="pb-3">
            <h3 className="font-bold text-black text-4xl text-center pb-3">
              Our Vision
            </h3>
            <p className="text-justify p-5 w-2/3 m-auto">
              Our vision at TravelXplore is to simplify travel planning for
              everyone, making it an enjoyable and hassle-free experience. We
              aim to be the go-to platform where travelers can easily create
              personalized itineraries that suit their needs and preferences.
              <br />
              <br />
              We envision a world where travel is more accessible, allowing
              people to explore new destinations confidently and without
              complexity. As we grow, we strive to integrate thoughtful travel
              options, ensuring a balance between adventure and responsible
              tourism.
              <br />
              <br />
              Ultimately, we aim to inspire and enable more people to explore
              the world, one itinerary at a time.
            </p>
          </div>
          <div className="pb-3">
            <h3 className="font-bold text-black text-4xl text-center pb-3">
              Our Mission
            </h3>
            <p className="text-justify p-5 w-2/3 m-auto">
              At TravelXplore, our mission is simple: to make travel planning
              accessible, seamless, and enjoyable for everyone. We are committed
              to empowering travelers by providing a platform that combines
              convenience, customization, and inspiration. We believe that every
              journey begins with a well-crafted itinerary, and our goal is to
              help you create one that transforms your travel dreams into
              reality.
              <br />
              <br />
              We aim to eliminate the stress of organizing trips by offering
              intuitive tools that cater to both seasoned travelers and
              first-time explorers. Whether you’re planning a weekend getaway or
              a month-long adventure, TravelXplore allows you to tailor your
              itineraries according to your preferences—be it cultural
              immersion, outdoor exploration, or relaxing retreats.
              <br />
              <br />
              At the heart of TravelXplore is a desire to inspire exploration
              and adventure while promoting responsible and mindful travel.
              We’re dedicated to providing recommendations that support
              sustainable tourism, local communities, and eco-friendly
              practices. By doing so, we hope to contribute to the preservation
              of the world’s beautiful destinations for future generations.
            </p>
          </div>
        </div>
        <section class="text-gray-600 w-4/5 m-auto body-font">
          <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-col text-center w-full mb-10">
              <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900">
                Why choose us?
              </h1>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <h2 class="text-gray-900 font-bold text-lg title-font">
                      Happy Customers
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      Customer satisfaction is at the heart of our travel
                      philosophy. We are dedicated to ensuring that every
                      journey you embark upon through our platform not only
                      meets but exceeds your expectations.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <h2 class="text-gray-900 font-bold text-lg title-font">
                      Best Prices
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      Discover the best prices for your dream destinations with
                      us. Our relentless dedication to securing competitive
                      rates means you can explore the world without breaking the
                      bank.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <h2 class="text-gray-900 font-bold text-lg title-font">
                      Well-planned Trips
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      Our meticulously planned trips are designed to be your
                      passport to stress-free and memorable adventures. From
                      curated itineraries to seamless logistics, we take care of
                      every detail, allowing you to savor each moment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 w-4/5 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
                OUR TEAM
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                We are a close-knit group of friends passionate about travel and
                technology. Together, we bring our diverse skills to create
                amazing travel experiences for you. Let's explore the world
                together!
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="Prem"
                    className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4"
                    src="https://i.imghippo.com/files/WQUWh1727872682.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Prem Soni
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      UI Designer & Front-End Developer
                    </h3>
                    <p className="mb-4">
                      Prem brings creativity and user-centered design to the
                      team, ensuring that TravelXplore is not only functional
                      but also aesthetically pleasing. Their focus on intuitive
                      design helps users navigate the platform effortlessly.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4"
                    src="https://i.postimg.cc/MTJyhFxy/aayush.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Aayush Mishra
                    </h2>
                    <h3 className="text-gray-500 mb-3">Front-End Developer</h3>
                    <p className="mb-4">
                      Aayush focuses on building the user interface of
                      TravelXplore, ensuring a smooth and visually appealing
                      experience with their expertise in HTML, CSS, and React.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4"
                    src="https://i.imghippo.com/files/3IHqc1727872766.webp"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Ubai Ratangiri
                    </h2>
                    <h3 className="text-gray-500 mb-3">Back-End Developer</h3>
                    <p className="mb-4">
                      Ubai is responsible for managing the back-end
                      infrastructure of TravelXplore. With expertise in Node.js
                      and Express, they work tirelessly to ensure that our
                      platform runs smoothly, handling data securely and
                      efficiently.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4"
                    src="https://i.imghippo.com/files/G9hTJ1727872798.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Pawan Tiwari
                    </h2>
                    <h3 className="text-gray-500 mb-3">Back-End Developer</h3>
                    <p className="mb-4">
                      Pawan is a versatile full-stack developer, contributing to
                      both the front-end and back-end of TravelXplore, ensuring
                      the platform’s reliability and performance.
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
export default About;

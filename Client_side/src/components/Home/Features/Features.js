import React from "react";

function Features() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-col text-center w-full mb-10">
          <h2 class="text-xs text-blue-600 tracking-widest font-medium title-font mb-1">
            INTRODUCING TRAVEL ITINERARY SYSTEM
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Welcome to <b>TravelXplore</b>!
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            A user-friendly platform designed to enhance your travel experience
            by providing personalized itineraries, destination guides, and
            seamless booking options, making exploration effortless and
            enjoyable.
          </p>
        </div>
        <div class="flex flex-wrap">
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              User-friendly interface
            </h2>
            <p class="leading-relaxed text-base mb-4">
              TravelXplore offers a clean, intuitive, and easy-to-navigate
              interface, ensuring a seamless user experience for travelers of
              all tech levels, with simple access to all features and smooth
              interaction across devices.
            </p>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Recommendation system
            </h2>
            <p class="leading-relaxed text-base mb-4">
              TravelXplore offers strong recommendations of various tourist
              places and other things based on month of the year or a particular
              season, making users enjoy correct thing at correct time.
            </p>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Seamless booking options
            </h2>
            <p class="leading-relaxed text-base mb-4">
              TravelXplore offers convenience by allowing users to book tickets,
              without getting redirected to other sites.
            </p>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Customizable Itinerary Planner
            </h2>
            <p class="leading-relaxed text-base mb-4">
            TravelXplore allows users to create and customize their own travel itineraries based on personal preferences. Users can select destinations, accommodation options, activities, and transportation, all within an intuitive interface.
            </p>
          </div>
        </div>
        <button
          class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-3xl text-lg"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
export default Features;

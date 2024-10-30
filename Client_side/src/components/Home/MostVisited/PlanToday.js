import React from "react";

function PlanToday(){
    return (
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto flex items-center md:flex-row flex-col">
    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 class="text-md text-blue-600 tracking-widest font-medium title-font mb-1 ">What are you waiting for?</h2>
      <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">Plan your trip today!</h1>
    </div>
    <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="title-font font-medium">Plan Trip</span>
        </span>
      </button>
      
    </div>
  </div>
</section>
    );
}
export default PlanToday;
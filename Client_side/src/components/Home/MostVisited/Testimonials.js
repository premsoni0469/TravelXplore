import React from "react";

function Testimonials() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
            CUSTOMER REVIEWS
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            See the reviews of our loyal customers
          </h1>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div class="h-full text-center">
                  <img
                    alt="testimonial"
                    class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://i.imghippo.com/files/WQUWh1727872682.jpg"
                  />
                  <p class="leading-relaxed">
                  An amazing experience! TravelXplore made planning my vacation so effortless. The itinerary was perfectly tailored to my preferences, and I never missed a beat. Highly recommend!
                  </p>
                  <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-lg">
                    Parth Soni
                  </h2>
                  <p class="text-gray-500">From Mumbai</p>
                </div>
              </div>
              <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div class="h-full text-center">
                  <img
                    alt="testimonial"
                    class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://i.imghippo.com/files/G9hTJ1727872798.jpg"
                  />
                  <p class="leading-relaxed">
                  TravelXplore's platform is a game changer. I could easily explore destinations, and booking everything in one place was a breeze. My trip to Manali was beyond expectations.
                  </p>
                  <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-lg">
                    Pawan Tiwari
                  </h2>
                  <p class="text-gray-500">From Lucknow</p>
                </div>
              </div>
              <div class="lg:w-1/3 lg:mb-0 p-4">
                <div class="h-full text-center">
                  <img
                    alt="testimonial"
                    class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://i.postimg.cc/MTJyhFxy/aayush.jpg"
                  />
                  <p class="leading-relaxed">
                  Planning a holiday used to be stressful, but TravelXplore changed that! The seamless interface and useful insights helped me create the perfect travel plan for my family.
                  </p>
                  <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-lg">
                    Aayush Mishra
                  </h2>
                  <p class="text-gray-500">From Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
export default Testimonials;

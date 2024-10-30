import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import destinationsData from "../Home/MostVisited/Dataset/Places/TopIndianPlacetovisit.json";

function MostVisitedPlaceExplore() {
  useEffect(() => {
    document.title = "TravelXplore | Explore";
  }, []);

  const navigate = useNavigate();
  const handleBookNow = (placeName) => {
    navigate("/booking-popular-places-detail", { state: { place: placeName } });
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = totalStars - fullStars - halfStars;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} fill="currentColor" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        {halfStars === 1 && (
          <svg fill="currentColor" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
            <path d="M12 15.4L8.24 17.67l.99-4.28L5.5 9.9l4.38-.38L12 5.1l2.12 4.43 4.38.38-3.73 3.48.99 4.28zM12 2l2.83 5.92 6.48.55-4.89 4.23 1.46 6.25L12 17.27 5.18 21l1.46-6.25L1.75 8.47l6.48-.55L12 2z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={i} fill="none" stroke="currentColor" className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  // Pagination logic
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(destinationsData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const currentItems = destinationsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Render page numbers with ellipsis and arrows
  const renderPageNumbers = () => {
    const pagesToShow = 5;
    let pageNumbers = [];

    if (totalPages <= pagesToShow) {
      // Display all pages if total pages are less than or equal to pagesToShow
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      // Start and end logic for ellipsis and displaying specific pages
      let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
      let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

      if (endPage - startPage < pagesToShow - 1) {
        startPage = Math.max(1, endPage - pagesToShow + 1);
      }

      // If not at the beginning, add the first page and ellipsis
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push("...");
        }
      }

      // Add the range of pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // If not at the end, add ellipsis and the last page
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(totalPages);
      }
    }

    return (
      <>
        {currentPage > 1 && (
          <button onClick={handlePreviousPage} className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700">
            &lt;
          </button>
        )}
        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="mx-1 px-3 py-1">
              {page}
            </span>
          )
        )}
        {currentPage < totalPages && (
          <button onClick={handleNextPage} className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700">
            &gt;
          </button>
        )}
      </>
    );
  };

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 mt-12 text-gray-900 text-center" style={{ fontSize: '2rem', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)'}}>
                Welcome to Explore!
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              <h2 className="font-semibold text-black">
                Explore the Rich Heritage of India
              </h2>
              At TravelXplore, we bring you closer to the captivating
              destinations of India. Discover the diverse cultures, rich
              history, and breathtaking landscapes that make this country a
              traveler's paradise. From majestic palaces to serene backwaters,
              let us guide you on your next unforgettable journey through India.
            </p>
          </div>

          {/* Destination Cards */}
          <div className="flex flex-wrap -m-4">
            {currentItems.map((placename, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="image"
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4" style={{ height: "50px" }}>
                    {placename.Name}
                  </h2>
                  <h3 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {placename.City}
                  </h3>
                  <p className="leading-relaxed text-base">
                    {placename.Significance}
                  </p>
                  <button
                    onClick={() => handleBookNow(placename.Name)}
                    className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 rounded focus:outline-none hover:bg-blue-700 transition-colors"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            {renderPageNumbers()}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MostVisitedPlaceExplore;

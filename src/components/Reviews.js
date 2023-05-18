import React, { useState } from "react";
import reviewsData from "../reviews.json";
import Review from "./Review";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  const startIndex = currentPage * reviewsPerPage;
  const currentReviews = reviewsData.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  const goToPage = (number) => {
    setCurrentPage(number);
  };

  // Calculate page numbers for pagination buttons
  const pageNumbers = [];
  for (
    let i = Math.max(0, currentPage - 2);
    i <= Math.min(totalPages - 1, currentPage + 2);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div class="reviews-container">
      <div>
        <h1>Reviews</h1>
        <div class="center">
          {currentReviews.map((review, index) => (
            <Review review={review} index={index} />
          ))}
        </div>
        {totalPages > 1
          ? pageNumbers.map((number) => (
              <button
                key={number}
                className={`page-button ${
                  number === currentPage ? "active" : ""
                }`}
                onClick={() => goToPage(number)}
              >
                {number + 1}
              </button>
            ))
          : null}
      </div>
    </div>
  );
};

export default Reviews;

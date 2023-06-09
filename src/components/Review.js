import React from "react";

const Review = ({ review, index }) => {
  return (
    <div key={index} className="review">
      <h3>{review.author}</h3>
      <ul class="review-info">
        <li>Tentamen cijfer: {review.grade}</li>
        <li>Docent: {review.teacher_name}</li>
      </ul>
      <p>{review.review}</p>
    </div>
  );
};

export default Review;

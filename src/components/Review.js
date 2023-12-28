import React from "react";
import "./reviews.css";

const Review = ({ review, index }) => {
  return (
    <div key={index}>
      <h3>{review.author}</h3>
      <ul className="review-info">
        <li>Tentamen cijfer: {review.grade}</li>
        <li>Docent: {review.teacher_name}</li>
      </ul>
      <p>{review.review}</p>
    </div>
  );
};

export default Review;

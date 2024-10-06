// Reviews.js

import React, { useState } from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination module CSS
import "swiper/css/autoplay"; // Autoplay module CSS
import { Pagination, Autoplay } from "swiper/modules";

// MUI imports
import { styled } from "@mui/material/styles";
import { Box, Card, Typography } from "@mui/material";

// Import the reviews data
import reviews from "../data/reviews.json";

// Styled Swiper component using MUI's styling solution
const StyledSwiper = styled(Swiper)(({ theme }) => ({
  // Customize Swiper's pagination bullets
  "& .swiper-pagination-bullet": {
    backgroundColor: theme.palette.primary.main,
  },
}));

// Styled ReviewCard component
const ReviewCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(5),
  textAlign: "left",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  height: 300, // Set a fixed height (e.g., 300px)
  overflow: "hidden", // Hide overflow content
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const Reviews = () => {
  const [width] = useState(window.innerWidth);
  const mobile = width < 768;

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  return (
    <>
      <Typography
        variant={mobile ? "h4" : "h3"}
        marginTop={10}
        paddingLeft={mobile ? "10px" : ""}
        textAlign={"center"}
      >
        Wat onze studenten zeggen.
      </Typography>

      <Box
        sx={{
          width: "80%",
          margin: "auto",
          py: 5,
          overflow: "visible",
        }}
      >
        <StyledSwiper
          modules={[Pagination, Autoplay]} // Include Autoplay and Pagination modules
          spaceBetween={30}
          slidesPerView={3} // Display 3 slides at a time
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, // Auto-slide every 5 seconds
            disableOnInteraction: false, // Continue autoplay after interactions
          }}
          loop={true} // Enable looping
          breakpoints={{
            // Responsive breakpoints
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Map through the reviews and create a SwiperSlide for each */}
          {shuffleArray(reviews).map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard>
                <Typography variant="h6" gutterBottom noWrap>
                  {review.author}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  {review.grade === "" ? "" : <strong>Cijfer:</strong>}{" "}
                  {review.grade}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    flexGrow: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {review.review}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" noWrap>
                  <strong>Docent:</strong> {review.teacher_name}
                </Typography>
              </ReviewCard>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Box>
    </>
  );
};

export default Reviews;

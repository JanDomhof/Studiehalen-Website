import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewsData from "../data/reviews.json";
import Review from "./Review";
import "./reviews.css";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ReviewsNew = () => {
  return (
    <Swiper
      className="container swiper-container"
      // install Swiper modules
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={25}
      loop={true}
      centeredSlides={true}
      navigation
      loopAddBlankSlides={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      // scrollbar={{ draggable: true }}
      // breakpoints={{
      //   0: {
      //     slidesPerView: 1,
      //   },
      //   900: {
      //     slidesPerView: 2,
      //   },
      //   1100: {
      //     slidesPerView: 3,
      //   },
      // }}
    >
      {reviewsData.map((review, index) => {
        return (
          <SwiperSlide key={index} className="review">
            <Review review={review} index={index} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewsNew;

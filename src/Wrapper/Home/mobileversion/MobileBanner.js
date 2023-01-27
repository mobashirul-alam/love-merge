// Configuration
import React from "react";

// Third party packages
import { Swiper, SwiperSlide } from "swiper/react";

export const MobileBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-8 px-6">
      <Swiper {...settings}>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1575390130709-7b5fee2919e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="mx-auto w-full rounded-md max-h-48"
            alt="Not Available"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

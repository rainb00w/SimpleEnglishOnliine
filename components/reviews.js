import s from "../styles/reviews.module.scss";
import Image from "next/image";
import reviewsImage from "../public/img/forAdults/reviews1.webp";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Reviews() {
  return (
    <>
    <div className="container">
      <div className={s.reviewsHDiv}>
        <h3 className={s.reviewsH}>Нам довіряють</h3>
      </div>
      <div id="reviews" className={s.reviewsMainDiv}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          loop
          centeredSlides
          centeredSlidesBounds
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className={s.myswiper}
          
        >
          <SwiperSlide  className={s.swiperslider}>
            <Image
              src={reviewsImage}
              alt="reviews"
              width={605}
              height={977}
              placeholder="blur" // Optional blur-up while loading
            />
          </SwiperSlide>
          <SwiperSlide className={s.swiperslider}>
            <div className={s.reviewsVideoDiv}>
              <video
                controls
                width="100%"
                preload="metadata"
                poster="img/forAdults/video_preview.webp"
              >
                {/* <source src="/video-example.webm" type="video/webm" /> */}
                <source src="vid/review1.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 3</SwiperSlide>
          <div class="swiper-pagination"  slot="pagination"></div> */}
        </Swiper>
      </div>
      </div>
    </>
  );
}

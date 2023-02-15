import s from '../../styles/sc/reviewsSC.module.scss';

// import reviewsImage from "../public/img/forAdults/reviews1.webp";
import reviewsImage from '../../public/img/forAdults/reviews1.webp';

import React, { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default function ReviewsSC() {
  return (
    <>
      <div className="container">
        <div className={s.main_container}>
          {/* <div className={s.header_text_container}>
            <h2 className={s.header_text}>Відгуки про клаб</h2>
          </div> */}

          {/* <div className={s.reviewsMainDiv}>
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
              <SwiperSlide className={s.swiperslider}>
                <div className={s.reviewsVideoDiv}>
                  <video
                    controls
                    width="100%"
                    preload="metadata"
                    // poster="img/forAdults/video_preview.webp"
                  >
                    <source
                      src="../../public/vid/review2.mp4"
                      type="video/mp4"
                    />
                    Sorry, your browser doesn't support videos.
                  </video>
                </div>
              </SwiperSlide>
              <SwiperSlide className={s.swiperslider}>
                <div>2 slide</div>
              </SwiperSlide>

              <div class="swiper-pagination" slot="pagination"></div>
            </Swiper>
          </div> */}
          {/* <div className={s.reviewsVideoDiv}>
            <video
              controls
              width="100%"
              preload="metadata"
              // poster="img/forAdults/video_preview.webp"
            >
              <source src="../../public/vid/review2.mp4" type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
          </div> */}

          <img src="img/sc/review_sc.webp" className={s.review_image} />

          <div className={s.main_container_btns}>
            <a href="https://www.instagram.com/simple.english.online/">
              <button className={s.leave_feedback}>залишити відгук</button>
            </a>

            <div className={s.connect_manager}>
              <a href="https://t.me/simpleenglishonl">
                <img
                  className={s.connect_manager__tg_image}
                  src="img/sc/telegram_sign.webp"
                />
              </a>

              <a href="#speaking-club-form">
                <button className={s.contact_with_manager}>
                  зв’язатися з менеджером
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

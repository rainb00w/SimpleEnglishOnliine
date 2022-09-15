import s from "../styles/reviews.module.scss";
import Image from "next/image";
import reviewsImage from "../public/img/forAdults/reviews1.webp";
import React from "react";

export default function Reviews() {
  return (
    <>
      <div id="reviews" className={s.reviewsMainDiv}>
        <Image
          src={reviewsImage}
          alt="reviews"
          width={605}
          height={977}
          placeholder="blur" // Optional blur-up while loading
        />
        <div className={s.reviewsVideoDiv}>
          <video controls width="100%" preload="metadata" poster="img/forAdults/video_preview.webp">
            {/* <source src="/video-example.webm" type="video/webm" /> */}
            <source src="vid/review1.mp4" type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
        </div>
      </div>
    </>
  );
}

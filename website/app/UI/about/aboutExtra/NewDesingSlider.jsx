"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

export default function NewDesingSlider({ vals }) {
  return (
    <div className="w-[11rem] md:w-72">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {vals?.map((val) => {
          const color = val.bgColor;
          return (
            <SwiperSlide
              key={val.id}
              className={`w-[11rem] md:w-72 h-96 py-6 rounded-xl bg-white`}
            >
              <div
                className={`w-[11rem] md:w-72 h-96 py-6 rounded-xl px-4 flex justify-center gap-2 flex-col`}
              >
                <h2 className="font-bold text-xl">{val.title}</h2>
                <p>{val.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

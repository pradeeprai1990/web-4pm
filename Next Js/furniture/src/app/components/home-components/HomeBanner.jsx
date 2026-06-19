 "use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import "swiper/css";
import 'swiper/css/navigation';
export default function HomeBanner() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
             pagination={{ clickable: true }}
         navigation
      >
        <SwiperSlide>
            <img src="https://smartcitymohaliplots.realtynivesh.com/img/banner1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
             <img src="https://smartcitymohaliplots.realtynivesh.com/img/banner2.jpg" alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}

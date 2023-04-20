import React, { useRef, useState } from "react";
import Header from "../components/Layout/Header";
import "../../src/shared/styled/TeamInfo.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../shared/styled/TeamInfo.css";

function TeamInfo() {
  return (
    <>
      <Header str="부서소개" />
      <div className="box0" style={{ height: "80vh" }}>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="TeamInfoLineFont">↑↓상하로 움직여 주세요</div>
            <div class="grid-container">
              <div class="item1">
                <div className="TeamInfo-line"></div>

              </div>
              <div class="item2">
                <div className="TeamInfo-line2"></div>

              </div>
              <div class="item3">
                <div className="TeamInfo-line2"></div>
               
              </div>
              <div class="item4">
                <div className="TeamInfo-line2"></div>

              </div>
              <div class="item5">
                <div className="TeamInfo-line2"></div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default TeamInfo;

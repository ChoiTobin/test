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
      <Header />
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
                <strong>대표</strong>
              </div>
              <div class="item2">
                <div className="TeamInfo-line2"></div>
                <strong>경영기획부</strong>
                <div>경영지원</div>
                <div>조달 관련 업무</div>
                <div>지원사업 관리</div>
                <div>R&D 과제 수행</div>
              </div>
              <div class="item3">
                <div className="TeamInfo-line2"></div>
                <strong>플랫폼사업부</strong>
                <div>Front-end Development</div>
                <div>Back-end Development</div>
                <div>Android application Development</div>
                <div>Software maintenance</div>
                <div>Software R&D and Development</div>
              </div>
              <div class="item4">
                <div className="TeamInfo-line2"></div>
                <strong>생산기술부</strong>
                <div>공장 관리</div>
                <div>제품 생산</div>
                <div>제품 수리</div>
                <div>현장업무</div>
              </div>
              <div class="item5">
                <div className="TeamInfo-line2"></div>
                <strong>홍보부</strong>
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

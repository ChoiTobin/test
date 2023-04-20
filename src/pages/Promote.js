import Header from "../components/Layout/Header";
import Project from "./video/Project.mp4";

import Project3 from "./video/Project3.mp4"
import Project4 from "./video/Project4.mp4"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";


// import required modules
import {Navigation } from "swiper";


function Promote() {
  return (
    <>
      <Header str="Project" />

      <div className="box0" style={{ height: "80vh" }}>
      <Swiper
        pagination={{

        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <video width='100%' height='85%' controls="controls">
              <source src={Project} type="video/mp4"/>
            </video>
            <div style={{color:"white",marginLeft:"30px"}}>
              HTML로만 만든 스타벅스 페이지 입니다. 
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <video width='100%' height='85%' controls="controls">
          <source src={Project3} type="video/mp4"/>
        </video>
        <div style={{color:"white",marginLeft:"30px"}}>
          React 프론트 백엔드 협업 프로젝트로 만든 게임친구 찾기 입니다.
          <br></br>
          담당기능:로그인,전체게시판 조회,상세페이지,전체 게시글 목록
          <div>
            더 자세한 정보 깃허브:
            <a style={{color:"gold"}} href="https://github.com/ChoiTobin/minimumProject">https://github.com/ChoiTobin/minimumProject</a>
          </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
        <video width='100%' height='85%' controls="controls">
          <source src={Project4} type="video/mp4"/>
        </video>
        <div style={{color:"white",marginLeft:"30px"}}>
           React & Redux 프론트 백엔드 협업 프로젝트로 만든 반려견 서비스 제공 중개 사이트입니다.
           <br></br>
          담당기능:웹소켓 채팅,카카오,네이버,일반 로그인 회원가입,아이디 중복체크,만족도 별점 체크 기능입니다.
          <div>
            더 자세한 정보 깃허브:
            <a style={{color:"gold"}} href="https://github.com/ChoiTobin/final-project">https://github.com/ChoiTobin/final-project</a>
          </div>
        </div>
        </SwiperSlide>

      </Swiper>









      </div>
    </>
  );
}

export default Promote;

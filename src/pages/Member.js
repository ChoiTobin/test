import React from 'react'
import Header from '../components/Layout/Header'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../src/shared/styled/Member.css";
//
import img1 from "../image/FACE.png";
function Member() {

    const backgroundImg = img1

return (
    <>
    <Header/>
    <div  style={{  height: "80vh" ,display:"flex"}} className="over">
    <Swiper slidesPerView={4} className="mySwiper">
        <SwiperSlide>
            <div className='Title-Member-box1'>
                <span className='Title-Member-box1-center'>대표</span>
            </div>
            <div className='Member-box1-center'>
                <div className='job-Card-flex'>
                    <div>
                        <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}></div>
                    </div>
                    <div>
                        <span className='name'>
                            최승환
                        </span>
                        <span className='name2'>
                            대표
                        </span>
                        <div className='name3'>
                                업무 총괄
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='Title-Member-box1'>
                <span className='Title-Member-box1-center'>경영기획부</span>
            </div>
            <div className='Member-box1-center'>
                <div className='job-Card-flex'>
                    <div>
                        <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}></div>
                    </div>
                    <div>
                        <span className='name'>
                            윤상원
                        </span>
                        <span className='name2'>
                            부장
                        </span>
                        <div className='name3'>
                            경영기획부 업무 총괄
                        </div>
                    </div>
                </div>
            </div>

        <div className='Member-container'>
            <div className='job-box-employee-container'>
                <div className='job-EM-box'>
                    <div>
                        <div  className='job-EM-border'>
                            <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                            </div>
                            <div className='name-center'>
                            <div className='EM-name'>김영희
                            </div>
                            <div className='EM-name2'>사원
                            </div>
                            </div>
                        </div>
                        <div className='EM-name3'>경영기획부 업무
                        </div>
                    </div>
                </div>
            </div>
            <div className='job-box-employee-container'></div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className='Title-Member-box1'>
            <span className='Title-Member-box1-center'>플랫폼사업부</span>
        </div>
        <div className='Member-box1-center'>
            <div className='job-Card-flex'>
                <div>
                    <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}></div>
                </div>
                <div>
                    <span className='name'>
                        임지현
                    </span>
                    <span className='name2'>
                        차장
                    </span>
                    <div className='name3'>
                            플랫폼사업부 업무 총괄
                    </div>
                </div>
            </div>
        </div>

        <div className='Member-container'>
            <div className='job-box-employee-container'>
                <div className='job-EM-box'>
                    <div>
                        <div  className='job-EM-border'>
                            <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                            </div>
                            <div className='name-center'>
                            <div className='EM-name'>최현욱
                            </div>
                            <div className='EM-name2'>대리
                            </div>
                            </div>
                        </div>
                        <div className='EM-name3'>소프트웨어 개발/유지관리
                        </div>
                    </div>
                </div>
            </div>
            <div className='job-box-employee-container'>
            <div className='job-EM-box'>
                <div>
                    <div  className='job-EM-border'>
                        <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                        </div>
                        <div className='name-center'>
                        <div className='EM-name'>최유진
                        </div>
                        <div className='EM-name2'>주임
                        </div>
                        </div>
                    </div>
                    <div className='EM-name3'>제품 디자인 콘텐츠 담당
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='Member-container'>
        <div className='job-box-employee-container'>
            <div className='job-EM-box'>
                <div>
                    <div  className='job-EM-border'>
                        <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                        </div>
                        <div className='name-center'>
                        <div className='EM-name'>신정우
                        </div>
                        <div className='EM-name2'>연구원
                        </div>
                        </div>
                    </div>
                    <div className='EM-name3'>소프트웨어 개발/유지관리
                    </div>
                </div>
            </div>
        </div>
    <div className='job-box-employee-container'>
        <div className='job-EM-box'>
            <div>
                <div  className='job-EM-border'>
                    <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                    </div>
                    <div className='name-center'>
                    <div className='EM-name'>최토빈
                    </div>
                    <div className='EM-name2'>인턴
                    </div>
                    </div>
                </div>
                <div className='EM-name3'>소프트웨어 개발/유지관리
                </div>
            </div>
        </div>
    </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className='Title-Member-box1'>
            <span className='Title-Member-box1-center'>생산기술부</span>
        </div>
        <div className='Member-box1-center'>
            <div className='job-Card-flex'>
                <div>
                    <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}></div>
                </div>
                <div>
                    <span className='name'>
                        최재식
                    </span>
                    <span className='name2'>
                        부장
                    </span>
                    <div className='name3'>
                            생산기술부 업무 총괄
                    </div>
                </div>
            </div>
        </div>
        <div className='Member-container'>
            <div className='job-box-employee-container'>
                <div className='job-EM-box'>
                    <div>
                        <div  className='job-EM-border'>
                            <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                            </div>
                            <div className='name-center'>
                            <div className='EM-name'>김영수
                            </div>
                            </div>
                        </div>
                        <div className='EM-name3'>생산기술부 업무 보조
                        </div>
                    </div>
                </div>
            </div>
            <div className='job-box-employee-container'></div>
        </div>
        
    </SwiperSlide>

    <SwiperSlide>
            <div className='Title-Member-box1'>
                <span className='Title-Member-box1-center'>홍보부</span>
            </div>
            <div className='Member-box1-center'>
                <div className='job-Card-flex'>
                    <div>
                        <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}></div>
                    </div>
                    <div>
                        <span className='name'>
                            김미자
                        </span>
                        <span className='name2'>
                            부장
                        </span>
                        <div className='name3'>
                                홍보담당
                        </div>
                    </div>
                </div>
            </div>
            <div className='Member-container'>
            <div className='job-box-employee-container'>
                <div className='job-EM-box'>
                    <div>
                        <div  className='job-EM-border'>
                            <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                            </div>
                            <div className='name-center'>
                            <div className='EM-name'>김동일
                            </div>
                            <div className='EM-name2'>차장
                            </div>
                            </div>
                        </div>
                        <div className='EM-name3'>홍보담당
                        </div>
                    </div>
                </div>
            </div>
        <div className='job-box-employee-container'>
            <div className='job-EM-box'>
                <div>
                    <div  className='job-EM-border'>
                        <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                        </div>
                        <div className='name-center'>
                        <div className='EM-name'>박정훈
                        </div>
                        <div className='EM-name2'>대리
                        </div>
                        </div>
                    </div>
                    <div className='EM-name3'>홍보담당
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='Member-container'>
        <div className='job-box-employee-container'>
            <div className='job-EM-box'>
                <div>
                    <div  className='job-EM-border'>
                        <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                        </div>
                        <div className='name-center'>
                        <div className='EM-name'>정찬희
                        </div>
                        <div className='EM-name2'>연구원
                        </div>
                        </div>
                    </div>
                    <div className='EM-name3'>홍보담당
                    </div>
                </div>
            </div>
        </div>
    <div className='job-box-employee-container'>

    </div>
    </div>
        </SwiperSlide>
    </Swiper>
    </div>
    </>

)
}

export default Member
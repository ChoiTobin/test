import React,{useState} from "react";
import Header from "../components/Layout/Header";
import "../../src/shared/styled/gallery.css"
import img1 from "../image/HOME.png";
import img2 from "../image/HOME2.png";
import img3 from "../image/HOME3.png";
import img4 from "../image/HOME4.png";
import img5 from "../image/HOME5.png";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Gallery(){

    let PhotoArr = [
        {img:img1},
        {img:img2},
        {img:img3},
        {img:img4},
        {img:img5},
    ]


    return(
        <>
        <div className='box0' style={{  height: "90vh"} }>
            <Swiper 
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}

                    spaceBetween={30}
                    //간격
                    slidesPerView={1}
                    //보여질 컨텐츠 수
                    navigation
                        // 화살표 유무
                    pagination={{ clickable: true }}
                                        
                        //페이지네이션 표시 유무
                    scrollbar={{ draggable: true }}
                        //드래그>
                        >

                {
                PhotoArr.map((item,i)=> (
                    <SwiperSlide style={{display:"flex"}}>

                    <div key={i} style={{backgroundImage:`url(${item.img})`,width:"100%",height:"100%",backgroundSize:"cover"}}>
                    </div>
                    </SwiperSlide>     
                    ))    
                   
            }

            </Swiper>
        </div>
        </>
    )
}

export default Gallery

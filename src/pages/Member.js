import React from 'react'
import Header from '../components/Layout/Header'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../src/shared/styled/Member.css";
import img1 from "../image/FACE.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./../shared/styled/modal.css"
import { useState } from 'react';
import Green from "../image/Green.png"
import necklace from"../image/necklace.png"
// components





function Member() {
let arr = [{
    name:"최승환",
    active:"대표",
    number:"010-1234-4567",
    action:"업무 총괄",
    id:0
},{
    name:"윤상원",
    active:"부장",
    number:"010-1234-4567",
    action:"경영기획부 업무 총괄",
    id:1
},{
    name:"임지현",
    active:"차장",
    number:"010-1234-4567",
    action:"플랫폼사업부 업무 총괄",
    id:2
},{
    name:"최재식",
    active:"부장",
    number:"010-1234-4567",
    action:"생산기술부 업무 총괄",
    id:3
},{
    name:"김미자",
    active:"부장",
    number:"010-1234-4567",
    action:"홍보담당",
    id:4
},{
    name:"최현욱",
    active:"대리",
    number:"010-1234-4567",
    action:"소프트웨어 개발/유지관리",
    id:5
},{
    name:"최유진",
    active:"주임",
    number:"010-1234-4567",
    action:"제품 디자인 콘텐츠 담당",
    id:6
},{
    name:"신정우",
    active:"연구원",
    number:"010-1234-4567",
    action:"소프트웨어 개발/유지관리",
    id:7
},{
    name:"최토빈",
    active:"인턴",
    number:"010-1234-4567",
    action:"소프트웨어 개발/유지관리",
    id:8
},{
    name:"김영수",
    active:"",
    number:"010-1234-4567",
    action:"생산기술부 업무 보조",
    id:9
},{
    name:"김미자",
    active:"부장",
    number:"010-1234-4567",
    action:"홍보담당",
    id:10
},{
    name:"김동일",
    active:"차장",
    number:"010-1234-4567",
    action:"홍보담당",
    id:11
},{
    name:"박정훈",
    active:"대리",
    number:"010-1234-4567",
    action:"홍보담당",
    id:12
},{
    name:"정찬희",
    active:"연구원",
    number:"010-1234-4567",
    action:"홍보 담당",
    id:13
},{
    name:"김영희",
    active:"사원",
    number:"010-1234-4567",
    action:"홍보 담당",
    id:14
}
]
const backgroundImg2=Green
const backgroundImg3= necklace
const backgroundImg = img1
const [open, setOpen] = React.useState(false);
const [number,setNumber] = useState(0)



const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height:400,
    bgcolor: "rgba( 255, 255, 255, 0.8 )",
    borderRadius:"10px",
    boxShadow: 2,
};





function handleOpen (e){
    setNumber(e)
    setOpen(true);
}

let name = arr[number].name
let active = arr[number].active
let action = arr[number].action

const handleClose = () => setOpen(false);

// 미니모달
const [open2, setOpen2] = React.useState(false);


return (
    <>
    <Header/>

    <Modal
    open={open2}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
    <Box  sx={style}>
    <div className='modal-neck' style={{backgroundImage:`url(${backgroundImg3})` ,backgroundSize: "cover" }}></div>
        <div className='modal-top-font3' onClick={()=>setOpen2(false)}> 이전</div>
        <div className='modal-top-line-dotted'>ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ </div>
        <div className='modal-container2'>
        {action}
        </div>
    </Box>
    </Modal>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box  sx={style} >
            
                <div className='modal-top-container'>
                    <div className='modal-top-font'>좌석위치보기</div>
                    <div className='modal-neck' style={{backgroundImage:`url(${backgroundImg3})` ,backgroundSize: "cover" }}></div>
                    <div className='modal-top-font2'  onClick={()=>setOpen(false)}>닫기</div>
                </div>
                <div className='modal-top-line'>
                <div className='modal-top-line-dotted'>ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ </div>
                </div>
                <div className='modal-container'>
                    <div className='modal-flex'>
                        <div className='modal-img' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}></div>    
                        <div className='modal-info'>
                        <div className='modal-name-flex'>
                            <div className='nameWeight'>{name}                        
                            </div>
                            <div className='nameWeight2'>
                            {active}
                            </div>
                        </div>
                            <div>
                                <span className='modal-span'>전화번호</span>
                                <span>010-****-****</span>
                            </div>
                            <div>
                                <span className='modal-span'>팩스번호</span>
                                <span>010-****-****</span>
                            </div>
                            <div>
                                <span className='modal-span'>담당업무</span>
                                <span className='modal-span2'>{action}</span>
                            </div>
                            <div className='modal-box-shadow' onClick={()=>setOpen2(true)}>담당업무 전체보기 ></div>
                        </div>
                    </div>
                    <div className='modal-footer-line'>
                        <div className='modal-footer-span'>재실</div>
                        <div className='modal-footer-span'>부재</div>
                    </div>    
                </div>
            </Box>
        </Modal>





    <div  style={{  height: "80vh" ,display:"flex"}} className="over">
    <div className='oneBoxSizing'>
        <div className='Title-Member-box0'>
            <span className='Title-Member-box1-center' >대표</span>
            </div>
        <div className='Member-box1-center' onClick={()=>handleOpen(0)} >
            <div className='job-Card-flex' name="최승환">
                <div>
                    <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}></div>
                </div>
                <div >
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
                <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green">
                </div>
            </div>
        </div>
    </div>
    <Swiper slidesPerView={3} className="mySwiper">

 

        <SwiperSlide>
            <div className='Title-Member-box1'>
                <span className='Title-Member-box1-center'>경영기획부</span>
            </div>
            <div className='Member-box1-center ' onClick={()=>handleOpen(1)}>
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
                        <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green">
                        </div>
                    </div>
                </div>
            </div>

        <div className='Member-container'>
            <div className='job-box-employee-container'>
                <div className='job-EM-box'>
                    <div className='green2-top'>
                        <div  className='job-EM-border'  onClick={()=>handleOpen(14)}>
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
                        <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green2">
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
        <div className='Member-box1-center'  onClick={()=>handleOpen(2)}>
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
                    <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green">
                    </div>
                </div>
            </div>
        </div>

        <div className='Member-container'>
            <div className='job-box-employee-container'>
                <div className='job-EM-box'>
                    <div className='green2-top'>
                        <div  className='job-EM-border'  onClick={()=>handleOpen(5)}>
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
                        <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green2">
                        </div>
                    </div>
                </div>
            </div>
            <div className='job-box-employee-container'>
            <div className='job-EM-box'>
                <div className='green2-top'>
                    <div  className='job-EM-border'  onClick={()=>handleOpen(6)}>
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
                    <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green2">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='Member-container'>
        <div className='job-box-employee-container'>
            <div className='job-EM-box'>
                <div className='green2-top' >
                    <div  className='job-EM-border'  onClick={()=>handleOpen(7)}>
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
                    <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green2">
                    </div>
                </div>
            </div>
        </div>
    <div className='job-box-employee-container'>
        <div className='job-EM-box'>
            <div className='green2-top'>
                <div  className='job-EM-border'  onClick={()=>handleOpen(8)}>
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
                <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green2">
                </div>
            </div>
        </div>
    </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className='Title-Member-box1' 
>
            <span className='Title-Member-box1-center'>생산기술부</span>
        </div>
        <div className='Member-box1-center'  onClick={()=>handleOpen(3)}>
            <div className='job-Card-flex'>
                <div >
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
                    <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green">
                    </div>
                </div>
            </div>
        </div>
        <div className='Member-container'>
            <div className='job-box-employee-container'>
                <div className='job-EM-box'>
                    <div className='green2-top'>
                        <div  className='job-EM-border'  onClick={()=>handleOpen(9)}>
                            <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                            </div>
                            <div className='name-center'>
                            <div className='EM-name'>김영수
                            </div>
                            </div>
                        </div>
                        <div className='EM-name3'>생산기술부 업무 보조
                        </div>
                        <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green2">
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
            <div className='Member-box1-center'  onClick={()=>handleOpen(10)}>
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
                        <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green">
                        </div>
                    </div>
                </div>
            </div>
            <div className='Member-container'>
            <div className='job-box-employee-container'>
                <div className='job-EM-box'>
                    <div className='green2-top'>
                        <div  className='job-EM-border' onClick={()=>handleOpen(11)}>
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
                        <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green2">
                        </div>
                    </div>
                </div>
            </div>
        <div className='job-box-employee-container'>
            <div className='job-EM-box'>
                <div  className='green2-top'>
                    <div  className='job-EM-border' onClick={()=>handleOpen(12)}>
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
                    <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green2">
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='Member-container'>
        <div className='job-box-employee-container'>
            <div className='job-EM-box'>
                <div  className='green2-top'>
                    <div  className='job-EM-border' onClick={()=>handleOpen(13)}>
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
                    <div style={{backgroundImage:`url(${backgroundImg2})` ,backgroundSize: "cover" }} className="green2">
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
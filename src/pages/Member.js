import React, { useEffect, useState,useRef } from "react";
import "./../shared/styled/modal.css";
// Swipe
import { Autoplay,Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar"
// css
import "../../src/shared/styled/Member.css";
// mui
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// img
import ReactImage from "../image/React.png";
import Green from "../image/Green.png";
import necklace from "../image/necklace.png";
import JsImage from"../image/JS.png"
import CssImage from "../image/CSS.png"
import HtmlImage from "../image/HTML.png"
import GitImage from"../image/Git.png"
import ReduxImage from"../image/Redux.png"
import StyledComponentImage from"../image/styledComponents.png"
import LightHouse from"../image/LightHouse.png"
import Vercel from"../image/Vercel.png"
// components
import MemberCard from "../components/MemberCard/MemberCard";
import Header from "../components/Layout/Header";
import ModalBox from "../shared/modal/ModalBox";



function Member() {  
  let data = 
    {
      section_fullcode: "NICC000-NICC001",
      section_pass: "12345",
      teams: [
      {
      team_cd: "T000010",
      team_nm: "대표",
      mate: [
      {
      st_no: 1945,
      usr_nm: "React",
      posit_nm: "대표언어",
      adi_info7: "웹소켓,CRUD 로그인 회원가입 가능",
      img:ReactImage
      }
      ]
      },
      
      {
        team_cd: "T000050",
        team_nm: "JavaScript libraries",
        mate: [
        {
        st_no: 1957,
  
        usr_nm: "Redux Toolkit",
        posit_nm: "libraries",
        adi_info7: "Thunk 활용 및 Http 전역상태 관리",
        img:ReduxImage
        },
        
        ]
        },
        {
          team_cd: "T000040",
          team_nm: "Development Tools",
          mate: [
          {
          st_no: 1948,
          usr_nm: "Git",
          posit_nm: "Development Tools ",
          adi_info7: "Git Flow 협업 가능",
          img:GitImage
          },{
            st_no: 1948,
            usr_nm: "Vercel",
            posit_nm: "Development Tools ",
            adi_info7: "배포 및 도메인 환경설정",
            img:Vercel
            },{
              st_no: 1948,
              usr_nm: "LightHouse",
              posit_nm: "Development Tools ",
              adi_info7: "성능 측정 및 성능 개선",
              img:LightHouse
              },
          ],
        },
      {
      team_cd: "T000020",
      team_nm: "JavaScript",
      
      mate: [
      {
      st_no: 1946,
      usr_nm: "JS",
      posit_nm: "JavaScript",
      adi_info7: "TodoList 제작 가능",
      img:JsImage
      },

      ]
      },
      
      
      {
      team_cd: "T000030",
      team_nm: "Markup and Stylesheet",
      mate: [
      {
      st_no: 1947,
      usr_nm: "HTML",
      posit_nm: "Markup and Stylesheet",
      adi_info7: "기본적인 웹프레임 설계 가능",
      img:HtmlImage

      },
      {
      st_no: 1949,
      usr_nm: "CSS",
      posit_nm: "Markup and Stylesheet",
      adi_info7: "반응형,flex,레이아웃 가능",
      img:CssImage  
    },
      {
      st_no: 1950,
      usr_nm: "CSS-in-JS",
      posit_nm: "Markup and Stylesheet",
      adi_info7: "기본적인 스타일링 가능",
      img:StyledComponentImage
      },

      ]
      },
     

      ]
      }
  
  const backgroundImg = ReactImage;
  const backgroundImg2 = Green;
  const backgroundImg3 = necklace;

  const [open, setOpen] = React.useState(false);
  const [ModalInfo, setModalInfo] = useState(null);

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 400,
    bgcolor: "rgba( 255, 255, 255, 0.8 )",
    borderRadius: "10px",
    boxShadow: 2,
  };

  let [MemberData,setMemberDate] = useState(null)
  // 어떤데이터가 들어올지 모를때는 null을사용

  

  useEffect(() => {
    setMemberDate(data["teams"])
  }, []);

  
  function handleOpen(e) {
    setModalInfo(e);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  // 미니모달
  const [open2, setOpen2] = React.useState(false);
  let numberState =MemberData?.length-2

const containerRef = useRef(null); // 드래그 할 영역 네모 박스 Ref


  return (
    <>
      <Header str="Click on the box

" />
      <div style={{ height: "80vh", display: "flex" }} className="over">
        <div className={numberState ==1 ? "twoBoxSizing" : "oneBoxSizing"}>
          <div className="Title-Member-box0">
            <span className="Title-Member-box1-center">Most Used Language</span>
          </div>
          <div
            className="Member-box1-center"
            onClick={() => handleOpen(MemberData?.[0].mate[0])}
          >
            <div className="job-Card-flex" name="React">
              <div>
                <div
                  className="img-hight-react"
                  style={{
                    backgroundImage: `url(${ReactImage})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div>
                <span className="skill-name">{
                  MemberData?.[0].mate[0].usr_nm
                }
                </span>


              </div>
              <div
                style={{
                  backgroundImage: `url(${backgroundImg2})`,
                  backgroundSize: "cover",
                }}
                className="green"
              ></div>
            </div>
          </div>
        </div>
        <ModalBox
          setModalInfo={setModalInfo}
          ModalInfo={ModalInfo}
          setOpen2={setOpen2}
          open2={open2}
          open={open}
          setOpen={setOpen}
        />
        <Swiper 
        slidesPerView={numberState}
        slideToClickedSlide={true}
        autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        }}
        modules={[Autoplay,Scrollbar]}
        scrollbar={{ draggable: true, dragSize: 24 }}
        className="mySwiper">
        {
          MemberData?.slice(1,MemberData.length).map((item,i)=>(
            <>
            <SwiperSlide key={i} className="container" ref={containerRef} >
              <MemberCard Team2={MemberData?.[i+1]} />
            </SwiperSlide>
          </>
          ))
        }
        </Swiper>
      </div>
    </>
  );
}

export default Member;

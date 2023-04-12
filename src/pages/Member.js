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
import img1 from "../image/FACE.png";
import Green from "../image/Green.png";
import necklace from "../image/necklace.png";
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
      adi_info7: "다루는정도",
    
      }
      ]
      },
      {
      team_cd: "T000020",
      team_nm: "경영기획부",
      mate: [
      {
      st_no: 1946,
      usr_nm: "JS",
      posit_nm: "사용언어",
      adi_info7: "다루는정도",
      },
      {
      st_no: 1953,
      usr_nm: "TypeScript",
      posit_nm: "사용언어",
      adi_info7: "다루는 정도",
      }
      ]
      },
      {
      team_cd: "T000030",
      team_nm: "플랫폼사업부",
      mate: [
      {
      st_no: 1947,
      usr_nm: "HTML",
      posit_nm: "차장",
      adi_info7: "플랫폼사업부 업무 총괄",

      },
      {
      st_no: 1949,
      usr_nm: "CSS",
      posit_nm: "대리",
      adi_info7: "••소프트웨어 개발\r\n•한눈에조직도 유지관리 및 신규기능 개발",
      },
      {
      st_no: 1950,
      usr_nm: "StyleComponents",
      posit_nm: "주임",
      adi_info7: "각종 디자인 콘텐츠 담당\r\n영상콘텐츠 제작",

      },
      {
      st_no: 1951,
      usr_nm: "???",
      posit_nm: "???",
      adi_info7: "???",
      }
      ]
      },
      {
      team_cd: "T000040",
      team_nm: "생산기술부",
      mate: [
      {
      st_no: 1948,
      usr_nm: "git",
      posit_nm: "??",
      adi_info7: "??",
      },
      {
      st_no: 1954,
      usr_nm: "zira",
      posit_nm: "",
      adi_info7: "??",
      }
      ]
      },
      {
      team_cd: "T000050",
      team_nm: "홍보부",
      mate: [
      {
      st_no: 1957,

      usr_nm: "redux",
      posit_nm: "부장",
      adi_info7: "홍보담당",
      },
      {
      st_no: 1958,
      usr_nm: "Next",
      posit_nm: "",
      adi_info7: "",
      },
      {
      st_no: 1959,
      usr_nm: "webpack",
      posit_nm: "",
      adi_info7: "",
      },
      {
      st_no: 1960,
      usr_nm: "",
      posit_nm: "",
      adi_info7: "",
      }
      ]
      }
      ]
      }
  
  const backgroundImg = img1;
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
  let arrTeam =[]
  

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
      <Header str="기술언어" />
      <div style={{ height: "80vh", display: "flex" }} className="over">
        <div className={numberState ==1 ? "twoBoxSizing" : "oneBoxSizing"}>
          <div className="Title-Member-box0">
            <span className="Title-Member-box1-center">대표</span>
          </div>
          <div
            className="Member-box1-center"
            onClick={() => handleOpen(MemberData?.[0].mate[0])}
          >
            <div className="job-Card-flex" name="최승환">
              <div>
                <div
                  className="img-hight2"
                  style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div>
                <span className="name">{
                  MemberData?.[0].mate[0].usr_nm
                }
                </span>
                <span className="name2">{MemberData?.[0].mate[0].posit_nm}</span>
                <div className="name3">{MemberData?.[0].mate[0].adi_info7}</div>
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

//유동적인 변화는 됬는데 
//유동적으로 변화했을때 css를 또 잡아줘야한다.
//sliderperView가 
//slidesPerView가 1이면 이클래스네임 2면 저 클래스네임 state를 props로 내려준다 2일때 내려주면 그 스타일을 적용하기 

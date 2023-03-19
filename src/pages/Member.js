import React, { useState } from "react";
import "./../shared/styled/modal.css";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
  let arr0 = [
    {
      name: "최승환",
      active: "대표",
      number: "010-1234-4567",
      action: "업무 총괄",
      id: 1,
      Team: "대표",
    },
  ];
  let arr1 = [
    {
      name: "윤상원",
      active: "부장",
      number: "010-1234-4567",
      action: "경영기획부 업무 총괄",
      id: 1,
      Team: "경영기획부",
    },
    {
      name: "김영희",
      active: "사원",
      number: "010-1234-4567",
      action: "홍보 담당",
      id: 2,
    },
  ];
  let arr2 = [
    {
      name: "임지현",
      active: "차장",
      number: "010-1234-4567",
      action: "플랫폼사업부 업무 총괄",
      id: 1,
      Team: "플랫폼사업부",
    },
    {
      name: "최현욱",
      active: "대리",
      number: "010-1234-4567",
      action: "소프트웨어 개발/유지관리",
      id: 2,
    },
    {
      name: "최유진",
      active: "주임",
      number: "010-1234-4567",
      action: "제품 디자인 콘텐츠 담당",
      id: 3,
    },
    {
      name: "신정우",
      active: "연구원",
      number: "010-1234-4567",
      action: "소프트웨어 개발/유지관리",
      id: 4,
    },
    {
      name: "최토빈",
      active: "인턴",
      number: "010-1234-4567",
      action: "소프트웨어 개발/유지관리",
      id: 5,
    },
  ];
  let arr3 = [
    {
      name: "최재식",
      active: "부장",
      number: "010-1234-4567",
      action: "생산기술부 업무 총괄",
      id: 1,
      Team: "생산기술부",
    },
    {
      name: "김영수",
      active: "",
      number: "010-1234-4567",
      action: "생산기술부 업무 보조",
      id: 2,
    },
  ];
  let arr4 = [
    {
      name: "김미자",
      active: "부장",
      number: "010-1234-4567",
      action: "홍보담당",
      id: 1,
      Team: "홍보부",
    },
    {
      name: "김동일",
      active: "차장",
      number: "010-1234-4567",
      action: "홍보담당",
      id: 2,
    },
    {
      name: "박정훈",
      active: "대리",
      number: "010-1234-4567",
      action: "홍보담당",
      id: 3,
    },
    {
      name: "정찬희",
      active: "연구원",
      number: "010-1234-4567",
      action: "홍보 담당",
      id: 4,
    },
  ];

  const backgroundImg = img1;
  const backgroundImg2 = Green;
  const backgroundImg3 = necklace;

  const [open, setOpen] = React.useState(false);
  const [ModalInfo, setModalInfo] = useState([]);

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

  function handleOpen(e) {
    setModalInfo(e);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  // 미니모달
  const [open2, setOpen2] = React.useState(false);

  return (
    <>
      <Header str="차세대ICT융합센터" />

      <div style={{ height: "80vh", display: "flex" }} className="over">
        <div className="oneBoxSizing">
          <div className="Title-Member-box0">
            <span className="Title-Member-box1-center">대표</span>
          </div>
          <div
            className="Member-box1-center"
            onClick={() => handleOpen(arr0[0])}
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
                <span className="name">최승환</span>
                <span className="name2">대표</span>
                <div className="name3">업무 총괄</div>
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

        <Swiper slidesPerView={3} className="mySwiper">
          <SwiperSlide>
            <MemberCard Team={arr1} />
          </SwiperSlide>
          <SwiperSlide>
            <MemberCard Team={arr2} />
          </SwiperSlide>
          <SwiperSlide>
            <MemberCard Team={arr3} />
          </SwiperSlide>
          <SwiperSlide>
            <MemberCard Team={arr4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Member;

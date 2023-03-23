import React, { useEffect, useState } from "react";
import "./../shared/styled/modal.css";
// Swipe
import { Autoplay } from "swiper";
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
    fetch(process.env.REACT_APP_URL)
    .then((response) => response.json())
    .then((data) => {
      setMemberDate(data["teams"])    
    });
  }, []);

  
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
        slidesPerView={MemberData.length-2} 
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper">
          
        {
          MemberData?.slice(1,MemberData.length).map((item,i)=>(
            <SwiperSlide key={i}>
            <MemberCard  Team2={MemberData?.[i+1]} />
          </SwiperSlide>
            ))
            //첫번쨰부터 MemberData에 length까지만 배열을 자르면 4개가 나온다. 
            //그다음 여전히 MemberData는 5개기 때문에 i +1 을하면 위에 때문에 원래 있던 5개가 아닌 
            //4개가 나오기 떄문에 1~4가나온다.
        }
          </Swiper>
      </div>
    </>
  );
}

export default Member;
// 유동적인 변화는 됬는데 
//유동적으로 변화했을때 css를 또 잡아줘야한다.
      
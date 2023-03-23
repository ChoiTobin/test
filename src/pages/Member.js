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


  let numberState = MemberData?.length-1

  // 클래스네임 을 바꿔주자. 1번일떄 화면에서 클래스 다른걸로 하고 
  //greentop{1}이렇게 변수로 넣어주기
  //처음에는 1번 2번 3번 4번 5번 6번 Memberdata.length-1을 지금은 쓰지말고 1번일떄 
  //css 클래스명{1이렇게 해서} 넣어주기 그다음 변수에 담아서 -1쓰기.

  // 어디어디 클래스 줘야하는지랑 클래스명 이름

  //ex) 변수선언해서 memberData.length-1을 하나 두고 
  //




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
        slidesPerView={3}
        //MemberData.length-1 를 위에 넣으면된다.
        // 몇개를 보여줄까? lenfth -1 
        autoplay={{
        delay: 8000,
        disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper">
          
        {
          MemberData?.slice(1,MemberData.length).map((item,i)=>(
            <>
            <SwiperSlide key={i}>
              <MemberCard  Team2={MemberData?.[i+1]} />
            </SwiperSlide>
          </>
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

//유동적인 변화는 됬는데 
//유동적으로 변화했을때 css를 또 잡아줘야한다.
//sliderperView가 
//slidesPerView가 1이면 이클래스네임 2면 저 클래스네임 state를 props로 내려준다 2일때 내려주면 그 스타일을 적용하기 

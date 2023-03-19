import React, { useState } from "react";
import "../LocateCard/LocateOne.css";
import img1 from "../../image/HOME.png";
import img2 from "../../image/HOME2.png";
import img3 from "../../image/HOME3.png";
import img4 from "../../image/HOME4.png";
import img5 from "../../image/HOME5.png";
import ImageSlider from "./ImageSlider";

function LocateTwo() {
  let arrDate = [
    {
     name:"종합안내",
     img:img2,
     id:0   
    },
    {
      name: "1층",
      img: img1,
      id: 1,
    },
    {
      name: "2층",
      img: img2,
      id: 2,
    },
    {
      name: "3층",
      img: img3,
      id: 3,
    },
    {
      name: "4층",
      img: img2,
      id: 4,
    },
    {
      name: "5층",
      img: img5,
      id: 5,
    },
  ];

  const containerStyles = {
    width: "53vw",
    height: "500px",
    margin: "0 auto",
  };
  let [DotChange, setDotChange] = useState(0);
  const goToSlide = (slideIndex) => {
    setDotChange(slideIndex);
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    color: "white",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  return (
    <>
      <div className="Locate-main">
        <div className="Locate-box-left">
          <div className="Locate-box-left-baby">
            <div className="LocateOne-border">
              <span className="LocateOne-border-baby">별관 </span>
              <span className="LocateOne-border-baby2">층별안내</span>
            </div>

            {arrDate.map((item, i) => (
              <div  onClick={() => goToSlide(item.id)} key={i} className="LocateOne-min-border">
                <span  style={DotChange == item.id ? {color:"gold"}:{color:"white"}}  >{item.name}</span>
                <div>
                  <div style={dotsContainerStyles}>
                    <div style={dotStyles}>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Locate-box-right">
          <div className="Locate-box-right-baby">
            <div>
              <div style={containerStyles}>
                <ImageSlider
                  DotChange={DotChange}
                  setDotChange={setDotChange}
                  slideIndex
                  slides={arrDate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocateTwo;

import React, { useState } from "react";
import "../LocateCard/LocateOne.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../image/HOME.png";
import img2 from "../../image/HOME2.png";
import img3 from "../../image/HOME3.png";
import img4 from "../../image/HOME4.png";
import img5 from "../../image/HOME5.png";
import ImageSlider from "./ImageSlider";

function LocateOne() {
  let arrDate = [
    {
      name: "1층",
      img: img1,
      id: 0,
    },
    {
      name: "2층",
      img: img2,
      id: 1,
    },
    {
      name: "3층",
      img: img3,
      id: 2,
    },
    {
      name: "4층",
      img: img4,
      id: 3,
    },
    {
      name: "2층 2",
      img: img5,
      id: 4,
    },
    {
      name: "2층 1",
      img: img1,
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
              <span className="LocateOne-border-baby">본관 </span>
              <span className="LocateOne-border-baby2">층별안내</span>
            </div>
            <div className="LocateOne-min-border">
              <span>종합안내</span>
              <span> ></span>
            </div>
            {arrDate.map((item, i) => (
              <div key={i} className="LocateOne-min-border">
                <span>{item.name}</span>
                <div style={dotsContainerStyles}>
                  <div style={dotStyles} onClick={() => goToSlide(item.id)}>
                    0
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

export default LocateOne;

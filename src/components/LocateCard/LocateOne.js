import React, { useState } from "react";
import "../LocateCard/LocateOne.css";
import HTML from "../../image/StarbucksHTML.png";
import HTML2 from "../../image/StarbucksHTML2.png";
import JavaScript from "../../image/JavaScript.png";
import HangHae from "../../image/HangHae.png";
import HangHae2 from "../../image/HangHae2.png";
import ImageSlider from "./ImageSlider";

function LocateOne() {
  let arrDate = [
    {
        name:"HTML Project ",
        img:HTML,
        id:0   
       },
    {
      name: "HTML Project Footer",
      img:HTML2,
      id: 1,
    },
    {
      name: "JavaScript TodoList",
      img: JavaScript,
      id: 2,
    },
    {
      name: "Bootcamp",
      img: HangHae,
      id: 3,
    },
    {
      name: "Growth Award",
      img: HangHae2,
      id: 4,
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
              <span className="LocateOne-border-baby">Achievements </span>
              <span className="LocateOne-border-baby2"></span>
            </div>
            {arrDate.map((item, i) => (
              <div onClick={() => goToSlide(item.id)} key={i} className="LocateOne-min-border">
                <span style={DotChange == item.id ? {color:"gold"}:{color:"white"}}>{item.name}</span>
                <div style={dotsContainerStyles}>
                  <div style={dotStyles} >
                    
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

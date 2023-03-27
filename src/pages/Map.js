import React, { useState, useRef } from "react";
import "../shared/styled/Map.css";
import img1 from "../image/HOME.png";
import img2 from "../image/HOME2.png";
import img3 from "../image/HOME3.png";
import img4 from "../image/HOME4.png";
import img5 from "../image/HOME5.png";

function Map() {
  let PhotoArr = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
  ];


  // 슬라이더 효과
  //클릭했을때-땠을떄-움직일때 -마우스이벤트 스크롤 이벤트.
  //width에 종료 scrollwidth > offsetwidth > clientwidth 크기순서

let onMouseDown = () => {
  console.log("mouseDown")
}

let onMouseUp = () => {
  console.log("mouseup")
}

let onMouseMove = () => {
  console.log("mousemove")
}

const DomRef = useRef()


let {scrollLeft} = DomRef.current || {};

console.log(scrollLeft)


  return (
    <>
      <div

        className="box0-map"
        style={{ height: "90vh" }}>
          {PhotoArr.map((item, i) => (
              <div
              ref={DomRef}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
                key={i}
                className="slide-image"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                }}
              ></div>
          ))}
      </div>
    </>
  );
}

export default Map;



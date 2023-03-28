import React, { useState, useRef,useEffect } from "react";
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

  // 요구사항  클릭한곳에서 클릭한상태에서 이동한거리 - 전체요소
  // 드래그를 캐치해서 translate값 100%씩 주기.
  
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();


let onDragStart = (e) => {
  e.preventDefault();
  setIsDrag(true);
  setStartX(e.pageX + scrollRef.current.scrollLeft);
  // e.pageX는 화면상에서 왼쪽 상단 기준으로 마우스 위치의 X축 좌표
 
}

let onDragEnd = () => {
  setIsDrag(false);

}
let onDragMove  = (e) => {
  if (isDrag) {
    scrollRef.current.scrollLeft = startX - e.pageX;
    console.log(scrollRef.current.scrollLeft)
  }
}

  return (
    <>
      <div
        className="box0-map"
        style={{ height: "90vh" }}
        >
          <div className="box1-map"
          ref={scrollRef}
          >
                {PhotoArr.map((item, i) => (
                <div
                    onMouseDown={onDragStart}
                    onMouseUp={onDragEnd}
                    onMouseLeave={onDragEnd}
                    onMouseMove={onDragMove}
                    key={i}
                    className="slide-image"
                    style={{
                    transform:`translateX(-0%)`,
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    }}>
                </div>
                ))}
          </div>
      </div>
    </>
  );
}

export default Map;



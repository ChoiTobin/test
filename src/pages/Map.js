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

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    //e.pageX는 마우스 이벤트가 발생한 위치를 나타내는 값이고, offsetLeft는 요소의 왼쪽 경계선이 부모 요소의 왼쪽 경계선으로부터 얼마나 떨어져 있는지를 나타내는 값입니다.
    //, 이 둘의 차이는 요소 내에서의 마우스 포인터 위치에서 요소의 왼쪽 경계선까지의 거리가 됩니다.
    //setStartX() 함수의 매개변수로 전달되는 값은 요소 내에서의 마우스 포인터 위치에서 요소의 왼쪽 경계선까지의 거리를 나타냅니다.
    /*
    이 코드는 마우스 클릭 이벤트가 발생했을 때 실행되는 함수입니다. 이 함수는 슬라이더 컴포넌트를 드래그하여 스크롤하는 동작을 처리합니다.
    먼저 setIsDragging(true) 함수를 호출하여, 마우스 클릭 이벤트가 발생하면 슬라이더를 드래그하는 동안에만 mousemove 이벤트를 처리하기 위해 isDragging 상태값을 true로 업데이트합니다.
    그 다음으로, setStartX(e.pageX - sliderRef.current.offsetLeft) 함수를 호출하여, 마우스 포인터의 X 좌표와 슬라이더 컴포넌트의 왼쪽 경계선 위치를 이용하여, 마우스 클릭 이벤트가 발생한 위치를 기준으로 슬라이더 내에서의 상대적인 위치를 계산합니다. 이렇게 계산된 상대적인 위치값은 나중에 mousemove 이벤트가 발생했을 때, 슬라이더의 현재 위치에 상대적인 위치를 더한 값으로 스크롤바를 이동시키는 데 사용됩니다.
    그 다음으로, setScrollLeft(sliderRef.current.scrollLeft) 함수를 호출하여, 슬라이더 컴포넌트의 scrollLeft 속성 값을 상태(state)로 업데이트합니다. scrollLeft 속성 값은 슬라이더 컴포넌트가 가로로 스크롤 가능한 경우, 스크롤바의 현재 위치를 나타내는 값입니다. 이 값은 나중에 mousemove 이벤트가 발생했을 때, 이전 스크롤바 위치와 현재 스크롤바 위치 사이의 차이를 계산하는 데 사용됩니다.
    마지막으로, console.log(sliderRef.current.offsetLeft) 함수를 호출하여, 슬라이더 컴포넌트의 왼쪽 경계선 위치를 콘솔에 출력합니다. 이 값은 마우스 클릭 이벤트가 발생한 위치와의 차이를 계산하는 데 사용됩니다.
    */
    setScrollLeft(sliderRef.current.scrollLeft);
    
    console.log(sliderRef.current.offsetLeft)
};

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // 조절 가능한 수치
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div
        className="box0-map"
        style={{ height: "90vh" }}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {PhotoArr.map((item, i) => (
          <div
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

/*
Map() 함수 선언
이미지 주소 배열 PhotoArr 초기화
Map() 내부에서 useState를 이용해 변수 선언
isDragging : 마우스가 눌러져 있는 동안 드래그가 발생하고 있는지 여부를 저장하기 위한 변수
startX : 마우스가 눌려진 x좌표값을 저장하기 위한 변수
scrollLeft : 스크롤 위치를 저장하기 위한 변수
sliderRef : useRef()를 이용해 DOM 요소를 저장하기 위한 변수
handleMouseDown() 함수 선언
마우스를 누르면 발생하는 이벤트를 처리하기 위한 함수
setIsDragging() 함수를 호출하여 isDragging 상태를 true로 설정
setStartX() 함수를 호출하여 startX 변수에 마우스가 눌려진 x좌표값을 저장
setScrollLeft() 함수를 호출하여 scrollLeft 변수에 현재 스크롤 위치를 저장
handleMouseMove() 함수 선언
마우스를 움직이면 발생하는 이벤트를 처리하기 위한 함수
isDragging이 true일 경우에만 실행되며, e.pageX - sliderRef.current.offsetLeft를 통해 현재 마우스 위치와 슬라이더 위치의 차이를 구하고 walk 변수에 저장
sliderRef.current.scrollLeft를 통해 스크롤 위치를 설정하고, walk 값만큼 빼서 슬라이더가 이동하도록 함
handleMouseUp() 함수 선언
마우스 클릭을 뗄 때 발생하는 이벤트를 처리하기 위한 함수
setIsDragging() 함수를 호출하여 isDragging 상태를 false로 설정
JSX 내부에서 div.box0-map 요소를 생성하고, ref={sliderRef}를 이용해 sliderRef 변수에 해당 DOM 요소를 할당
box0-map 내부에서 PhotoArr.map()을 이용해 이미지 요소를 생성하고, 각 이미지에 대한 정보는 PhotoArr에 저장되어 있는 이미지 주소를 이용해 배경 이미지로 설정함
onMouseDown, onMouseMove, onMouseUp 이벤트 핸들러를 각각 handleMouseDown(), handleMouseMove(), handleMouseUp() 함수로 설정하여 드래그 이벤트를 처리함
*/


/*
이 코드는 Map 컴포넌트를 정의합니다. 컴포넌트 내부에서는 상태값, 이벤트 핸들러 함수, 그리고 useRef를 사용해 DOM 요소를 참조하는 코드가 포함되어 있습니다.

우선, let PhotoArr = [ ... ] 부분에서 이미지 파일들을 배열로 생성합니다.

컴포넌트 내부에서는 useState 함수를 사용해 세 가지 상태값을 생성합니다: isDragging, startX, scrollLeft. isDragging 상태값은 마우스 버튼을 눌러서 드래그 중인지 아닌지 여부를 나타내고, startX는 드래그를 시작할 때의 x좌표, scrollLeft는 스크롤바의 현재 위치를 저장합니다.

그 다음, useRef 함수를 사용해 sliderRef를 생성합니다. 이 변수는 div 요소를 참조하게 됩니다.

handleMouseDown 함수는 마우스 버튼을 눌렀을 때 실행됩니다. 이 함수는 드래그 시작을 알리는 isDragging 상태값을 true로 바꾸고, 드래그 시작 지점의 x좌표를 startX 상태값에 저장하며, 스크롤바의 현재 위치를 scrollLeft 상태값에 저장합니다.

handleMouseMove 함수는 마우스를 움직일 때 실행됩니다. 이 함수는 마우스 위치에 따라 스크롤바를 이동시킵니다. 드래그 중인 상태에서만 실행되며, 마우스 위치를 계산하여 sliderRef.current.scrollLeft 값을 변경합니다.

handleMouseUp 함수는 마우스 버튼을 뗄 때 실행됩니다. 이 함수는 isDragging 상태값을 false로 바꿉니다.

마지막으로, 리턴문에서는 div 요소를 생성하고, sliderRef로 이 요소를 참조합니다. 이 div 요소에는 이미지 요소들이 포함되며, 이미지 요소들은 PhotoArr 배열에 있는 이미지 파일들로 생성됩니다. onMouseDown, onMouseMove, onMouseUp 이벤트 핸들러 함수들이 각각 해당 div 요소에서 발생하는 마우스 이벤트를 처리하도록 할당됩니다.

이렇게 작성된 코드는 마우스 드래그로 스크롤바를 이동시키는 동작을 구현합니다. 스크롤바를 움직일 때마다 sliderRef.current.scrollLeft 값을 변경하여 스크롤바를 이동시키고, 드래그 중인지 아닌지 여부를 isDragging 상태값으로 판단하여 드래그 동작을 구현합니다.
*/
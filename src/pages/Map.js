import React, { useState, useRef,useEffect } from "react";
import styled from 'styled-components';
import Header from '../components/Layout/Header'
import MapCard from "../components/MapCard/MapCard";
import MemberCard from "../components/MemberCard/MemberCard";

function Map() {
  let [MemberData,setMemberDate] = useState(null)
  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
    .then((response) => response.json())
    .then((data) => {
      setMemberDate(data["teams"])

    });
  }, []);
  let arr = [
    { name: "인사과",
    id:0,
    member:[{
      name:"토빈",
      name:"토빈2",
      name:"토빈3",
      name:"토빈4"
    }] },
    { name: "행정과",id:1 },
    { name: "축산과",id:2 },
    { name: "건축과",id:3 },
    { name: "생활과",id:4 },
  ];

  // console.log(arr[0]["member"][0])

  // 요구사항  클릭한곳에서 클릭한상태에서 이동한거리 - 전체요소
  // 드래그를 캐치해서 translate값 100%씩 주기.
  
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  let [compareNumber,setCompareNumber] = useState(0)
  let [compareNumber2,setCompareNumber2] = useState(0)
  const [number,setNumber] = useState(0);
  // 클릭했을때 좌표값 땟을때 좌표값 가져와서 비교
let onDragStart = (e) => {
  e.preventDefault();
    setCompareNumber(e.screenX)
    setIsDrag(true);
  // setStartX(e.pageX+scrollRef.current.scrollLeft);
  // e.pageX는 화면상에서 왼쪽 상단 기준으로 마우스 위치의 X축 좌표
}
let onDragEnd = (e) => {
  setIsDrag(false);
  if(-500<= number < +500 )
    if (isDrag ) {
    setCompareNumber2(e.screenX)
      if(compareNumber <= compareNumber2 ){
        setNumber(number+100)
      }else if(compareNumber > compareNumber2){
        setNumber(number-100)
      }
    }
  }
let onDragMove  = (e) => {
  //   scrollRef.current.scrollLeft = startX - e.pageX;
  // }
}


function arrName (i,item) {
  setNumber(`-${i}00`)
}
console.log(MemberData)

  return (
    <>
    
    <Header/>
      <Container>
        <SideMap>
            <MiniContainer/>
              <MiniContainer2>
                <MiniContainerBox>
              {
                arr.map((item,i)=>(
                  <MiniContainerBoxCollect 
                    onClick={()=>{arrName(i,item)}}>
                    {item.name}
                  </MiniContainerBoxCollect>
                ))
              }
                </MiniContainerBox>
            </MiniContainer2>
        </SideMap>
        <MapContainer ref={scrollRef}>
              {MemberData?.slice(1,MemberData.length).map((item, i) => (
                <MapSlider
                    onMouseDown={onDragStart}
                    onMouseUp={onDragEnd}
                    onMouseLeave={onDragEnd}
                    onMouseMove={onDragMove}
                    key={i}
                    style={{
                    transform:`translateX(${number}%)`,
                    }}
                    >
                    <Test0>
                      <Test1>{item.team_nm}</Test1>
                      <Test2>{item.mate[0].usr_nm}</Test2>
                      <MapCard item={item.mate}/>
                    </Test0>
                </MapSlider>
                ))}
        </MapContainer>
      </Container>
    </>
  );
}
  const Container = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  height: 80vh;
  width:100%;
  display:flex;
  `

  const SideMap = styled.div`
  width: 30%;
  height: 100%;

  `

  const MiniContainer = styled.div`
  width: 100%;
  height: 50%;
  `
const MiniContainer2 = styled.div`
  width: 100%;
  height: 50%;
  overflow-y: hidden;
  overflow-x: hidden;
  `
const MiniContainerBox = styled.div`
  color:orange;
  width: 50%;
  height: 50%;
  background-color: rgb(24, 63, 105);
  margin: 0 auto;
  margin-top: 30%;
  `
const MiniContainerBoxCollect = styled.div`
  padding:10px;
  `
const MapContainer = styled.div`
  width: 80%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  `
const MapSlider = styled.div`
  display: inline-block;
  width: 30%;
  transition: all 1s;
  `
  const Test0 = styled.div`
  display:flex;
  flex-wrap:wrap;
  height:100%;
  `
  const Test1 = styled.div`
  width: 100%;
  
  `
  const Test2 = styled.div`
  width: 100%;
  background-Color:yellow;

  `
  const Test3 = styled.div`
  background-color: #f1f1f1;
  width: 140px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
  `






export default Map;
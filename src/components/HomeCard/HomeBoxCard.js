import React,{useState} from "react";
import "../../shared/styled/home.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import RoomIcon from "@mui/icons-material/Room";
import MicIcon from "@mui/icons-material/Mic";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useNavigate } from "react-router-dom";

function HomeBoxCard() {
  const navigate = useNavigate();
  
  let [selectPointer,setSelectPointer] = useState({
    box8:true,
    box9:true,
    box10:true,
    box11:true,
    box12:true,
  })




  return (
    <>
      <div className="box4">
        <div className="box6">
          <div className={selectPointer["box8"] ==true ? 'box8' : 'box8Change'}
          // 클래스 네임을 바꿔주고 box8이 뭐가아니면 
          // 그리고 navigate에 시간 걸어서 초를 좀 줘서 바뀌게하기
          onClick={() => {
            setSelectPointer({...selectPointer,box8:false});
            setTimeout(function  () {
              navigate("/TeamInfo")
            },400);
          
          }}
            >
            <div className="box8-1">
              <div>
                <h2>경력소개</h2>
              </div>
              <div  style={{ display: "flex", fontSize: "12px" }}>
                <div className="box8-font">
                <div style={{fontSize:"17px"}}>Introduce career</div>
                Presenting one's work experience and qualifications.
                </div>
                <div className="box8-relative" >
                  <BusinessCenterIcon
                  className="box8-son"
                    sx={{
                      color: "gold",
                      marginLeft: "20px",
                      marginTop: "40px",
                      width: "100px",
                      height: "60px",
                    }}
                  
                  ></BusinessCenterIcon>
                </div>
              </div>
            </div>
          </div>
          <div
          className={selectPointer["box9"] ==true ? 'box9' : 'box9Change'}
          onClick={() => {
            setSelectPointer({...selectPointer,box9:false});
            setTimeout(function  () {
              navigate("/Member")
            },400);
            
            }}>
            <div className="box9-1">
              <div>
                <h2>사용 언어</h2>
              </div>
              <div  style={{ display: "flex", fontSize: "12px" }}>
                <div className="box9-font">
                Possible languages to use.
                  <br /> 
                </div>
                <div className="box8-relative">
                  <KeyboardIcon
                  className="box9-son"
                    sx={{
                      color: "gold",
                      marginLeft: "110px",
                      marginTop: "40px",
                      width: "100px",
                      height: "60px",
                    }}
                  ></KeyboardIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box5">
        <div className="box7">
          <div
          className={selectPointer["box10"] ==true ? 'box10' : 'box10Change'}
          onClick={() => {
            setSelectPointer({...selectPointer,box10:false});
            setTimeout(function  () {
              navigate("/Gallery")
            },400)
          }}
            style={{
              display: "flex",
              color: "white",
              textAlign: "left",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            <div className="box10-son">
              <PhotoSizeSelectActualIcon
                sx={{
                  color: "gold",
                  marginLeft: "20px",
                  marginRight: "10px",
                  height: "100px",
                  width: "40px",
                }}
              ></PhotoSizeSelectActualIcon>
            </div>
            <div>
              <div>포토갤러리</div>
              <div>Photo Gallery</div>
            </div>
          </div>
          <div
          className={selectPointer["box11"] ==true ? 'box11' : 'box11Change'}
          onClick={() => {
            setSelectPointer({...selectPointer,box11:false});
            setTimeout(function  () {
              navigate("/Locate")
            },400)
          }}
            style={{
              display: "flex",
              color: "white",
              textAlign: "left",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            <div className="box10-son">
              <RoomIcon
              
                sx={{
                  color: "gold",
                  marginLeft: "20px",
                  marginRight: "10px",
                  height: "100px",
                  width: "40px",
                }}
              ></RoomIcon>
            </div>
            <div>
              <div>청사안내</div>
              <div>Hall Infomation</div>
            </div>
          </div>
          <div

            className={selectPointer["box12"] ==true ? 'box12' : 'box12Change'}
          onClick={() => {
            setSelectPointer({...selectPointer,box12:false});
            setTimeout(function  () {
              navigate("/Notice")
            },350)}}
            style={{
              display: "flex",
              color: "white",
              textAlign: "left",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            <div className="box10-son">
              <MicIcon
                sx={{
                  color: "gold",
                  marginLeft: "20px",
                  marginRight: "10px",
                  height: "100px",
                  width: "40px",
                }}
              ></MicIcon>
            </div>
            <div>
              <div>공지사항</div>
              <div>Notice & News</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBoxCard;

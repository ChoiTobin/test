import React from "react";

import "../../shared/styled/home.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import RoomIcon from "@mui/icons-material/Room";
import MicIcon from "@mui/icons-material/Mic";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useNavigate } from "react-router-dom";

function HomeBoxCard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="box4">
        <div className="box6">
          <div className="box8" onClick={() => navigate("/TeamInfo")}>
            <div className="box8-1">
              <div>
                <h2>부서소개</h2>
              </div>
              <div  style={{ display: "flex", fontSize: "12px" }}>
                <div className="box8-font">
                  부서의 업무를 과별로 구분하여 <br /> 한눈에 알아볼 수 있도록
                  소개합니다.
                </div>
                <div className="box8-relative" >
                  <BusinessCenterIcon
                  className="box8-son"
                    sx={{
                      color: "rgb(178, 115, 33)",
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
          <div className="box9" onClick={() => navigate("/Member")}>
            <div className="box9-1">
              <div>
                <h2>직원안내</h2>
              </div>
              <div  style={{ display: "flex", fontSize: "12px" }}>
                <div className="box9-font">
                  좌석배치도 및 담당자와 주요 업무를
                  <br /> 소개합니다.
                </div>
                <div className="box8-relative">
                  <KeyboardIcon
                  className="box9-son"
                    sx={{
                      color: "white",
                      marginLeft: "20px",
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
            className="box10"
            onClick={() => navigate("/Gallery")}
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
            className="box11"
            onClick={() => navigate("/Locate")}
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
            className="box12"
            onClick={() => navigate("/Notice")}
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

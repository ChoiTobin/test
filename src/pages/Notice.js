import React from "react";
import Header from "../components/Layout/Header";
import "../../src/shared/styled/Notice.css";
import { useRef, useEffect, useState } from "react";

function Notice() {
  return (
    <>
      <Header str="공지사항"/>
      <div className="box0" style={{ height: "80vh" }}>
        <div className="Notice-container">
          <div className="Notice-box1">
            <div className="Notice-box1-1"></div>
            <div className="Notice-box1-2"></div>
          </div>

          <div className="Notice-box2">
            <div className="Notice-box2-1">
              <div className="Notice-font0">안녕하세요</div>
              <div>반갑습니다.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notice;

import React from "react";
import Header from "../components/Layout/Header";
import "../../src/shared/styled/Notice.css"
import { useRef,useEffect,useState } from "react";

function Notice() {



return(

<>
    <Header/>
    <div className='box0' style={{  height: "80vh"} }>
        <div className="Notice-container">
            <div className="Notice-box1">
                <div className="Notice-box1-1"></div>
                <div className="Notice-box1-2">방문을 환영합니다.</div>
            </div>

            <div className="Notice-box2">
                <div  className="Notice-box2-1">
                    <div className="Notice-font0">방문을 환영합니다.</div>
                    <div>방문을 환영합니다.</div>
                    <div >본 시스템은</div>
                    <div>내부 조직 및 담당자, 안내 등 다양한 정보를 제공하고 있습니다.</div>
                    <div>많은 이용 바랍니다.</div>
                    <div>감사합니다.</div>
                </div>
            </div>
        </div>
    </div>


</>
)
}

export default Notice
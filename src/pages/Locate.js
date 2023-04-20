import React from "react";
import "../../src/shared/styled/Locate.css";
import Header from "../components/Layout/Header";
import LocateOne from "../components/LocateCard/LocateOne";
import LocateTwo from "../components/LocateCard/LocateTwo";
import { useState } from "react";
function Locate() {
  let [locateChange, setLocateChange] = useState(true);

  function locateFunction() {
    setLocateChange(!locateChange);
  }


  return (
    <>
      <Header str="Photo Zone"/>
      <div className="box0" style={{ height: "80vh", display: "flex" }}>
        <div className="Locate-container">
          <div className="Locate-box">
            <div className="Locate-top-div">
              <div onClick={locateFunction} className="Locate-button">
                Achievements
              </div>
              <div onClick={locateFunction} className="Locate-button">
              preparing
              </div>
            </div>
            {locateChange ? <LocateOne /> : <LocateTwo />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Locate;

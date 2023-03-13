import React from 'react'
import img1 from "../../image/FACE.png";
import { useState } from 'react';

function EmplyeeBoxCard(props) {
  const backgroundImg = img1


return (
  <>
      <div className='job-box-TeamLeader-container'>
            <div className='job-box' name={`${props.title.title}`}   
            //onClick={(e)=>colorHandler(e)}
            >
              <div>
              </div>
              <span  className='letter-spacing' >{props.title.title}
              </span>
              <div>
              </div>
            </div>
          <div className='job-box-Card'>
            <div className='job-Card-flex'>
                <div>
                  <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}></div>
                </div>
                <div>
                  <span className='name'>
                    {props.title.name}
                  </span>
                  <span className='name2'>
                    {props.title.job}
                  </span>
                  <div className='name3'>
                  {props.title.active}
                  </div>
                </div>
              </div>
            </div>
        </div>
        {/* 대표님 */}
  </>
  )
}

export default EmplyeeBoxCard
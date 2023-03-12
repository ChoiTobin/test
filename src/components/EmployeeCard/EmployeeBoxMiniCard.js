import React from 'react'
import FaceIcon from '@mui/icons-material/Face';
import img1 from "../../image/HOME.png";

function EmployeeBoxMiniCard() {
  const backgroundArr = img1

  return (
  <>
          <div className='job-box-employee-container'>
          <div className='job-EM-box'>
                <div className='job-EM-border'>
                  <img className='test' style={{backgroundImage:`url(${backgroundArr})` ,backgroundSize: "cover" }}></img>
                  <span>하이하민암니암닝만임나ㅣ</span>
                </div>
          </div>
        </div>
  </>
  )
}

export default EmployeeBoxMiniCard
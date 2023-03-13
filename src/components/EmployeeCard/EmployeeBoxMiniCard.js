import React from 'react'
import img1 from "../../image/FACE.png";

function EmployeeBoxMiniCard(props) {
  const backgroundImg = img1

  return (
  <>
          <div className='job-box-employee-container'>
            <div className='job-EM-box'>
                  <div>
                    <div  className='job-EM-border'>
                        <div className='img-hight' style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                        </div>
                        <div className='name-center'>
                          <div className='EM-name'>{props.title.name}</div>
                          <div className='EM-name2'>{props.title.job}</div>
                        </div>
                      </div>
                      <div className='EM-name3'>{props.title.active}</div>
                  </div>
            </div>
        </div>
  </>
  )
}

export default EmployeeBoxMiniCard
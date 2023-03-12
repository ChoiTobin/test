import React from 'react'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FaceIcon from '@mui/icons-material/Face';


function EmplyeeBoxMiniCard() {
  return (
  <>
          <div className='job-box-employee-container'>
          <div className='job-box'>
            <div>
            <AssignmentIndIcon sx={{color:"black",width:"50px" ,height:"40px"}}/>
            </div>
            <div className='font'></div>
            <div></div>
          </div>

          <div className='job-box-CEO'>
            <div className='job-CEO-flex'>
                <div>
                <FaceIcon sx={{width:"100px" ,height:"100px"}}/>
                </div>
                <div>
                  <span className='name'>
                
                  </span>
                  <span className='name2'>

                  </span>
                  <div className='name3'>

                  </div>
                </div>
              </div>
            </div>
        </div>
        {/* 대표님 */}
  </>
  )
}

export default EmplyeeBoxMiniCard
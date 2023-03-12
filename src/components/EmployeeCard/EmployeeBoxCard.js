import React from 'react'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FaceIcon from '@mui/icons-material/Face';

function EmplyeeBoxCard(props) {
  return (
  <>
          <div className='job-box-CEO-container'>
          <div className='job-box'>
            <div>
            <AssignmentIndIcon sx={{color:"black",width:"50px" ,height:"40px"}}/>
            </div>
            <div className='font'>{props.title.title}</div>
            <div></div>
          </div>

          <div className='job-box-CEO'>
            <div className='job-CEO-flex'>
                <div>
                <FaceIcon sx={{width:"100px" ,height:"100px"}}/>
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
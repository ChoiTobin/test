import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import image from '../image/HOME.png'
import home from "./home.css"; 
import { color, fontSize } from '@mui/system';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import RoomIcon from '@mui/icons-material/Room';
import MicIcon from '@mui/icons-material/Mic';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import KeyboardIcon from '@mui/icons-material/Keyboard';
function Home() {
  return (
    <>
      <div className='Home-body-image'>
        <Header/>
          <div className='box0' style={{  height: "80vh" ,display:"flex"} }>
            <div className='box1'>
                <div className='box2'>
                  도약하는 대한민국 잘사는 국민의 나라
                </div>
            </div>
            <div className='box3' style={{display:"flex"}}>
                <div className='box4'>
                    <div className='box6'>
                      <div className='box8'>
                        <div className='box8-1'>
                            <div>
                              <h2>부서소개</h2>
                            </div>
                            <div style={{display:"flex",fontSize:"12px"}}>
                                <div>
                                  부서의 업무를 과별로 구분하여 <br/> 한눈에 알아볼 수 있도록 소개합니다.
                                </div>
                                <div>
                                  <BusinessCenterIcon sx={{color:"gold",marginLeft:"20px",marginTop:"40px",width:"100px",height:"60px"}}></BusinessCenterIcon>
                                </div>
                              
                            </div>
                        </div>
                      </div>
                      <div className='box9'>
                        <div className='box9-1'>
                            <div>
                              <h2>직원안내</h2>
                            </div>
                            <div style={{display:"flex",fontSize:"12px"}}>
                              <div >
                                좌석배치도 및 담당자와 주요 업무를<br/> 소개합니다.
                              </div>
                              <div>
                                <KeyboardIcon sx={{color:"gold",marginLeft:"20px",marginTop:"40px",width:"100px",height:"60px"}}></KeyboardIcon>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
                <div className='box5'>
                    <div className='box7'>
                      <div className='box10'  style={{display:"flex",color:"white",textAlign:"left",alignItems:"center",fontSize:"18px"}}>
                        <div><PhotoSizeSelectActualIcon sx={{color:"gold",marginLeft:"20px",marginRight:"10px",height:"100px",width:"40px"}}></PhotoSizeSelectActualIcon></div>
                        <div>
                          <div>포토갤러리</div>
                          <div>Photo Gallery</div>
                        </div>
                      </div>
                      <div className='box11' style={{display:"flex",color:"white",textAlign:"left",alignItems:"center",fontSize:"18px"}}>
                        <div><RoomIcon sx={{color:"gold",marginLeft:"20px",marginRight:"10px",height:"100px",width:"40px"}}></RoomIcon></div>
                        <div>
                          <div>청사안내</div>
                          <div>Hall Infomation</div>
                        </div>
                      </div>
                      <div className='box12' style={{display:"flex",color:"white",textAlign:"left",alignItems:"center" ,fontSize:"18px"}}>
                        <div><MicIcon sx={{color:"gold",marginLeft:"20px",marginRight:"10px",height:"100px",width:"40px"}}></MicIcon></div>
                        <div>
                          <div>공지사항</div>
                          <div>Notice & News</div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        <Footer/>
      </div>
    </>
  )
}

export default Home
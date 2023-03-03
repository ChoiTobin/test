import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import image from '../image/HOME.png'
import home from "./home.css"; 
import { color, fontSize } from '@mui/system';

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
                            <div>
                              부서의 업무를 과별로 구분하여 <br/> 한눈에 알아볼 수 있도록 소개합니다.
                            </div>
                        </div>
                      </div>
                      <div className='box9'>
                        <div className='box9-1'>
                            <div>
                              <h2>직원안내</h2>
                            </div>
                            <div >
                              좌석배치도 및 담당자와 주요 업무를<br/> 소개합니다.
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
                <div className='box5'>
                    <div className='box7'>
                      <div className='box10'  style={{display:"flex",color:"white",textAlign:"center",alignItems:"center",fontSize:"18px"}}>
                        <div>이미지</div>
                        <div>
                          <div style={{textAlign:"left"}}>포토갤러리</div>
                          <div>Photo Gallery</div>
                        </div>
                      </div>
                      <div className='box11' style={{display:"flex",color:"white",textAlign:"center",alignItems:"center",fontSize:"18px"}}>
                        <div>이미지</div>
                        <div>
                          <div style={{textAlign:"left"}}>청사안내</div>
                          <div>Hall Infomation</div>
                        </div>
                      </div>
                      <div className='box12' style={{display:"flex",color:"white",textAlign:"center",alignItems:"center" ,fontSize:"18px"}}>
                        <div>이미지</div>
                        <div>
                          <div style={{textAlign:"left"}}>공지사항</div>
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
import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import image from '../image/HOME.png'
import home from "./home.css"; 

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
                      <div className='box11'></div>
                      <div className='box12'></div>
                    </div>
                </div>
                <div className='box5'>
                    <div className='box8'>
                        <div className='box13'></div>
                        <div className='box14'></div>
                        <div className='box15'></div>
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
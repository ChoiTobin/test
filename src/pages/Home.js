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
          <div style={{  height: "80vh" ,display:"flex"}}>
            <div>다시도약하는...</div>
            <div>또다른 레이아웃 </div>
          </div>
        <Footer/>
      </div>
    </>
  )
}

export default Home
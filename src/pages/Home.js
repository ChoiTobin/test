import React from 'react'
import Header from '../components/Layout/Header'
import "../shared/styled/home.css"; 
import HomeFontCard from '../components/HomeCard/HomeFontCard';
import HomeBoxCard from '../components/HomeCard/HomeBoxCard';
function Home() {
  return (
    <>
        <Header/>
          <div className='box0' style={{  height: "80vh" ,display:"flex"} }>
            <HomeFontCard/>
            <div className='box3' style={{display:"flex"}}>
              <HomeBoxCard/>
            </div>
          </div>
    </>
  )
}

export default Home
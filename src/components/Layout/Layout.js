import React, { useEffect,useState,useCallback } from 'react'
import Footer from './Footer'
import Container from "@mui/material/Container";
import img1 from "../../image/HOME.png";
import img2 from "../../image/HOME2.png";
import img3 from "../../image/HOME3.png";
import img4 from "../../image/HOME4.png";
import img5 from "../../image/HOME5.png";
import { useLocation } from 'react-router-dom';

function Layout({children}) {
const backgroundArr = [img1,img2,img3,img4,img5]
const getRandomIndex = useCallback(() => {
return Math.floor(Math.random() * backgroundArr.length);
}, [backgroundArr]);
const randomIndex = getRandomIndex();
const backgroundImg = backgroundArr[randomIndex]
const location = useLocation();

useEffect(() => {

}, [ location ])


return (
<>
        <Container fixed maxWidth="xl" disableGutters>
                <div style={{backgroundImage:`url(${backgroundImg})` ,backgroundSize: "cover" }}>
                        {children}
                </div>
                <Footer/>
        </Container>
</>
        )
                }

export default Layout 
import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import footer from "./footer.css"; 
import Marquee from "react-fast-marquee";
function Footer() {
  return (
    <>
        <Container maxWidth="xl" disableGutters>
            <Box sx={{ height: "10vh",bgcolor:"black",opacity:"0.9",display:"flex"}} >
                <div className='footer-border-box-left'>
                  <div className='footer-border-box-left-center'>
                    <Marquee speed={80} gradient={false} className="footer-border-box-style">
                      <span className='footer-border'>비대면 시대 고민... "한눈에 조직도"가 해결사</span>
                    </Marquee>
                  </div>
                </div>
                {/* left */}
                <div className='footer-border-box-right'>
                  <span className='footer-border'>해결?</span>
                </div>
            </Box>
        </Container>
    </>
  )
}

export default Footer
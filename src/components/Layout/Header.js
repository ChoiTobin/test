import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './header.css';
import HomeIcon from '@mui/icons-material/Home';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';

function Header() {


  return (
    <>
    <Container maxWidth="xl" disableGutters >
        <Box className="header-display-flex" sx={{ height: "10vh" }} >
            <div className='header-top-left'>
              <div className='header-top-left-image'></div>
              <div className='header-top-font'>차세대ICT융합센터</div>
              <BottomNavigation
                className='circle'
                showLabels
                sx={{ bgcolor: "rgb(165, 147, 40)" }}
                >
              <BottomNavigationAction sx={{color:"white"}} value="처음으로"  label="처음으로" icon={<HomeIcon sx={{color:"white"}} />} />
              </BottomNavigation>
            </div>
          <div className='header-top-center'>2어떻게나오느지</div>
          <div className='header-top-right'>3</div>
        </Box>
    </Container>
    </>
  )
}

export default Header
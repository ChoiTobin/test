import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import '../../shared/styled/header.css';
import HomeIcon from '@mui/icons-material/Home';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import React, { useState, useCallback, useEffect } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function Header() {
  //useCallback사용해서 시간 타임 
  let date = new Date();
  let dateYear = date.getFullYear();
  let dateMonth = date.getMonth() + 1; 
  let dateday = date.getDate();
  let datemonth = date.getDay();
  let dateHours = date.getHours();
  let arr = ["일", "월", "화", "수", "목", "금", "토"];
  let result = arr[datemonth];
  let ampm = dateHours <12 ? "AM" : "PM"

  const [time, setTime] = useState(date.getMinutes());

  const updateTime = useCallback(() => {
    setTime(new Date().getMinutes());
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  let sum = `${dateYear}.${dateMonth}.${dateday} (${result}) ${dateHours}:${time} ${ampm}`;

  return (
    <>
    <Container maxWidth="xl" disableGutters >
        <Box className="header-display-flex" sx={{ height: "10vh" }} >
            <div className='header-top-left'>
              <div className='header-top-left-image'></div>
              <div className='header-top-font'>----------</div>
                <BottomNavigation
                  className='circle'
                  showLabels
                  sx={{ bgcolor: "rgb(178, 115, 33)" }}
                  >
                <BottomNavigationAction sx={{color:"white"}} value="처음으로"  label="처음으로" icon={<HomeIcon sx={{color:"white"}} />} />
                </BottomNavigation>
            </div>
            <div className='header-top-right'>
              <AccessTimeIcon className="header-top-right-clock"></AccessTimeIcon>
              {sum}
            </div>
        </Box>
    </Container>
    </>
  )
}

export default Header
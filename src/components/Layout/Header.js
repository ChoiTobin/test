import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import '../../shared/styled/header.css';

import React, { useState, useCallback, useEffect } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function Header(props) {
  //useCallback사용해서 시간 타임 
  let date = new Date();
  let dateYear = date.getFullYear();
  let dateMonth = (date.getMonth() + 1); 
  let dateday = date.getDate();
  let datemonth = date.getDay();
  let dateHours = date.getHours();
  let arr = ["일", "월", "화", "수", "목", "금", "토"];
  let result = arr[datemonth];
  let ampm = dateHours <12 ? "AM" : "PM"


  const [time, setTime] = useState(String(date.getMinutes()).padStart(2,"0"));

  const updateTime = useCallback(() => {
    setTime(String(date.getMinutes()).padStart(2,"0"));
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
              <div className='header-top-font'>{props.str ||  props.str}</div>

            </div>
            <div className='header-top-right'>
              <div className="header-top-right-time">  
                <AccessTimeIcon  className="header-top-right-clock"></AccessTimeIcon>
              </div>
              <div>
              <span>{sum}</span>
              </div>
            </div>
        </Box>
    </Container>
    </>
  )
}

export default Header
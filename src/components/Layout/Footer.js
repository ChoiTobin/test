import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Marquee from "react-fast-marquee";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import  {makeStyles} from "@material-ui/core/styles";
import HomeIcon from '@mui/icons-material/Home';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from 'react-router-dom'
import '../../shared/styled/footer.css';


function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  
  const useStyles = makeStyles({
    bottomNavigation: {
      "& .Mui-selected": {
        backgroundColor: "transparent",
        color: "gold"
      }
    }
  });
  
  const classes = useStyles(); 
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <Box sx={{ height: "10vh", bgcolor: "black", opacity: "0.9", display: "flex" }}>
          <div className='footer-border-box-left'>
            <div className='footer-border-box-left-center'>
              <Marquee speed={80} gradient={false} className="footer-border-box-style">
                <span className='footer-border'>비대면 시대 고민... "한눈에 조직도"가 해결사</span>
              </Marquee>
            </div>
          </div>
          {/* left */}
          <div className='footer-border-box-right'>
            <Box  sx={{ width: "100%"}}>
              <BottomNavigation
              className="footer-border-box-right-center"
                classes={{ root: classes.bottomNavigation }}
                showLabels
                value={value}
                sx={{ bgcolor: "black" }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}>
                <BottomNavigationAction onClick={()=>{navigate('/')}} sx={{ color: "white" }} label="처음으로" icon={<HomeIcon sx={{ color: value === 0 ? "gold" : "white" }} />} />
                <BottomNavigationAction onClick={()=>{navigate('/Employee')}} sx={{ color: "white" }} label="직원안내" icon={<KeyboardIcon sx={{ color: value === 1 ? "gold" : "white" }} />} />
                <BottomNavigationAction sx={{ color: "white" }} label="청사안내" icon={<LocationOnIcon sx={{ color: value === 2 ? "gold" : "white" }} />} />
                <BottomNavigationAction sx={{ color: "white" }} label="홍보콘텐츠" icon={<OndemandVideoIcon sx={{ color: value === 3 ? "gold" : "white" }} />} />
                <BottomNavigationAction sx={{ color: "white" }} label="포토갤러리" icon={<InsertPhotoIcon sx={{ color: value === 4 ? "gold" : "white" }} />} />
                <BottomNavigationAction sx={{ color: "white" }} label="공지사항" icon={<KeyboardVoiceIcon sx={{ color: value === 5 ? "gold" : "white" }} />} />
                <BottomNavigationAction sx={{ color: "white" }} label="공지사항" icon={<BusinessCenterIcon sx={{ color: value === 6 ? "gold" : "white" }} />} />
              </BottomNavigation>
            </Box>
          </div>
          {/* right */}
        </Box>
      </Container>
    </>
  )
}

export default Footer;

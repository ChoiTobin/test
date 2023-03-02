import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import footer from "./footer.css"; 
import Marquee from "react-fast-marquee";
//right
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
                  <span className='footer-border'>해결?</span>
                </div>
            </Box>
        </Container>
    </>
  )
}

export default Footer
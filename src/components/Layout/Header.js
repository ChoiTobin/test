import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


function Header() {
  return (
    <>
    <Container maxWidth="xl" disableGutters >
        <Box sx={{ height: "10vh" }} >
        헤더
        </Box>
    </Container>
    </>
  )
}

export default Header
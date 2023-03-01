import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


function Layout({children}) {


return (
<>
        <Container fixed maxWidth="xl" disableGutters>
                {children}
        </Container>
</>
)
}

export default Layout
import React from 'react'
import Navbar from '../../views/Dashboard'
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const mainBoxStyle = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "2rem",
    textAlign: "center"
}

const subBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: ".6rem",
    textAlign: "center"
}

const grayColor = {
    color: "gray"
}

const Contact = () => {
    return (
        <div className='table-div'>
            <Navbar />
            <h2>CONTACT US</h2>
            <Container className='contact' sx={{ width: '100dvw', height: '100dvh', marginTop: '3rem' }}>
                <Container className='contact-sub-container' sx={mainBoxStyle}>
                    <Box sx={subBoxStyle}>
                        <Box>
                            <AccessTimeIcon sx={{color: 'rgb(25, 118, 210)', fontSize: '1.7rem'}} />
                        </Box>
                        <Box>
                            <Typography variant='h6'>Customer Service Hours</Typography>
                            <Typography variant='p' sx={grayColor}>Monday - Friday</Typography>
                            <Typography variant='p' sx={grayColor}>9AM - 5PM EST</Typography>
                        </Box>
                    </Box>
                    <Box sx={subBoxStyle}>
                        <Box>
                            <PhoneIcon sx={{color: 'rgb(25, 118, 210)', fontSize: '1.7rem'}} />
                        </Box>
                        <Box>
                            <Typography variant='h6'>Phone support</Typography>
                            <Typography variant='p' sx={grayColor}>300-530-9995</Typography>
                        </Box>
                    </Box>
                    <Box sx={subBoxStyle}>
                        <Box>
                            <EmailIcon sx={{color: 'rgb(25, 118, 210)', fontSize: '1.7rem'}} />
                        </Box>
                        <Box>
                            <Typography variant='h6'>Email Support</Typography>
                            <Typography variant='p' sx={grayColor}>support@gmail.com</Typography>
                        </Box>
                    </Box>
                </Container>
            </Container>
        </div>
    )
}

export default Contact
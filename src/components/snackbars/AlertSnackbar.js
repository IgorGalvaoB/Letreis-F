import { useState } from 'react';
import { Typography, Box, Container, Zoom, Alert } from '@mui/material';
import {useTheme} from '@mui/material';


const AlertSnackbar = ({ message, show }) => {
  
    const theme= useTheme()
    const alert = (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: 'center',
            backgroundColor: theme.palette.snackAlert.main,
            justifyContent: 'center',
            color: "white",
            opacity: '1',
            height: '4.5vh',
            width: "100%",
            borderRadius: 'min(10px,2vw,1vh*(6/8))',
        }}>
            <Typography variant="snackbar">{message}</Typography>
        </Box>
    );
    return (
        <Container sx={{ width: `max(15%,300px)`, marginTop: "3vh", marginBottom: "0vh" }}>
           
            <Zoom in={show}>
                {alert}
            </Zoom>
        </Container>
    )
}
export default AlertSnackbar
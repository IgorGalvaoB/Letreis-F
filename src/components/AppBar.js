import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { animated, useSpring } from "react-spring";
import {  Link, useLocation } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@emotion/react';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ConfigSnackbar from './snackbars/ConfigSnackbar';

const AppBarStyled = () => {
    const theme = useTheme();
    const location = useLocation()
    const [config,setConfig] = React.useState(false)
    const [show, setShow] = React.useState(location.pathname==="/me"?1:0)
    const [flip, setFlip] = React.useState(location.pathname==="/me"?1:0)
    const { x } = useSpring({
        x: show,
        config: { mass: 50, tension: 900, friction: 350 },
    })

    const { i } = useSpring({
        i: flip,
        config: { mass: 50, tension: 900, friction: 350 },
    })


    const propsNav = {

        backgroundColor: theme.palette.navBar.openNav.backGround,
        width: 'min(100vw,40vh*(11/3))',
        margin: "0 auto",
        overflow: 'hidden',
        height: x.to({ range: [0, 1], output: ['0vh', '4vh'] }),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    }

    const propsIcon = {

        height: '3vh',
        aspectRatio: '1/1',
        border: `0.35vh solid ${theme.palette.navBar.closedNav.iconsTitle}`,
        borderRadius: '0.5vh',
        textAlign: "center",
        rotateZ: i.to({ range: [0, 1], output: ['0deg', '180deg'] }),
        cursor: 'pointer',
        marginTop: '0.5vh',
        position: 'relative',


    }
    
    return (
        <Box sx={{ width: '100%' }}>
            
            <animated.div style={{ ...propsNav}}>
                <div style={{marginLeft:'3%',marginTop:"0.6vh"}}>
                    <Link to='/' style={{ textDecoration: 'none'}}>
                        <Typography variant='navbar'>
                            quinteto
                        </Typography>
                    </Link>
                    <Link to='/6' style={{ textDecoration: 'none', marginLeft: '7%'}}>
                        <Typography variant='navbar' sx={{marginTop:"3vh"}}>
                            sexteto
                        </Typography>
                    </Link>
                </div>
                <Link to='/me' style={{ textDecoration: 'none',marginRight:'3%' }}>

                    <InfoRoundedIcon sx={{ color: theme.palette.navBar.openNav.iconsText, fontSize: '2.6vh', cursor: 'pointer',marginTop:'0.8vh' }}/>

                </Link>
            </animated.div>
            <AppBar position="static" color='transparent' sx={{ border: 'none', boxShadow: 'none', height: '5vh', color: theme.palette.navBar.closedNav.iconsTitle ,display:location.pathname==="/me"&&`none` }}>
                <ConfigSnackbar config={config} setConfig={setConfig}></ConfigSnackbar>
                <Toolbar sx={{ width: 'min(90vw,23vh*(11/3))', margin: '0 auto', flexGrow: 1 }}>
                    {/* <div style={{ perspective: '120px' ,margin:'0px',padding:'0px'}}> */}
                    <animated.div style={{ ...propsIcon }}>
                        <KeyboardArrowDownIcon sx={{ fontSize: '2.5vh', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', position: 'absolute' }}
                            onClick={() => {
                                setShow(prev => prev == 1 ? 0 : 1)
                                setFlip(prev => prev == 1 ? 0 : 1)
                            }}
                        ></KeyboardArrowDownIcon>
                    </animated.div>
                    {/*  </div> */}
                    <div style={{ ...propsIcon, marginLeft: '0.5vh' }}>
                        <QuestionMarkIcon sx={{ fontSize: '2vh', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', position: 'absolute' }} />
                    </div>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="title" sx={{ marginTop: '1vh', marginRight: '3.7vh' }}>
                        LETRIX
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />

                    <div style={{ ...propsIcon }}>
                        <SettingsIcon sx={{ fontSize: '2.4vh', cursor: 'pointer', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', position: 'absolute' }} onClick={() => {setConfig(!config) }}></SettingsIcon>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppBarStyled
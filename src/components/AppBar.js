import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { animated, useSpring } from "react-spring";
import { Link} from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@emotion/react';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const AppBarStyled = () => {
    const theme = useTheme();

    const [show, setShow] = React.useState(0)
    const [flip, setFlip] = React.useState(0)
    const { x } = useSpring({
        x: show,
        config: { mass: 50, tension: 900, friction: 350 },
    })

    const { i } = useSpring({
        i: flip,
        config: { mass: 50, tension: 900, friction: 350 },
    })


    const propsNav = {

        backgroundColor: '#3B3426',
        width: 'min(100vw,40vh*(11/3))',
        margin: "0 auto",
        overflow: 'hidden',
        height: x.to({ range: [0, 1], output: ['0vh', '3vh'] }),

    }

    const propsIcon = {

        height: '3vh',
        aspectRatio: '1/1',
        border: `0.35vh solid ${theme.palette.secondary.main}`,
        borderRadius: '0.5vh',
        textAlign: "center",
        rotateZ: i.to({ range: [0, 1], output: ['0deg', '180deg'] }),
        cursor: 'pointer',
        marginTop: '0.5vh',
        position:'relative',


    }


    return (
        <Box sx={{ width: '100%' }}>
            <animated.div style={{ ...propsNav,display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
                <div>

                    <Link to='/' style={{color:'white',textDecoration:'none',marginLeft:'1.5vw'}}>
                        <Typography variant='navbar'>
                            quinteto
                        </Typography>
                    </Link>
                    <Link to='/6' style={{color:'white',textDecoration:'none',marginLeft:'1.5vw'}}>
                        <Typography variant='navbar'>
                            sexteto
                        </Typography>
                    </Link>
                </div>
              
                <InfoRoundedIcon onClick={() => setShow(prev => prev == 1 ? 0 : 1)} sx={{margin:'0.3vh 1.5vw 0vh 0vh',color:'white',fontSize:'2.4vh',cursor:'pointer'}}>dsfgsdf</InfoRoundedIcon>
            </animated.div>
            <AppBar position="static" color='transparent' sx={{ border: 'none', boxShadow: 'none', height: '5vh', color: '#635C4E' }}>
                <Toolbar sx={{ width: 'min(90vw,23vh*(11/3))', margin: '0 auto',flexGrow: 1 }}>
                    {/* <div style={{ perspective: '120px' ,margin:'0px',padding:'0px'}}> */}
                        <animated.div style={{ ...propsIcon }}>
                            <KeyboardArrowDownIcon sx={{ fontSize: '2.5vh',top:'50%',left:'50%',transform:'translate(-50%,-50%)',position:'absolute' }}
                                onClick={() => {
                                    setShow(prev => prev == 1 ? 0 : 1)
                                    setFlip(prev => prev == 1 ? 0 : 1)
                                }}
                            ></KeyboardArrowDownIcon>
                        </animated.div>
                   {/*  </div> */}
                    <div style={{ ...propsIcon, marginLeft: '0.5vh'}}>
                        <QuestionMarkIcon sx={{ fontSize: '2vh',top:'50%',left:'50%',transform:'translate(-50%,-50%)',position:'absolute'}} />
                    </div>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="title" sx={{ marginTop: '1vh',marginRight:'3.7vh' }}>
                        LETRIX
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    
                    <div style={{ ...propsIcon }}>
                        <SettingsIcon sx={{ fontSize: '2.4vh', cursor: 'pointer',top:'50%',left:'50%',transform:'translate(-50%,-50%)',position:'absolute'}} onClick={() => { }}></SettingsIcon>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppBarStyled
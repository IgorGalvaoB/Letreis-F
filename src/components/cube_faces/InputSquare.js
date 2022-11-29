import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { animated, useSpring } from "react-spring";


const InputSquare = ({ select, setSelect, id, letter }) => {

    const selected = select === id

    const StyBox = styled(Box)(({ theme }) => ({

        cursor:'pointer',
        backgroundColor: theme.palette.background.default,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        transform: 'translateX(-50%) rotateY(-90deg)',
        color: theme.palette.common.white,
        border: `min(9px,1vw,0.7vh*(6/8)) solid ${theme.palette.secondary.main}`,
        borderBottom: selected ? `min(16px,2.1vw,1.5vh*(6/8)) solid ${theme.palette.secondary.main}` : `min(9px,1vw,0.7vh*(6/8)) solid ${theme.palette.secondary.main}`,
        borderRadius: 'min(12px,1vh,2vw)',

    }))

    return (


        <StyBox onClick={setSelect}>
            <Typography variant='gameGrid'>
                {letter}
            </Typography>
        </StyBox>



    )
}

export default InputSquare




import { useState, useLayoutEffect, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Cube from './Cube';
import { Container } from '@mui/material';
import { animated, useSpring } from "react-spring";
const NUMBER_OF_LETTERS = 6

const Word = ({ id, word, backWord, stg, attempt, select, setSelect, won, wrongAnimation }) => {
    const [stage, setStage] = useState(stg)
    const [thisWord, setThisWord] = useState(word)
    const [thisBackWord, setThisBackWord] = useState(backWord)
    const [successAnimation, setSuccessAnimation] = useState(false)
    const [isFirstRun, setIsFirstRun] = useState(true);
    const wordGrid = new Array(NUMBER_OF_LETTERS).fill().map((item, index) => {
        return (
            <Grid xs={1} key={index} sx={{ perspective: '200px' }}>
                <Cube backLetter={thisBackWord[index]} letter={thisWord[index]} id={index} select={select} stage={stage} setSelect={setSelect} successAnimation={successAnimation} won={won} />
            </Grid>
        )
    })

    useEffect(() => {

        if (isFirstRun) {
            setIsFirstRun(false)
            return

        } else {
            setStage(prev=>prev+0.5)
            /* if (attempt === id && !won) {
                setStage(prev => prev + 0.5)

            }
            if ((attempt === id + 1 ||attempt===id+2) && stage !== 1) {

                setStage(prev => prev + 0.5)

            } */
        }

    }, [attempt])

    useEffect(() => {
        if (attempt === id) {

            setThisWord(word)

        }
    }, [word])

    useEffect(() => {
        if (attempt === id) {

            setThisBackWord(backWord)
            const success = Object.values(backWord).reduce((prev, current) => {
                return prev + current
            }, 0)
            if (success === (NUMBER_OF_LETTERS * 2)) {
                setSuccessAnimation(true)
            }

        }
    }, [backWord])
   
    const { i } = useSpring({
        i:  wrongAnimation ? 0 : 1,
        config: { mass: 5, tension: 750, friction: 100 },

    })
    const props = {

        width: '100%',
        height:'100%',
        translateX: stage===0.5&&i.to({ range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], output: ['0%', '-3%', '3%', '-3%', '3%', '-3%', '3%', '-3%', '3%', '-3%', '0%'] }),

    }
    return (

        <Container maxWidth='sm'sx={{border:'3px solid red',width:'min(100vw,70vh*(6/8))',aspectRatio:'6/8',marginTop:'5vh'}} >
            <animated.div style={{ ...props }}>
                <Grid container spacing={{ xs: '4px' }}columns={NUMBER_OF_LETTERS}>
                    {wordGrid}
                </Grid>
            </animated.div>
        </Container>

    )

}

export default Word
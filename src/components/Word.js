import { useState, useEffect,useContext } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Cube from './Cube';
import { NumberOfLettersContext } from "./Letreis";
import { animated, useSpring } from "react-spring";

const Word = ({ id, word, backWord, stg, attempt, select, setSelect, won, wrongAnimation }) => {
    const NUMBER_OF_LETTERS = useContext(NumberOfLettersContext).NUMBER_OF_LETTERS
    
    const [stage, setStage] = useState(stg)
    const [thisWord, setThisWord] = useState(word)
    const [thisBackWord, setThisBackWord] = useState(backWord)
    const [successAnimation, setSuccessAnimation] = useState(false)
    const [isFirstRun, setIsFirstRun] = useState(true);
    const wordGrid = new Array(NUMBER_OF_LETTERS).fill().map((_, index) => {
        return (
            <Grid xs={1} key={index} sx={{ perspective: '100px'}}>
                <Cube backLetter={thisBackWord[index]} letter={thisWord?thisWord[index]:null} id={index} select={select} stage={stage} setSelect={setSelect} successAnimation={successAnimation}/>
            </Grid>
        )
    })

    useEffect(() => {
        
        if (isFirstRun) {
            
            setIsFirstRun(false)
            return

        } else { 
            
            if (attempt === id && !won) {
                setStage(prev => prev + 0.5)
                

            }
            if ((attempt === id + 1)  && !won) {
                setStage(prev => prev + 0.5)
                
            } 
        } 

    }, [attempt])

    useEffect(() => {
        if (attempt === id) {

            setThisWord(word)

        }
    }, [word])

    useEffect(() => {
        if (attempt === id+1) {

            setThisBackWord(backWord)

            const success = backWord[NUMBER_OF_LETTERS]
            
            if (success) {
                
                setSuccessAnimation(true)
                
            }
        }
    }, [backWord])
    useEffect(()=>{
        if(id===attempt-1&&won===true){
            setStage(stage+0.5)
        }
    },[won])
    const { i } = useSpring({
        i:  wrongAnimation ? 0 : 1,
        config: { mass: 5, tension: 750, friction: 100 },

    })
    const props = {
      
        width: '100%',
        translateX: stage===0.5&&i.to({ range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], output: ['0%', '-3%', '3%', '-3%', '3%', '-3%', '3%', '-3%', '3%', '-3%', '0%'] }),

    }
    return (

       
            <animated.div style={{ ...props }}>
                <Grid container columnSpacing={{ xs: '2px', phone:'4px' }} columns={NUMBER_OF_LETTERS} >
                    {wordGrid}
                </Grid>
            </animated.div>
      

    )   

}

export default Word
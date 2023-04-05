import { forwardRef, useEffect, useState } from "react";
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Word from "./Word";
import click from "../controllers/click.controller";
import Keyboard from "./keyboard/Keyboard";
const NUMBER_OF_ATTEMPTS = 8
const NUMBER_OF_LETTERS = 6

const GridGame = forwardRef((props,ref) => {
    const fortaleza_date_str = new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }).slice(0, -10)
    const savedLetreis = JSON.parse(localStorage.getItem('Letreis'))
    const { data, date } = savedLetreis ? savedLetreis : { date: null, data: null }
    const [word, setWord] = useState(new Array(NUMBER_OF_LETTERS).fill(''))
    const [won, setWon] = useState(false)
    const [select, setSelect] = useState(0)
    const [attempt, setAttempt] = useState(0)
    const [backWord, setBackWord] = useState(new Array(6).fill({ '': 0 }))
    const [wrongAnimation, setWrongAnimation] = useState(false)
    let grid
    
    const [keyboardKeys, setKeyboardKeys] = useState({

        Q: 0,
        W: 0,
        E: 0,
        R: 0,
        T: 0,
        Y: 0,
        U: 0,
        I: 0,
        O: 0,
        P: 0,
        A: 0,
        S: 0,
        D: 0,
        F: 0,
        G: 0,
        H: 0,
        J: 0,
        K: 0,
        L: 0,
        DEL: 0, 
        Z: 0,
        X: 0,
        C: 0,
        V: 0,
        B: 0,
        N: 0,
        M: 0,
        ENTER: 0,


    })

    const handleKeyDown=(event)=>{

        click(event,select,setSelect,word,setWord,backWord, 'answer', attempt)

    }
    
    useEffect(() => {
        if (data && date) {

            if (date === fortaleza_date_str) {

                setWon(data[data.length - 1][NUMBER_OF_LETTERS])

            }
        }

        
    }, [])

    //grid construction

    if (data && (date === fortaleza_date_str)) {
            console.log('b')
        grid = data.map((item, index) => {
            
            return (
                <Grid xs={1} key={index + 100}>
                    <Word id={100 + index} attempt={attempt} backWord={item} stg={1} />
                </Grid>
            )
        })

        const wonCondition = data[data.length - 1][NUMBER_OF_LETTERS]

        grid = grid.concat(new Array(NUMBER_OF_ATTEMPTS - data.length).fill().map((_, index) => {
            return (
                <Grid xs={1} key={index}>
                    <Word id={index} backWord={backWord} stg={index===0 && !wonCondition?0.5:0} word={word} attempt={attempt} select={select} setSelect={setSelect} wrongAnimation={wrongAnimation} won={won}/>
                </Grid>
            )
        }))

    } else {

        grid = new Array(NUMBER_OF_ATTEMPTS).fill().map((_, index) => {
            return (
                <Grid xs={1} key={index} >
                    <Word id={index} backWord={backWord} stg={index === 0 ? 0.5 : 0} word={word} attempt={attempt} select={select} setSelect={setSelect} wrongAnimation={wrongAnimation} won={won}/>
                </Grid>
            )
        })

    }




    return (
        <>
            
            <Container maxWidth='lg'sx={{height:'93vh', display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
                <Container maxWidth='sm' sx={{ width: `min(90vw,65vh*(${NUMBER_OF_LETTERS/NUMBER_OF_ATTEMPTS}))`, marginTop: '3vh',outline:'none' }} tabIndex='-1' onKeyUp={handleKeyDown} ref={ref}>
                    <Grid container rowSpacing={{ xs: '1px', phone: '2px' }} columns={1} sx={{ width: '100%' }}>
                        {grid}
                    </Grid>
                </Container>
                <Keyboard keys={keyboardKeys} word={word} select={select} setSelect={setSelect} setWord={setWord}></Keyboard>
                <button onClick={()=>{setAttempt(attempt+1)}}></button>
                <button onClick={()=>{setWrongAnimation(!wrongAnimation)}}></button>

            </Container>
        </>
    )
})

export default GridGame
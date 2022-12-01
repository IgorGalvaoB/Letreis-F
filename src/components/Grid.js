import { useEffect, useRef, useState } from "react";
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Word from "./Word";
import click from "../controllers/click.controller";

const NUMBER_OF_ATTEMPTS = 8
const NUMBER_OF_LETTERS = 6

const GridGame = () => {
    const fortaleza_date_str = new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }).slice(0, -9)
    const savedLetreis = JSON.parse(localStorage.getItem('Letreis'))
    const { data, date } = savedLetreis ? savedLetreis : { date: null, data: null }
    const [word, setWord] = useState(new Array(NUMBER_OF_LETTERS).fill(''))
    const [won, setWon] = useState(false)
    const [select, setSelect] = useState(0)
    const [attempt, setAttempt] = useState(0)
    const [backWord, setBackWord] = useState(new Array(6).fill({ '': 0 }))
    const [wrongAnimation, setWrongAnimation] = useState(false)
    let grid
    const ref = useRef(null)

    const handleKeyDown=(event)=>{

        click(event,select,setSelect,word,setWord,backWord, 'answer', attempt)

    }
    useEffect(() => {
        if (data && date) {

            if (date === fortaleza_date_str) {

                setAttempt(data.length)
                setWon(data[data.length - 1][NUMBER_OF_LETTERS])

            }
        }

        ref.current.focus()
    }, [])

    //grid construction

    if (data && (date === fortaleza_date_str)) {

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
                    <Word id={index + data.length} backWord={backWord} stg={(index === 0 && !wonCondition) ? 0.5 : 0} word={word} attempt={attempt} select={select} setSelect={setSelect} wrongAnimation={wrongAnimation} won={won}></Word>
                </Grid>
            )
        }))

    } else {

        grid = new Array(NUMBER_OF_ATTEMPTS).fill().map((_, index) => {
            return (
                <Grid xs={1} key={index} >
                    <Word id={index} backWord={backWord} stg={index === 0 ? 0.5 : 0} word={word} attempt={attempt} select={select} setSelect={setSelect} wrongAnimation={wrongAnimation} won={won}></Word>
                </Grid>
            )
        })

    }




    return (
        <>

            <Container maxWidth='sm' sx={{ width: `min(90vw,65vh*(${NUMBER_OF_LETTERS/NUMBER_OF_ATTEMPTS}))`, marginTop: '10vh' }} tabIndex='-1' onKeyUp={handleKeyDown} ref={ref}>
                <Grid container rowSpacing={{ xs: '1px', phone: '2px' }} columns={1} sx={{ width: '100%' }}>
                    {grid}
                </Grid>
            </Container>
            
            <button onClick={()=>{setAttempt(attempt+1)}}></button>
        </>
    )
}

export default GridGame
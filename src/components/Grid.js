import { forwardRef, useEffect, useState, useContext } from "react";
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Word from "./Word";
import click from "../controllers/click.controller";
import Keyboard from "./keyboard/Keyboard";
import { NumberOfLettersContext } from "./Letreis";

const GridGame = forwardRef(({ visibility, answer }, ref) => {
    const context = useContext(NumberOfLettersContext)
    const NUMBER_OF_LETTERS = context.NUMBER_OF_LETTERS
    const NUMBER_OF_ATTEMPTS = context.NUMBER_OF_ATTEMPTS
    const fortaleza_date_str = new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }).slice(0, -10)
    const savedLetreis = JSON.parse(localStorage.getItem(`Letreis${NUMBER_OF_LETTERS}`))
    const { data, date } = savedLetreis ? savedLetreis : { date: null, data: null }
    const [won, setWon] = useState(false)
    const [attempt, setAttempt] = useState(0)
    const [word, setWord] = useState(new Array(5).fill(''))
    const [backWord, setBackWord] = useState(new Array(NUMBER_OF_LETTERS).fill({ '': 0 }))
    const [wrongAnimation, setWrongAnimation] = useState(false)
    
    let grid = []
    const [grid1,setGrid1] = useState([])
    const [grid2,setGrid2] = useState([])
    const [select, setSelect] = useState(0)
    const [dataLength,setDataLength] = useState(0)
    const [keyboardKeys, setKeyboardKeys] = useState({

        q: 0,
        w: 0,
        e: 0,
        r: 0,
        t: 0,
        y: 0,
        u: 0,
        i: 0,
        o: 0,
        p: 0,
        a: 0,
        s: 0,
        d: 0,
        f: 0,
        g: 0,
        h: 0,
        j: 0,
        k: 0,
        l: 0,
        DEL: 0,
        z: 0,
        x: 0,
        c: 0,
        v: 0,
        b: 0,
        n: 0,
        m: 0,
        ENTER: 0,


    })

    const handleKeyDown = (event) => {

        click(event, select, setSelect, word, setWord, setBackWord, answer, attempt, setAttempt, wrongAnimation, setWrongAnimation, setWon, keyboardKeys, setKeyboardKeys, NUMBER_OF_LETTERS)

    }

    useEffect(() => {

        if (data && date) {
            
            
            if (date === fortaleza_date_str) {
                setWon(data[data.length - 1][NUMBER_OF_LETTERS])

            }
        }
        if (data && (date === fortaleza_date_str)) {
            setDataLength(data.length)
            setGrid1(data.map((item, index) => {
    
                return (
                    <Grid xs={1} key={index + 100}>
                        <Word id={100 + index} attempt={attempt} backWord={item} stg={1} />
                    </Grid>
                )
            }))}


    }, [])

    //grid construction
   

    if (data && (date === fortaleza_date_str)) {

        const wonCondition = data[data.length - 1][NUMBER_OF_LETTERS]

        grid = grid.concat(new Array(NUMBER_OF_ATTEMPTS - dataLength).fill().map((_, index) => {
            return (
                <Grid xs={1} key={index}>
                    <Word id={index} backWord={backWord} stg={index === 0 && !wonCondition ? 0.5 : 0} word={word} attempt={attempt} select={select} setSelect={setSelect} wrongAnimation={wrongAnimation} won={won} />
                </Grid>
            )
        }))

    } else {

        grid = new Array(NUMBER_OF_ATTEMPTS).fill().map((_, index) => {
            return (
                <Grid xs={1} key={index} >
                    <Word id={index} backWord={backWord} stg={index === 0 ? 0.5 : 0} word={word} attempt={attempt} select={select} setSelect={setSelect} wrongAnimation={wrongAnimation} won={won} />
                </Grid>
            )
        })

    }
  
    return (
        <>

            <Container maxWidth='lg' sx={{ height: '93vh', display: 'flex', flexDirection: 'column' }} style={{ display: visibility === false && 'none' }}>
                <Container maxWidth='sm' sx={{ width: `min(90vw,60vh*(${NUMBER_OF_LETTERS / NUMBER_OF_ATTEMPTS}))`, marginTop: '3vh', outline: 'none' }} tabIndex='-1' onKeyUp={handleKeyDown} ref={ref} >
                    <Grid container rowSpacing={{ xs: '1px', phone: '2px' }} columns={1} sx={{ width: '100%' }}>
                        {grid1}
                        {grid}
                    </Grid>
                </Container>
                <Keyboard keys={keyboardKeys} word={word} select={select} setSelect={setSelect} setWord={setWord}></Keyboard>
            </Container>
        </>
    )
})

export default GridGame
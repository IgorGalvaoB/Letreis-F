import { useEffect, useState } from "react";
import Word from "./Word";

const NUMBER_OF_ATTEMPTS = 8
const NUMBER_OF_LETTERS = 6
const Grid = () => {
    const fortaleza_date_str = new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }).slice(0, -9);
    const { data, date } = JSON.parse(localStorage.getItem('Letreis'))
    const [word, setWord] = useState(new Array(NUMBER_OF_LETTERS).fill(''))
    const [won,setWon] = useState(false)
    const [select,setSelect] = useState(0)
    const [attempt,setAttempt] = useState(1)
    const [backWord,setBackWord] = useState(new Array(6).fill({'':0}))
    const [wrongAnimation,setWrongAnimation] = useState(false)
    let grid
    
    useEffect(()=>{
        
        
    },[])
    
    if (data && date) {
  
        if (date === fortaleza_date_str) {
            grid = data.map((item, index) => {
                return (

                    <Word id={100 + index} key={index} attempt={attempt} backWord={item} stg={1} />

                )
            })
             grid = grid.concat(new Array(NUMBER_OF_ATTEMPTS-data.length).fill().map((_,index)=>{
                return (
                    <Word id={index+data.length} backWord={backWord} stg={(index===0&&!won)?0.5:0} word={word} attempt={attempt} select={select} setSelect={setSelect} wrongAnimation={wrongAnimation} won={won}></Word>
                )
            }))
        }
    }


    console.log(fortaleza_date_str === date)




    return (
        <>
            <div></div>
            {grid}
            <button onClick={()=>{setAttempt(attempt+1)}}>aaa</button>
        </>
    )
}

export default Grid
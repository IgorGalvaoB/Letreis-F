import { useState } from "react"
import Cube from "./Cube"
import Grid from "./Grid"
import Word from "./Word"
const Letreis = ()=>{
    
    return(
      /*   <>
            {a}aa
            <button onClick={()=>{setAttempt(attempt+1)}}>aumentar attempt</button> 
            <Word id={0} word={['','','','','','']}  backWord={new Array(6).fill({'':0})} done={false} stg={0.5} /> 
            <button onClick={()=>{
                setAttempt(attempt+1)
                setB(c)
                localStorage.clear()
                localStorage.setItem('Letreis',{
                    date:'28/11/2022',
                    data:[{'A':2},{'B':3},{'A':2},{'B':3},{'A':2},{'B':3},true]})
            }}></button>

        </> */
        <Grid></Grid>

    ) 
    
}
export default Letreis
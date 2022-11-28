import { useState } from "react"
import Cube from "./Cube"
import Word from "./Word"
const Letreis = ()=>{
    const [attempt,setAttempt] = useState(0)
    const a = [<Word id={0} word={['','','','','','']} key='1'attempt={attempt} backWord={new Array(6).fill({'':0})} done={false} stg={0} />/* ,<Word id={1} key='2' won={ true } attempt={attempt}  word={['','','','','','']}  backWord={new Array(6).fill({'':0})} done={false} stg={0} /> */]
    return(
        <>
            {a}aa
            <button onClick={()=>{setAttempt(attempt+1)}}>aumentar attempt</button>
            {/* <Word id={0} word={['','','','','','']}  backWord={new Array(6).fill({'':0})} done={false} stg={0.5} /> */}
        </>

    )
}
export default Letreis
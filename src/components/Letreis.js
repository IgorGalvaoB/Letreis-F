import Grid from "./Grid"

import { useEffect, useRef, createContext, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
export const NumberOfLettersContext = createContext({})


const Letreis = () => {

    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const [word5, setWord5] = useState(new Array(5).fill(''))
    const [word6, setWord6] = useState(new Array(6).fill(''))
    const [path, setPath] = useState()
    const [visibility, setVisibility] = useState(true)
    const [visibility2, setVisibility2] = useState(false)
    const [attempt5,setAttempt5] = useState(0)
    const [attempt6,setAttempt6] = useState(0)
    const location = useLocation().pathname
    const [select, setSelect] = useState(0)
    const handleClick = () => {
        if (visibility === true) {

            ref5.current.focus()
            return
        }
        ref6.current.focus() 

    }
    const teste = () => {
        setWord5(new Array(5).fill(''))
    }

    useEffect(() => {
        setWord5(new Array(5).fill(''))
        setWord6(new Array(6).fill(''))
        setSelect(0)
        if (visibility === true) {

            ref5.current.focus()
            return
        }
        ref6.current.focus()

    }, [visibility])



   
    return (
        <>
            <div onClick={handleClick} >
                <button onClick={() => {
                    setVisibility(!visibility)
                    setVisibility2(!visibility2)
                }}></button>
                <Link to='/'><button>dfafdsf</button></Link>
                <Link to='/me'><button>sadfasdfasdfa</button></Link>
                <Routes>
                    <Route path='/' element={
                        <>
                            <NumberOfLettersContext.Provider value={{ NUMBER_OF_LETTERS: 5, NUMBER_OF_ATTEMPTS: 6 }}>
                                <Grid ref={ref5} word={word5} setWord={setWord5} setSelect={setSelect} select={select} visibility={visibility}></Grid>
                            </NumberOfLettersContext.Provider> 
                            <NumberOfLettersContext.Provider value={{ NUMBER_OF_LETTERS: 6, NUMBER_OF_ATTEMPTS: 8 }}>
                                <Grid ref={ref6} word={word6} setWord={setWord6} setSelect={setSelect} select={select} visibility={visibility2}></Grid>
                            </NumberOfLettersContext.Provider>
                        </>

                    }>
                    </Route>
                    <Route path='/me' element={
                        <div>aaa</div>}>
                    </Route>
                </Routes>
            </div>
        </>

    )

}
export default Letreis
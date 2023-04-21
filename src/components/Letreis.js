import Grid from "./Grid"

import { useEffect, useRef, createContext, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
export const NumberOfLettersContext = createContext({})


const Letreis = () => {

    const ref5 = useRef(null)
    const location = useLocation().pathname
    const [answer,setAnswer] =useState(["agora","ambito"])
    const handleClick = () => {

        ref5.current.focus()

    }


    useEffect(() => {

        ref5.current.focus()

    }, [])

    useEffect(() => {
        if(location==="/"||location==="/6"){

            ref5.current.focus()
        }

    }, [location])


    return (
        <>
            <div onClick={handleClick} >

                <Link to='/'><button>dfafdsf</button></Link>
                <Link to='/6'><button>sadfasdfasdfa</button></Link>
                <Link to='/me'><button>sadfasdfasdfa</button></Link>
                <Routes>
                    <Route path='/' element={
                        <>
                            <NumberOfLettersContext.Provider value={{ NUMBER_OF_LETTERS: 5, NUMBER_OF_ATTEMPTS: 6 }}>
                                <Grid key={1} ref={ref5} answer={answer[0]}></Grid>
                            </NumberOfLettersContext.Provider>
                        </>

                    }>
                    </Route>
                    <Route path="/6" element={
                        <NumberOfLettersContext.Provider value={{ NUMBER_OF_LETTERS: 6, NUMBER_OF_ATTEMPTS: 8 }}>
                            <Grid key={2} ref={ref5} answer={answer[1]}></Grid>
                        </NumberOfLettersContext.Provider>

                    }></Route>
                    <Route path='/me' element={
                        <div>aaa</div>}>
                    </Route>
                </Routes>
            </div>
        </>

    )

}
export default Letreis
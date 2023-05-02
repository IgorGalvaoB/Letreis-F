import Grid from "./Grid"

import { useEffect, useRef, createContext, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
export const NumberOfLettersContext = createContext({})


const Letreis = () => {

    const ref5 = useRef(null)
    const location = useLocation().pathname
    const handleClick = () => {
        
            ref5.current.focus()

    }
    

    useEffect(() => {
        
        
            ref5.current.focus()
        
            

    }, [location])



   
    return (
        <>
            <div onClick={handleClick}>
                
                <Link to='/'><button>CINCO LETRAS</button></Link>
                <Link to='/6'><button>6 LETRAS</button></Link>
                <Routes>
                    <Route path='/' element={
                        <>
                            <NumberOfLettersContext.Provider value={{ NUMBER_OF_LETTERS: 5, NUMBER_OF_ATTEMPTS: 6 }}>
                                <Grid key={"5/1"} ref={ref5} answer={"agora"} ></Grid>
                            </NumberOfLettersContext.Provider> 
                        </>

                    }>
                    </Route>
                    <Route path= "/6" element={
                            <NumberOfLettersContext.Provider value={{ NUMBER_OF_LETTERS: 6, NUMBER_OF_ATTEMPTS: 8 }}>
                                <Grid ref={ref5} key={"6/1"} answer={"ambito"}/>
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
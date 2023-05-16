import Grid from "./Grid"

import { useEffect, useRef, createContext, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import useFetch from "../utils/useFetch"
export const NumberOfLettersContext = createContext({})



const Letreis = () => {

    const [answer5, setAnswer5] = useState(null)
    const [answer6, setAnswer6] = useState(null)
    const ref5 = useRef(null)
    const location = useLocation().pathname

    const makeAPICall = async () => {
        try {

            //const response = useFetch()
            /* let { data } = await response.json();
            data = data.split(',')
            setAnswer5(data[0])
            setAnswer6(data[1]) */
            //console.log(response)

        } catch (error) {

            console.log(error)

        }

    }
    useEffect(() => {

        /*      const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }).slice(0, -10)
             console.log(JSON.parse(localStorage.getItem(`Letreis6`)))
             let data6 = JSON.parse(localStorage.getItem(`Letreis6`))
             if(data6){
                 console.log(data6.date6)
             }
              */
        //useFetch()
        // makeAPICall();


    }, [])

    const handleClick = () => {

        ref5.current.focus()

    }

    const { data, loading } = useFetch()
    
    
    useEffect(() => {

        ref5.current.focus()

    }, [location,loading])
    


    return (
        <>

            <Link to='/'><button>CINCO LETRAS</button></Link>
            <Link to='/6'><button>6 LETRAS</button></Link>
            <div onClick={handleClick} style={{display:loading&&'none'}}>
                <Routes>
                    <Route path='/' element={
                        <>
                            <NumberOfLettersContext.Provider value={{ NUMBER_OF_LETTERS: 5, NUMBER_OF_ATTEMPTS: 6 }}>
                                <Grid key={"5/1"} ref={ref5} answer={data ? data.split(',')[0] : "00000"} ></Grid>
                            </NumberOfLettersContext.Provider>
                        </>

                    }>
                    </Route>
                    <Route path="/6" element={
                        <NumberOfLettersContext.Provider value={{ NUMBER_OF_LETTERS: 6, NUMBER_OF_ATTEMPTS: 8 }}>
                            <Grid ref={ref5} key={"6/1"} answer={data ? data.split(',')[1] : "000000"} />
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
import Grid from "./Grid"
import AppBar from "./AppBar"
import { useEffect, useRef, createContext } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import useFetch from "../utils/useFetch"
export const NumberOfLettersContext = createContext({})



const Letreis = () => {

    
    const ref = useRef(null)
    const location = useLocation().pathname

    /*const makeAPICall = async () => {
        try {

            //const response = useFetch()
            let { data } = await response.json();
            data = data.split(',')
            setAnswer5(data[0])
            setAnswer6(data[1]) 
            //console.log(response)

        } catch (error) {

            console.log(error)

        }

    }
    useEffect(() => {

        const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }).slice(0, -10)
        console.log(JSON.parse(localStorage.getItem(`Letreis6`)))
        let data6 = JSON.parse(localStorage.getItem(`Letreis6`))
        if (data6) {
            console.log(data6.date6)
        }

        useFetch()
        makeAPICall();


    }, [])*/

    const handleClick = () => {

        ref.current.focus()

    }

    const { data, loading } = useFetch()


    useEffect(() => {

        ref.current.focus()

    }, [location, loading])



    return (
        <>

            <div onClick={handleClick} style={{ display: loading && 'none',height:'100%',overflow:'hidden' }}>
            <AppBar/>
            
         
                <Routes>
                    <Route path='/' element={
                        <>
                            <NumberOfLettersContext.Provider value={{ NUMBER_OF_LETTERS: 5, NUMBER_OF_ATTEMPTS: 6 }}>
                                <Grid key={"5/1"} ref={ref} answer={data ? data.split(',')[0] : "00000"} ></Grid>
                            </NumberOfLettersContext.Provider>
                        </>

                    }>
                    </Route>
                    <Route path="/6" element={
                        <NumberOfLettersContext.Provider value={{ NUMBER_OF_LETTERS: 6, NUMBER_OF_ATTEMPTS: 8 }}>
                            <Grid ref={ref} key={"6/1"} answer={data ? data.split(',')[1] : "000000"} />
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
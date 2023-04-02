import Grid from "./Grid"
import { useEffect, useRef } from 'react'
const Letreis = () => {
    const ref = useRef(null)
    const handleClick = () => {
        ref.current.focus()
    }
       
    useEffect(() => {
        ref.current.focus()
    }, [])
    return (

        <div style={{ width: '100%', height: '100%' }} onClick={handleClick} >
            <Grid ref={ref}></Grid>
        </div>

    )

}
export default Letreis
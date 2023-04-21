import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";
import InputSquare from "./cube_faces/InputSquare";
import FilledSquare from "./cube_faces/FilledSquare";
import EmptySquare from "./cube_faces/EmptySquare";


const Cube = ({ backLetter, letter, id, select, setSelect, stage, successAnimation }) => {
    const [isFirstRun,setIsFirstRun] = useState(true)
    const [input, setInput] = useState(true)
    const { x } = useSpring({

        x: stage,
        config: { mass: 5, tension: 700, friction: 80 },
        delay: 300 * id,

    })
    const { i } = useSpring({

        i: successAnimation ? 0 : 1,
        config: { mass: 7, tension: 900, friction: 200 },
        delay: 1400 + (150 * id),

    })
    const { j } = useSpring({

        j: input ? 0 : 1,
        config: { mass: 1, tension: 350, friction: 25 },
        
    })
    const props = {
        
        aspectRatio: '1/1',
        transformStyle: 'preserve-3d',
        transform:'rotateY(-90deg) translateX(-50%) rotateY(90deg)',
        rotateY: x.to({ range: [0, 0.5, 1], output: [0, 90, 180] }),
        translateY: i.to({ range: [0, 0.5, 1], output: ['0%', '-50%', '0%'] }),
        scaleX: j.to({ range: [0, 0.5, 1], output: ['100%', '150%', '100%'] }),
        
    }
    useEffect(()=>{
        if(isFirstRun){
            setIsFirstRun(false)
            return
        }
        if(letter!==''){
            stage===0.5&&setInput(!input)
        }
        
    },[letter])


    return (
        <>
            <animated.div style={{
                ...props,
            }}>
                <InputSquare select={select} id={id} letter={letter || ''} setSelect={() => { stage===0.5&&setSelect(id) }}/>
                <EmptySquare />
                <FilledSquare background={Object.values(backLetter)[0] || 0} letter={Object.keys(backLetter)[0] || ''} />
            </animated.div>
        </>
    )
}
export default Cube
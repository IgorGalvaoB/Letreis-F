import InputSquare from "./cube_faces/InputSquare";
import FilledSquare from "./cube_faces/FilledSquare";
import EmptySquare from "./cube_faces/EmptySquare";
import { animated, useSpring } from "react-spring";


const Cube = ({ backLetter, letter, id, select, setSelect, stage, successAnimation }) => {


    const { x } = useSpring({
        x: stage,
        config: { mass: 5, tension: 700, friction: 80 },
        delay: 300 * id,
    })

    const { i } = useSpring({
        i: successAnimation ? 0 : 1,
        config: { mass: 5, tension: 600, friction: 200 },
        delay: 1400 + (150 * id),
    })

    const rotate = {

        width: '100%',
        aspectRatio: '1/1',
        transformStyle: 'preserve-3d',
        transform:'rotateY(-90deg) translateX(-50%) rotateY(90deg)',
        rotateY: x.to({ range: [0, 0.5, 1], output: [0, 90, 180] }),
        translateY: i.to({ range: [0, 0.5, 1], output: ['0%', '-50%', '0%'] }),
      
    }


    return (
        <>
            <animated.div style={{
                ...rotate,
            }}>
                <InputSquare select={select || 0} id={id || 0} letter={letter || ''} setSelect={() => { setSelect(id) }} />
                <EmptySquare />
                <FilledSquare background={Object.values(backLetter)[0] || 0} letter={Object.keys(backLetter)[0] || ''} />
            </animated.div>
        </>
    )
}
export default Cube
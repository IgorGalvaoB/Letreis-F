import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles';



const InputSquare = ( { select, id, letter,setSelect } )=>{
    
    const selected = select === id

    const StyBox = styled(Box)(({ theme }) => ({

        boxSizing:'border-box',
        fontWeight:900,
        fontSize:'min(60px,9vw,6vh*(6/8))',
        cursor:'pointer',
        backgroundColor: theme.palette.background.default,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        height:'100%',
        transform:'translateX(-50%) rotateY(-90deg)',
        color:'white',
        border: `min(5px,1vw,0.7vh*(6/8)) solid ${theme.palette.secondary.main}`,
        borderBottom:selected?`min(11px,2.1vw,1.5vh*(6/8)) solid ${theme.palette.secondary.main}`:`min(4px,1vw,0.7vh*(6/8)) solid ${theme.palette.secondary.main}`,
        borderRadius:'min(8px,1vw,0.7vh*(6/8))',
    
    }))

    return(

        <StyBox onClick={setSelect}>
       
                {letter}
           
        </StyBox>

    )
}

export default InputSquare




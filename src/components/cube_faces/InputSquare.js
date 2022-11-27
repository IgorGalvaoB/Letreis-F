import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles';



const InputSquare = ( { select, id, letter,setSelect } )=>{
    
    const selected = select === id

    const StyBox = styled(Box)(({ theme }) => ({

        boxSizing:'border-box',
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
        [theme.breakpoints.up('xs')]:{
            border:'3px solid',
            borderBottom:selected?'6px solid':'3px solid',
            borderRadius: theme.shape.borderRadius * 1,
            borderColor: theme.palette.secondary.main,

        },
        [theme.breakpoints.up('phone')]:{
            
            border:'5px solid',
            borderBottom:selected?'10px solid':'5px solid',
            borderRadius: theme.shape.borderRadius * 1.5,
            borderColor: theme.palette.secondary.main,

        },
        [theme.breakpoints.up('tablet')]:{
            
            border:'6px solid',
            borderBottom:selected?'12px solid':'6px solid',
            borderRadius: theme.shape.borderRadius * 2,
            borderColor: theme.palette.secondary.main,

        },
    
    }))

    return(

        <StyBox onClick={setSelect}>
            <Typography variant='h2'>
                {letter}
            </Typography>
        </StyBox>

    )
}

export default InputSquare




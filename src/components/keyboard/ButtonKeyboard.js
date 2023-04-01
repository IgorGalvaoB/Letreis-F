import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BackspaceIcon from '@mui/icons-material/Backspace';
const ButtonKeyboard = ({ background, letter })=>{
    const theme = useTheme()
    const aspect = letter === 'DEL'?'2/1':(letter==='ENTER'?'2/1':'1/1')
    const backgroundColor = ()=>{
       
        switch(background){


            case 1: return theme.palette.warning.main;
        
            case 2: return theme.palette.success.main;
                    
            default: return theme.palette.secondary.main;

        }
    }
   
    const StyBox = styled(Box)(({ theme })=>({
        
        cursor:'pointer',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor: `${backgroundColor()}`,
        opacity: background===null?0.5:1,
        backfaceVisibility: 'hidden',
        alignItems:'center',
        height:'100%',
        aspectRatio:aspect,
        color:theme.palette.common.white,
        borderRadius:'min(8px,1vw,0.7vh*(6/8))',
    
    }))
  
    return(

        <StyBox>
            {letter!=='DEL'&&<Typography variant='gameGrid' sx={{fontSize:'20px'}}>
                {letter}
            </Typography>}
            {letter==='DEL'&&<BackspaceIcon sx={{fontSize:'15px', transform:'traslanteX(90px)'}}/>}
        </StyBox>

    )
}

export default ButtonKeyboard
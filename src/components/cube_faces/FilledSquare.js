import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FilledSquare = ({ background, letter })=>{
    const theme = useTheme()
    
    const backgroundColor = ()=>{
       
        switch(background){

            case 1: return theme.palette.warning.main;
        
            case 2: return theme.palette.success.main;
                    
            default: return theme.palette.secondary.main;

        }
    }
   
    const StyBox = styled(Box)(({ theme })=>({
        
        transform:'rotateY(90deg) translateX(50%) rotateY(90deg)' ,
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor: `${backgroundColor()}`,
        opacity: '1',
        backfaceVisibility: 'hidden',
        position: 'absolute',
        height: '100%',
        aspectRatio:'1/1',
        color:theme.palette.common.white,
        borderRadius:'min(8px,1vw,0.7vh*(6/8))',
    
    }))
  
    return(

        <StyBox>
            <Typography variant='gameGrid'>
                {letter.toUpperCase()}
            </Typography>
        </StyBox>

    )
}

export default FilledSquare
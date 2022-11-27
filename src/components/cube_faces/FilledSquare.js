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
        color:'white',
        [theme.breakpoints.up('xs')]:{
            
            borderRadius: theme.shape.borderRadius * 1,

        },
        [theme.breakpoints.up('phone')]:{
            
            borderRadius: theme.shape.borderRadius * 1.5,

        },
        [theme.breakpoints.up('tablet')]:{
            
            borderRadius: theme.shape.borderRadius * 2,

        },
    
        

    }))
  
    return(

        <StyBox>
            <Typography variant='h2'>
                {letter}
            </Typography>
        </StyBox>

    )
}

export default FilledSquare
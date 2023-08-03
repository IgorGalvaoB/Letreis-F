import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const EmptySquare = ()=>{
    
    const StyBox = styled(Box)(({ theme }) => ({
          
        backgroundColor: theme.palette.cubes.emptyCube,
        opacity: '0.7',
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        aspectRatio:'1/1',
        transform:'rotateY(-90deg) translateX(50%) rotateY(90deg)',
        borderRadius:'min(8px,1vw,0.7vh*(6/8))',
    
    }))

    return(
       <StyBox/> 
    )

}
export default EmptySquare


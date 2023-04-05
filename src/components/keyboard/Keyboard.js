import Grid from '@mui/material/Unstable_Grid2';
import ButtonKeyboard from './ButtonKeyboard';
import { Container } from '@mui/material';


const Keyboard = ({ keys,word, select, setSelect,setWord }) => {

   
    const boardLine1 = Object.entries(keys).slice(0, 10).map((item, index) => {

        return (
            <Grid key={item[0]} xs={1}>
                <ButtonKeyboard background={item[1]} letter={item[0]} word={word} select={select} setSelect={setSelect} setWord={setWord}></ButtonKeyboard>
            </Grid>
        )
    })
    const boardLine2 = Object.entries(keys).slice(10, 20).map((item, index) => {
        
        return (
            <Grid key={item[0]} xs={item[0]==='DEL'?2:1}>
                <ButtonKeyboard background={item[1]} letter={item[0]} word={word} select={select} setSelect={setSelect} setWord={setWord} ></ButtonKeyboard>
            </Grid>
        )
    })
    const boardLine3 = Object.entries(keys).slice(20, 30).map((item, index) => {

        return (
            <Grid key={item[0]} xs={item[0]==='ENTER'?2:1} >
                <ButtonKeyboard background={item[1]} letter={item[0]} word={word} select={select} setSelect={setSelect} setWord={setWord}></ButtonKeyboard>
            </Grid>
        )
    })


    return (
        <Container sx={{ width: 'min(70%,100vw,30vh*(12/3))',aspectRatio:'11/3', padding:'0px'}} >
            <Grid  columns={12} sx={{ width: 'min(100%,100vw,30vh*(12/3))',margin:'0px'}} container rowSpacing={{xs:0.5,sm:1}} >
                <Grid xs={12}>
                    <Grid container columns={11} xsOffset={0.4} columnSpacing={{xs:0.5, sm:1}}sx={{width:'100%'}}>
                        {boardLine1}
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Grid container columns={11} columnSpacing={{xs:0.7,sm:2}} sx={{width:'100%'}}>
                        {boardLine2}
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Grid container columns={11} xsOffset={0.925} columnSpacing={{xs:0.7,sm:2}} sx={{width:'100%'}}>
                        {boardLine3}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Keyboard


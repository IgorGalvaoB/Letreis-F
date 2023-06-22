
const Themes = {
    lightTheme: {
        keys:['xs','phone','tablet','sm','md','lg','xl'],
        breakpoints:{
            values:{
                xs:0,
                phone:330,
                tablet:450,
                sm:650,
                md:900,
                lg:1200,
                xl:1536,
            }
        },
        typography:{
            h3:{
                fontFamily:'baloo-regular',
                fontWeight:900,
                fontSize: 'min(5vh,50px,5vw)'
                

            },
            gameGrid:{
                fontFamily:'baloo-regular',
                fontWeight:900,
                fontSize:'min(70px,10vw,(0.55vh*(6/8))*9)',
                userSelect:'none',
            },
            gameKeyboard:{
                fontFamily:'baloo-regular',
                fontWeight:900,
                userSelect:'none',
                fontSize:/* 'min(2px,3vw,(0.40vh*(2/11))' */'min(22px,3vw,4vh)',
            },
            title:{
                fontFamily:'baloo-regular',
                fontWeight:900,
                fontSize:'4.5vh',
                userSelect:'none',
            },

        },
        palette: {
            mode: 'light',
            primary: {
                main: '#635C51',
            },
            secondary:{
                main:'#635C4E',
            },
            warning:{
                main:'#F7B816'
            },
            background: {
                default: '#7CA4B8'//'#A7A1B3',//'#B0A990',
            },
        },
        
    },

  
}

export default Themes
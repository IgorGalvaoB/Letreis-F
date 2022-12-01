
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
            gameGrid:{
                fontFamily:[
                    'Nerko-one'
                  ].join(','),
                fontWeight:900,
                fontSize:'min(70px,14vw,(0.65vh*(6/8))*14)',
            }
        },
        palette: {
            mode: 'light',
            primary: {
                main: '#635C51',
            },
            secondary:{
                main:'#635C4E',
            },
            background: {
                default: '#B0A990',
            },
        },
        
    },

  
}

export default Themes
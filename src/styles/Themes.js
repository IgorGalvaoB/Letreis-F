const Themes = {
    lightTheme: {
        keys:['xs','phone','tablet','sm','md','lg','xl'],
        breakpoints:{
            values:{
                xs:0,
                phone:330,
                tablet:450,
                sm:600,
                md:900,
                lg:1200,
                xl:1536,
            }
        },
        typography:{
            gameGrid:{
                fontWeight:900,
                fontSize:'min(60px,9vw,6vh*(6/8))',
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

    darkTheme: {
        keys:['xs','sm','lsm','md','lg','xl'],
        breakpoints:{
            values:{
                xs:0,
                sm:600,
                lsm:750,
                md:900,
                lg:1200,
                xl:1536,
            }
        },
        palette: {
            mode: 'dark',
            primary: {
                main: '#7D746',
            },
        },
        shape:{
            border:{
                xs: '4px solid',
                xs2: '8px solid',
                lsm: '6px solid',
                lsm2: '12px solid',
                md: '9px solid',
                md2: '18px solid',
            }
        }
    }
}

export default Themes
import Letreis from './Letreis.js';
import Themes from '../styles/Themes.js';
import { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'

export const ThemeContext = createContext({})

const ToggleThemeLetrix = () => {

    const typeTheme = localStorage.getItem('LetreisConfig')?localStorage.getItem('LetreisConfig'):'light'
    const [selectedTheme, setSelectedTheme] = useState(typeTheme==='light'?Themes.lightTheme:Themes.darkTheme)

    const toggleTheme = () => {
        setSelectedTheme((preTheme) => preTheme.palette.mode === 'dark' ? Themes.lightTheme : Themes.darkTheme)
        const theme = selectedTheme === Themes.lightTheme? 'dark':'light'
        localStorage.setItem('LetreisConfig',theme)
    }
    const theme = createTheme(selectedTheme)


    return (
        <ThemeContext.Provider value={toggleTheme}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Letreis></Letreis>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ToggleThemeLetrix
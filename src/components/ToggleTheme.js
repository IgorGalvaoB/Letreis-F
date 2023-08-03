import Letreis from './Letreis.js';
import Themes from '../styles/Themes.js';
import { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'

export const ThemeContext = createContext({})

const ToggleThemeLetrix = () => {
    const [selectedTheme, setSelectedTheme] = useState(Themes.darkTheme)

    const toggleTheme = () => {
        setSelectedTheme((preTheme) => preTheme.palette.mode === 'dark' ? Themes.lightTheme : Themes.darkTheme)
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
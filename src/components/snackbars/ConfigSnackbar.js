import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { ThemeContext } from "../ToggleTheme";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useTheme } from '@mui/material/styles';

export default function AlertDialog({ config, setConfig }) {
    const theme = React.useContext(ThemeContext)
    const actualTheme = useTheme()
    
    const colorTheme = actualTheme.palette.mode==='light'?true:false

    const handleClose = () => {
        setConfig(false);
    };
    const [checked, setChecked] = React.useState(colorTheme);
    const handleClosed = (event) => {
        setChecked(event.target.value);
    };
    const handleChange = (event) => {
        theme()
        setChecked(event.target.checked);
    };

    return (
        <div>
            <Dialog
                open={config}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{ sx: { borderRadius: 'min(8px,1vw,0.7vh*(6/8))', width: 'max(15%,300px)',backgroundColor:colorTheme?'#635C4E':'#3F3F3F'} }}

            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant='gameKeyboard' sx={{ color: 'black' }}>
                        Configurações
                    </Typography>
                </DialogTitle>
                <DialogContent>
                        
                    <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography variant='config' sx={{color:colorTheme?"#000000":"#FFFFFF"}}>
                            {colorTheme?'Modo escuro':'Modo claro'}
                        </Typography>
                        <Switch checked={checked}
                            onChange={handleChange}
                            sx={{
                                width: '52px',
                                height: '28px',
                                padding: '4px',
                                '& .MuiSwitch-switchBase': {
                                    marginTop: '3px',
                                    padding: '0px',
                                    transform: 'translateX(30px)',
                                    '&.Mui-checked': {
                                        color: '#fff',
                                        transform: 'translateX(0px)',
                                        '& .MuiSwitch-thumb:before': {
                                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                                                '#fff',
                                            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                                        },
                                        '& + .MuiSwitch-track': {
                                            opacity: 1,
                                            backgroundColor: '#8796A5',
                                        },
                                    },
                                },
                                '& .MuiSwitch-thumb': {
                                    backgroundColor: colorTheme?'#000000':"#FFFFFF",
                                    width: '22px',
                                    height: '22px',
                                    '&:before': {
                                        content: "''",
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        left: 0,
                                        top: 0,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                                            colorTheme?"#FFFFFF":'#000000',
                                        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
                                    },
                                },
                                '& .MuiSwitch-track': {
                                    opacity: 1,
                                    backgroundColor: '#8796A5',
                                    borderRadius: 10 / 2,
                                },
                            }} />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography variant='config' sx={{color:colorTheme?"#000000":"#FFFFFF"}}>
                            Alto contraste
                        </Typography>
                        <Switch 
                            
                            sx={{
                                width: '52px',
                                height: '28px',
                                padding: '4px',
                                '& .MuiSwitch-switchBase': {
                                    marginTop: '3px',
                                    padding: '0px',
                                    transform: 'translateX(30px)',
                                    '&.Mui-checked': {
                                        color: '#fff',
                                        transform: 'translateX(0px)',
                                        
                                        '& + .MuiSwitch-track': {
                                            opacity: 1,
                                            backgroundColor: '#8796A5',
                                        },
                                    },
                                },
                                '& .MuiSwitch-thumb': {
                                    backgroundColor: colorTheme?'#000000':"#FFFFFF",
                                    width: '22px',
                                    height: '22px',
                                    '&:before': {
                                        content: "''",
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        left: 0,
                                        top: 0,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    },
                                },
                                '& .MuiSwitch-track': {
                                    opacity: 1,
                                    backgroundColor: '#8796A5',
                                    borderRadius: 10 / 2,
                                },
                            }} />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
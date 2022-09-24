import {createTheme} from "@mui/material";
import {ruRU} from '@mui/x-data-grid/locales/ruRU';
import {ruRU as coreRuRU} from '@mui/material/locale';

const theme = createTheme({
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
        palette: {
            secondary: {
                light: "#33eba7",
                main: "#00e793",
                dark: "#14cc89"
            },
            primary: {
                light: "#4d97ff",
                main: "#176DEA",
                dark: "#055fe0"
            }
        }
    },
    ruRU,
    coreRuRU
);

export default theme;

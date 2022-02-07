import { createTheme } from '@mui/material/styles';
import { purple, indigo } from '@mui/material/colors';

export const Theme = createTheme({
        palette: {
            primary: {
                main: purple[700],
                price: indigo[600]
            },
            secondary: {
                main: '#f44336',
            },
        },
    });
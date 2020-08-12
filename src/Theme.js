import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { light: '#d3bcc0', main: '#f34925', dark: '#69306D' },
    },
    app: {
        white: '#fff',
        grey: '#dbdbdb',
        yellow: '#ebb734',
        red: '#e33030',
        blue: '#3330e3',
        green: '#1fab26',
    },
    overrides: {
        MuiInputLabel: {
            root: {
                fontSize: '1.4rem',
            },
        },
        MuiTextField: {
            root: {
                fontSize: '1.4rem',
            },
        },
        MuiInputBase: {
            input: {
                fontSize: '1.4rem',
            }
        }
    },
});

export default theme;

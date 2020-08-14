import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { light: '#d3bcc0', main: '#ff4500', dark: '#5d1dd4' },
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
        },
        MuiSvgIcon: {
            root: {
                fontSize: '2.4rem',
            }
        },
        MuiTypography: {
            body1: {
                fontSize: '1.4rem',
            },
            body2: {
                fontSize: '1.2rem',
            }
        },
    },
});

export default theme;

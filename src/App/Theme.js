import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: { light: "", main: "#FF8BE3", dark: "#FF64E3" },
    secondary: { light: "", main: "#0DDFFD", dark: "#00aec7" },
  },
  app: {
    white: "#fff",
    grey: "#dbdbdb",
    yellow: "#ebb734",
    red: "#e33030",
    blue: "#3330e3",
    green: "#1fab26",
  },
  typography: {
    fontFamily: `"Gabriela", serif`,
    htmlFontSize: 10,
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: "1.4rem",
      },
    },
    MuiTextField: {
      root: {
        fontSize: "1.4rem",
      },
    },
    MuiInputBase: {
      input: {
        fontSize: "1.4rem",
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "2.4rem",
      },
    },
    MuiTypography: {
      body1: {
        fontSize: "1.4rem",
      },
      body2: {
        fontSize: "1.2rem",
      },
    },
  },
});

export default theme;

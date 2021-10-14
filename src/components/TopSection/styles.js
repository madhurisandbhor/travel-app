import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topSection: {
    height: "10rem",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.app.white,
    lineHeight: 1.6,
    fontFamily: '"Gabriela", serif',
  },
  title: {
    fontSize: "3rem",
    fontWeight: "600",
    letterSpacing: "0.05rem",
  },
  subText: {
    fontSize: "2rem",
  },
}));

export default useStyles;

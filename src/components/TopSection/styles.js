import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topSection: {
    height: "10rem",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.app.black,
    lineHeight: 1.6,
    fontFamily: '"Gabriela", serif',
    width: "80%",
    margin: "3rem 0",
  },
  title: {
    fontSize: "2.4rem",
    fontWeight: "600",
    letterSpacing: "0.05rem",
  },
  subText: {
    fontSize: "2rem",
  },
}));

export default useStyles;

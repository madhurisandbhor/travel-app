import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wraper: {
    minHeight: "5.5rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.app.white,
    background: "linear-gradient(90deg, #0ddffd 0%, #ff8be3 100%)",
    fontFamily: '"Gabriela", serif',
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(90deg, #0ddffd 0%, #ff8be3 100%)",
  },
  hidden: {
    visibility: "hidden",
  },
  sliderContainer: {
    width: "80%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoFlow: "row",
    gridGap: "2rem",
    margin: "2rem auto",
    "@media(max-width: 1024px) and (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "@media(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    width: "100%",
    height: "30rem",
    display: "flex",
    flexDirection: "column",
    border: "0.8rem solid white",
    position: "relative",
    borderRadius: 0,
    borderBottomWidth: '2.4rem',
    background: 'lightgrey',
    "&:hover": {
      cursor: "pointer",
    },
    "& > img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "all 0.5s ease-in-out",
      zIndex: 0,
      "&:hover": {
        transform: "scale(1.1)",
        overflow: "hidden",
      },
    },
  },
  name: {
    zIndex: 99,
    fontWeight: "bold",
    color: theme.app.white,
    fontSize: "1.8rem",
    letterSpacing: "0.1rem",
    position: "absolute",
    bottom: "1rem",
    left: "2rem",
  },
  content: {
    background:
      "linear-gradient(to bottom, rgba(250, 250, 250, 0), black 100%)",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "20%",
    width: "100%",
  },
}));

export default useStyles;

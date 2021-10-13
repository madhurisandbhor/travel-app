import React, { useState, useEffect, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import asia from "images/Asia.jpg";
import africa from "images/Africa.jpg";
import antarctica from "images/Antarctica.jpg";
import europe from "images/Europe.jpg";
import oceania from "images/Insular Oceania.jpg";
import north_america from "images/North America.jpg";
import south_america from "images/South America.jpg";
import LoadingIndicator from "components/LoadingIndicator";
import { InfoContext } from "app/InfoContext";
import { useHttp } from "./useHttp";
import theme from "app/Theme";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
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
  },
  card: {
    width: "100%",
    height: "30rem",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    "& > hover": {},
  },
  name: {
    zIndex: 99,
    // color: theme.app.white,
    fontSize: "1.8rem",
  },
  img: {
    width: "100%",
    height: "70%",
    objectFit: "cover",
  },
  topSection: {
    height: "10rem",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.app.white,
  },
  title: {
    fontSize: "3rem",
    fontWeight: "500",
  },
  subText: {
    fontSize: "2rem",
  },
}));

const images = [
  asia,
  africa,
  antarctica,
  europe,
  north_america,
  oceania,
  south_america,
];

const Dashboard = () => {
  const classes = useStyles();
  const [continentsList, setContinentsList] = useState([]);
  const [UpdatedcontinentsList, setUpdatedContinentsList] = useState([]);
  const { info, setInfo } = useContext(InfoContext);
  const history = useHistory();
  const url = "https://api.everbase.co/graphql?apikey=your_key";
  const query = `{
        continents {
            id
            name
            population
            countries {
              id
            }
        }
    }`;

  const { isLoading, data, error } = useHttp(url, query);

  const getContinentInfo = useCallback(
    (continentSelected) => {
      setInfo({
        ...info,
        continentSelected: continentSelected,
      });
      history.push(`/continents/${continentSelected.name}`);
    },
    [history, info, setInfo]
  );

  useEffect(() => {
    if (data !== null) {
      setContinentsList(data.continents);
    }
  }, [data]);

  useEffect(() => {
    //update list with respective images as images are not provided by backend
    const tempList = [...continentsList];
    const listWithImages = tempList.map((continent) => {
      images.length > 0 &&
        images.forEach((image) => {
          if (
            image.includes("/") &&
            image
              .split("/")[3]
              .toString()
              .toLowerCase()
              .includes(continent.name.toLowerCase())
          )
            continent.img = image;
        });
      return continent;
    });
    setUpdatedContinentsList(listWithImages);
  }, [continentsList]);

  return (
    <div className={classes.root}>
      <div className={classes.topSection}>
        <div className={classes.title}>Explore world with US!</div>
        <div className={classes.subText}></div>
        Locate your next travel destination and create your itinerary
      </div>
      {isLoading && <LoadingIndicator />}
      {error && <div>{error}</div>}
      {!isLoading && (
        <div className={classes.sliderContainer}>
          {UpdatedcontinentsList.length > 0 &&
            UpdatedcontinentsList.map((continent, index) => (
              <Card
                className={classes.card}
                key={continent.id}
                onClick={(event) => getContinentInfo(continent, event)}
              >
                <img
                  className={classes.img}
                  src={continent.img}
                  alt={continent.name}
                />
                <div className={classes.name}>{continent.name}</div>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

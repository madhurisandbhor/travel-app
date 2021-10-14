import React, { useState, useEffect, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
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
import { useHttp } from "hooks/useHttp";
import TopSection from "components/TopSection";
import useStyles from "./styles";

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
      <TopSection />
      {isLoading && <LoadingIndicator />}
      {error && <div>{error}</div>}
      {!isLoading && (
        <div className={classes.sliderContainer}>
          {UpdatedcontinentsList.length > 0 &&
            UpdatedcontinentsList.map((continent) => (
              <Card
                className={classes.card}
                key={continent.id}
                onClick={(event) => getContinentInfo(continent, event)}
              >
                <img src={continent.img} alt={continent.name} />
                <div className={classes.name}>{continent.name}</div>
                <div className={classes.content}></div>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

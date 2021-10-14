import React, { useContext, useCallback, memo } from "react";
import Header from "components/Header";
import Toolbar from "../../components/Header/Toolbar";
import { InfoContext } from "app/InfoContext";
import useStyles from "./styles";

const AppHeader = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { info, setInfo } = useContext(InfoContext);

  const handleDrawerOpen = useCallback(() => {
    setInfo({
      ...info,
      notificationToggle: false,
    });
    setOpen(true);
  }, [info, setInfo]);

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onDeleteCity = useCallback(
    (cityName) => {
      let infoArray = [...info.citiesAddedByUser];
      infoArray = infoArray.filter((city) => city.name !== cityName);
      setInfo({
        ...info,
        citiesAddedByUser: infoArray,
      });
    },
    [info, setInfo]
  );

  const onDeleteAllCities = useCallback(() => {
    setInfo({
      ...info,
      citiesAddedByUser: [],
    });
  }, [info, setInfo]);

  return (
    <header className={classes.wraper}>
      <Header />
      <Toolbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        notificationToggle={info.notificationToggle}
        onDeleteCity={onDeleteCity}
        onDeleteAllCities={onDeleteAllCities}
      />
    </header>
  );
};

export default memo(AppHeader);

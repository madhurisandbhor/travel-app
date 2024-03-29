import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";
import { Popup } from "react-leaflet";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";
import { InfoContext } from "app/InfoContext";

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
`;

const City = styled.b`
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.palette.secondary.main};
`;

const MoreOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Button = withStyles((theme) => ({
  root: {
    fontSize: "1.6rem",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    },
    padding: ".2rem",
  },
}))(IconButton);

const Text = withStyles((theme) => ({
  root: {
    margin: "1rem 0 .5rem 0",
  },
}))(TextField);

const MapInfoWindow = ({ selected, onCloseClick }) => {
  const { info, setInfo } = useContext(InfoContext);

  const [isCityAdded, setIsCityAdded] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date().toISOString().split("T")[0]
  );

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const onAddCity = () => {
    const updatedCity = {
      ...selected,
      locationSelected: true,
      selectedDate: selectedDate,
    };
    setInfo({
      ...info,
      citiesAddedByUser: [...info.citiesAddedByUser, updatedCity],
      notificationToggle: true,
    });
  };

  const onDelete = () => {
    let infoArray = [...info.citiesAddedByUser];
    infoArray = infoArray.filter((city) => city.name !== selected.name);
    setInfo({
      ...info,
      citiesAddedByUser: infoArray,
    });
  };

  useEffect(() => {
    // update local storage after adding city
    localStorage.setItem(
      "citiesAddedByUser",
      JSON.stringify(info.citiesAddedByUser)
    );
  }, [info]);

  useEffect(() => {
    // after adding update check icon and add/delete button
    const citiesAddedByUser = info.citiesAddedByUser;
    const cityAdded = citiesAddedByUser.some(
      (city) => city.name === selected.name
    );
    setIsCityAdded(cityAdded);
  }, [selected, setIsCityAdded, info]);

  //TODO: change date option, when date is seleted then enable add button

  return (
    <Popup onCloseClick={onCloseClick}>
      <InfoBox>
        <City>{selected.name}</City>
        {!isCityAdded && (
          <>
            <Text
              id="date"
              label="Select date"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: new Date().toISOString().split('T')[0],
              }}
            />
            <Button aria-label="add city" onClick={onAddCity}>
              <AddCircleIcon />
            </Button>
          </>
        )}
        {isCityAdded && (
          <MoreOptions>
            <span>City is added</span>
            <DoneIcon />
            <Button aria-label="delete city" onClick={onDelete}>
              <DeleteIcon />
            </Button>
          </MoreOptions>
        )}
      </InfoBox>
    </Popup>
  );
};

MapInfoWindow.propTypes = {
  selected: PropTypes.object.isRequired,
  onCloseClick: PropTypes.func,
};

export default React.memo(MapInfoWindow);

import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import { InfoWindow } from '@react-google-maps/api';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import { MyContext } from '../../../App';


const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
`;

const City = styled.b`
    margin-bottom: .5rem;
`;

const MoreOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Button = withStyles((theme) => ({
    root: {
        fontSize: '1.6rem',
        color: theme.palette.primary.dark,
        '&:hover': {
            color: theme.palette.primary.main,
        },
        padding: '.2rem',
    },
}))(IconButton);

const MapInfoWindow = ({ selected, onCloseClick }) => {
    const { localState, setLocalState } = useContext(MyContext);
    const [isCityAdded, setIsCityAdded] = useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().split("T")[0]);

    const handleDateChange = event => {
        setSelectedDate(event.target.value);
    };

    const onAddCity = () => {
        const updatedCity = { ...selected, locationSelected: true, selectedDate: selectedDate }
        setLocalState({
            ...localState,
            citiesAddedByUser: [...localState.citiesAddedByUser, updatedCity],
            notificationToggle: true,
        });
    };

    const onDelete = () => {
        let localStateArray = [...localState.citiesAddedByUser];
        localStateArray = localStateArray.filter(city => city.name !== selected.name);
        setLocalState({
            ...localState,
            citiesAddedByUser: localStateArray
        });
    }

    useEffect(() => {
        // update local storage after adding city
        localStorage.setItem('citiesAddedByUser', JSON.stringify(localState.citiesAddedByUser));
    }, [localState]);

    useEffect(() => {
        // after adding update check icon and add/delete button
        const citiesAddedByUser = localStorage.getItem('citiesAddedByUser') ? JSON.parse(localStorage.getItem('citiesAddedByUser')) : localState.citiesAddedByUser;
        const cityAdded = citiesAddedByUser.some(city => (city.name === selected.name));
        setIsCityAdded(cityAdded);
    }, [selected, setIsCityAdded, localState]);

    //TODO: change date option, when date is seleted then enable add button

    return (
        <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={onCloseClick}>
            <InfoBox>
                <City>{selected.name}</City>
                <span>Population : {selected.population}</span>
                {!isCityAdded &&
                    <>
                        <TextField
                            id="date"
                            label="Select date"
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{
                                margin: '1rem 0 .5rem 0'
                            }}
                        />
                        <Button aria-label="add city" onClick={onAddCity}>
                            <AddCircleIcon />
                        </Button>
                    </>
                }
                {isCityAdded &&
                    <MoreOptions>
                        <span>City is added</span>
                        <DoneIcon />
                        <Button aria-label="delete city" onClick={onDelete}>
                            <DeleteIcon />
                        </Button>
                    </MoreOptions>
                }

            </InfoBox>
        </InfoWindow>
    );
}

MapInfoWindow.propTypes = {
    selected: PropTypes.object.isRequired,
    onCloseClick: PropTypes.func,
};

export default React.memo(MapInfoWindow);
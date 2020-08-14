import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InfoWindow } from '@react-google-maps/api';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/core';
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

const AddIcon = withStyles({
    root: {
        fontSize: '2.5rem',
    },
})(AddCircleIcon);

const CheckIcon = withStyles((theme) => ({
    root: {
        fontSize: '2.5rem',
        color: theme.app.green,
    },
}))(DoneIcon);

const CancelIcon = withStyles({
    root: {
        fontSize: '2.5rem',
    },
})(DeleteIcon);


const MapInfoWindow = ({ selected, onCloseClick }) => {
    const { localState, setLocalState } = useContext(MyContext);
    const [isCityAdded, setIsCityAdded] = useState(false);

    const onAddCity = selectedCity => {
        const updatedCity = { ...selectedCity, locationSelected: true }
        setLocalState({
            ...localState,
            citiesAddedByUser: [...localState.citiesAddedByUser, updatedCity]
        });
    };

    useEffect(() => {
        // update local storage after adding city
        localStorage.setItem('citiesAddedByUser', JSON.stringify(localState.citiesAddedByUser));
    }, [localState]);

    useEffect(() => {
        // after adding update check icon and hide add icon
        const citiesAddedByUser = localStorage.getItem('citiesAddedByUser') ? JSON.parse(localStorage.getItem('citiesAddedByUser')) : localState.citiesAddedByUser;
        const cityAdded = citiesAddedByUser.some(city => (city.name === selected.name) || selected.locationSelected)
        setIsCityAdded(cityAdded);
    }, [selected, setIsCityAdded, localState]);

    return (
        <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={onCloseClick}>
            <InfoBox>
                <City>{selected.name}</City>
                <span>Population : {selected.population}</span>
                {!isCityAdded && <Button aria-label="add city" disabled={isCityAdded} onClick={(event) => onAddCity(selected, event)}>
                    <AddIcon />
                </Button>}
                {isCityAdded &&
                    <MoreOptions>
                        <span>City is added</span>
                        <CheckIcon />
                        <Button aria-label="delete city">
                            <CancelIcon />
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
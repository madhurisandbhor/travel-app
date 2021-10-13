import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Toolbar from './Toolbar';
import { InfoContext } from 'app/InfoContext';

const Wrapper = styled.header`
    // background-color: ${props => props.theme.palette.secondary.main};   
    min-height: 5.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.app.white};
`;

const AppHeader = () => {
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

    const onDeleteCity = useCallback((cityName) => {
        let infoArray = [...info.citiesAddedByUser];
        infoArray = infoArray.filter(city => city.name !== cityName);
        setInfo({
            ...info,
            citiesAddedByUser: infoArray,
        });
    }, [info, setInfo]);

    const onDeleteAllCities = useCallback(() => {
        setInfo({
            ...info,
            citiesAddedByUser: [],
        });
    }, [info, setInfo]);

    return (
        <Wrapper>
            <Header />
            <Toolbar
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                notificationToggle={info.notificationToggle}
                onDeleteCity={onDeleteCity}
                onDeleteAllCities={onDeleteAllCities}
            />
        </Wrapper>);
};

export default AppHeader;

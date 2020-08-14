import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Index';
import Toolbar from './Toolbar';
import { MyContext } from '../../App';

const Wrapper = styled.header`
    background-color: ${props => props.theme.palette.primary.dark};   
    min-height: 6.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.app.white};
`;

const AppHeader = () => {
    const [open, setOpen] = React.useState(false);
    const { localState, setLocalState } = useContext(MyContext);

    const handleDrawerOpen = () => {
        setLocalState({
            ...localState,
            notificationToggle: false,
        });
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Wrapper>
            <Header />
            <Toolbar
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                notificationToggle={localState.notificationToggle}
            />
        </Wrapper>);
};

export default AppHeader;

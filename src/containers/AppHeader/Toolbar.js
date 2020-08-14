import React from 'react';
import styled from 'styled-components';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import Badge from '@material-ui/core/Badge';
import ItineraryDrawer from './ItineraryDrawer';

const ToolbarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const useStyles = makeStyles((theme) => ({
    hide: {
        display: 'none',
    },
    open: {
        position: 'absolute',
        top: '-2.5rem',
        right: '2rem',
    },
    customBadge: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
}));

const Toolbar = ({ open, handleDrawerOpen, handleDrawerClose, notificationToggle }) => {
    const classes = useStyles();

    return (
        <ToolbarWrapper>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide, !open && classes.open)}
            >
                <Badge
                    variant="dot"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    classes={{ badge: notificationToggle && classes.customBadge }}
                >
                    <FlightTakeoffIcon />
                    {/* <MenuIcon /> */}
                </Badge>
            </IconButton>
            <ItineraryDrawer open={open} handleDrawerClose={handleDrawerClose} />
        </ToolbarWrapper >);
};

export default React.memo(Toolbar);

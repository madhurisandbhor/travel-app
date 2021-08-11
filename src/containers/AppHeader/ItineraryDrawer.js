import React, { useContext } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { InfoContext } from 'app/InfoContext';

const Title = styled.b`
  align-self: center; 
  color: ${props => props.theme.palette.primary.main};
  margin-left: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;  
  margin: 1.5rem 0;
`;

const Msg = styled.div`
  padding: 2rem;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  button: {
    justifyContent: 'center',
    background: theme.palette.primary.main,
    color: theme.app.white,
    fontSize: '1.1rem',
    '&:hover': {
      background: theme.palette.secondary.main,
    }
  }
}));

const drawerWidth = 270;

const ItineraryDrawer = ({ open, handleDrawerClose, onDeleteCity, onDeleteAllCities }) => {
  const classes = useStyles();
  const { info } = useContext(InfoContext);
  const citiesAddedByUser = info.citiesAddedByUser ? info.citiesAddedByUser : [];

  //TODO : fix backdropclick
  // const toggleDrawer = (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     handleDrawerClose();
  //   }
  // };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    // ModalProps={{ onBackdropClick: toggleDrawer, onEscapeKeyDown: toggleDrawer }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Title>Travel Itinerary</Title>
      </div>
      <Divider />
      {citiesAddedByUser.length !== 0 &&
        <>
          <List>
            {citiesAddedByUser.map((city, index) => (
              <ListItem button key={city.id}>
                <ListItemText primary={`Day ${index + 1}`} />
                <ListItemText primary={city.name} secondary={city.selectedDate} />
                <IconButton onClick={(event) => onDeleteCity(city.name)}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <ButtonWrapper>
            <Button
              variant="contained"
              className={classes.button}
              onClick={onDeleteAllCities}
            >
              Remove all cities
            </Button>
          </ButtonWrapper>
        </>}
      {citiesAddedByUser.length === 0 &&
        <Msg>
          <div>You have 0 cities added to your travel</div>
          <div>Start exploring!!</div>
        </Msg>
      }
    </Drawer>
  );
};

export default React.memo(ItineraryDrawer);
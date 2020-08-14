import React, { useContext } from 'react';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MyContext } from '../../App';

const Title = styled.b`
  align-self: center; 
  color: ${props => props.theme.palette.primary.main};
  margin-left: 2rem;
`;

const drawerWidth = 240;

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
  }
}));

const ItineraryDrawer = ({ open, handleDrawerClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { localState } = useContext(MyContext);
  const citiesAddedByUser = localState.citiesAddedByUser ? localState.citiesAddedByUser : [];

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Title>Travel Itinerary</Title>
      </div>
      <Divider />
      <List>
        {citiesAddedByUser.length > 0 && citiesAddedByUser.map((city, index) => (
          <ListItem button key={city.id}>
            <ListItemText primary={`Day ${index + 1}`} />
            <ListItemText primary={city.name} secondary={city.selectedDate} />
          </ListItem>
        ))}
        {citiesAddedByUser.length === 0 &&
          <div style={{ padding: '2rem' }}>
            <div>You have 0 cities added to your travel</div>
            <div>Start exploring!!</div>
          </div>
        }
      </List>
    </Drawer>
  );
};

export default React.memo(ItineraryDrawer);
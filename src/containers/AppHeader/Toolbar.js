import React from 'react'
import styled from 'styled-components'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/IconButton'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import Badge from '@material-ui/core/Badge'
import ItineraryDrawer from './ItineraryDrawer'

const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '0.5rem',
    padding: '0.8rem',
    '&:hover':{
        color: theme.palette.secondary.main,
        backgroundColor: theme.app.white,
    }
  },
  hide: {
    display: 'none',
  },
  open: {
    position: 'absolute',
    right: '2rem',
  },
  customBadge: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  title: {
    marginLeft: '1rem',
  },
}))

const Toolbar = ({ notificationToggle, handleDrawerOpen, open, ...rest }) => {
  const classes = useStyles()

  return (
    <ToolbarWrapper>
      <Button
        variant="outlined"
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        className={clsx(
          open && classes.hide,
          !open && classes.open,
          classes.button
        )}
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
        </Badge>
        <span className={classes.title}>Travel Itinerary</span>
      </Button>
      <ItineraryDrawer open={open} {...rest} />
    </ToolbarWrapper>
  )
}

export default React.memo(Toolbar)

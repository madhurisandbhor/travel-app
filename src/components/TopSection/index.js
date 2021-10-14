import React, { memo } from "react";
import useStyles from "./styles";

const TopSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.topSection}>
      <div className={classes.title}>Explore the world with US!</div>
      <div className={classes.subText}>
        Locate your next travel destination and create your itinerary
      </div>
    </div>
  );
};

export default memo(TopSection);

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { BarChart, Pets, Settings } from "@material-ui/icons";
import React, { useState } from "react";
import useStyles from "./useStyles";

const BottomNav: React.FC = () => {
  const [value, setValue] = useState();
  const classes = useStyles();

  const onItemClicked = (event: any, newValue: string) => {
    window.location.href = `./#/${newValue}`;
  };

  return (
    <BottomNavigation
      value={value}
      onChange={onItemClicked}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="My Pets"
        value="dashboard"
        icon={<Pets />}
      />
      <BottomNavigationAction
        label="Statistics"
        value="stats"
        icon={<BarChart />}
      />
      <BottomNavigationAction
        label="Settings"
        value="create"
        icon={<Settings />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;

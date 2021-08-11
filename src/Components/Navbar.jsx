import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    height: 78,
    backgroundColor: "#FA9C1D",
  },
  navbarContent: {
    display: "flex",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 50,
  },
  logo: {
    height: 55,
    width: 52.44,
  },
  text: {
    color: "#FFF",
    fontSize: 24,
    marginLeft: -30,
    fontFamily: "Sathu",
    alignSelf: "flex-end",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarContent}>
        <img
          className={classes.logo}
          src="/fire_strike.png"
          alt="hammerwatch logo"
        />
        <Typography className={classes.text}>HAMMERWATCH</Typography>
      </div>
    </div>
  );
};

export default Navbar;

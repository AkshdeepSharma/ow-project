import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, Typography } from "@material-ui/core";
import Profile from "./Components/Profile";
import TextFieldInput from "./Components/TextFieldInput";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "50px",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "40px",
  },
}));

const App = () => {
  const classes = useStyles();
  const { profile } = useSelector((state) => state.profile);

  return (
    <div className={classes.root}>
      <Typography>Overwatch Rank Looker Upper</Typography>
      <div className={classes.content}>
        <TextFieldInput label="BattleTag#1234" />
      </div>
      {profile && <Profile />}
    </div>
  );
};

export default App;

import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Profile from "./Components/Profile";
import TextFieldInput from "./Components/TextFieldInput";
import Navbar from "./Components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#4A4C4E",
    height: 900,
  },
  textField: {
    display: "flex",
    justifyContent: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  const { profile } = useSelector((state) => state.profile);

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.textField}>
        <TextFieldInput label="Battletag#1234" />
      </div>
      {profile && <Profile />}
    </div>
  );
};

export default App;

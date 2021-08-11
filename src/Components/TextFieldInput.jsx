import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, InputBase, makeStyles, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { changeBattleTag } from "../redux/ducks/profile";
import { getProfile } from "../redux/ducks/profile";

const useStyles = makeStyles({
  root: {
    padding: "2px 10px",
    width: "40%",
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    height: 48,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

const TextFieldInput = (props) => {
  const { label } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const battleTag = useSelector((state) => state.profile.battleTag);

  const handleChange = (e) => {
    dispatch(changeBattleTag(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (battleTag.includes("#")) {
      const platform = "pc";
      const region = "global";
      dispatch(getProfile({ platform, region, battleTag }));
    } else {
      const platform = "xbl";
      const region = "global";
      dispatch(getProfile({ platform, region, battleTag }));
    }
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        placeholder={label}
        inputProps={{ "aria-label": "search battletag" }}
        onChange={handleChange}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default TextFieldInput;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBattleTag } from "../redux/ducks/profile";
import { Button, TextField } from "@material-ui/core";
import { getProfile } from "../redux/ducks/profile";

const TextFieldInput = (props) => {
  const { label } = props;
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
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default TextFieldInput;

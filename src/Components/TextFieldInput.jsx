import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeBattleTag, changeProfile } from "../redux/profile";
import { Button, TextField } from "@material-ui/core";

const TextFieldInput = (props) => {
  const { label } = props;
  const dispatch = useDispatch();
  const platform = useSelector((state) => state.profile.platform);
  const region = useSelector((state) => state.profile.region);
  const battleTag = useSelector((state) => state.profile.battleTag);

  const handleChange = (e) => {
    dispatch(changeBattleTag(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://owapi.io/profile/${platform}/${region}/${
          battleTag.split("#")[0]
        }-${battleTag.split("#")[1]}`
      )
      .then((res) => {
        const responseData = res.data;
        dispatch(changeProfile(responseData));
      });
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

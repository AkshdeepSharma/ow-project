import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeBattleTag, changeProfile } from "../redux/data";
import { Button, TextField } from "@material-ui/core";

const TextFieldInput = (props) => {
  const { label } = props;
  const dispatch = useDispatch();
  const platform = useSelector((state) => state.data.platform);
  const region = useSelector((state) => state.data.region);
  const battleTag = useSelector((state) => state.data.battleTag);

  const handleChange = (e) => {
    dispatch(changeBattleTag(e.target.value));
  };

  const handleSubmit = () => {
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
    <div>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default TextFieldInput;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeBattleTag, changeProfile } from "../redux/profile";
import { Button, TextField } from "@material-ui/core";
import { API_URL } from "../Constants/constants";

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
      axios
        .get(
          API_URL +
            `${platform}/${region}/${battleTag.split("#")[0]}-${
              battleTag.split("#")[1]
            }`
        )
        .then((res) => {
          const responseData = res.data;
          dispatch(changeProfile(responseData));
        });
    } else {
      const region = "global";
      let platform = "xbl";
      axios.get(API_URL + `${platform}/${region}/${battleTag}`).then((res) => {
        const responseData = res.data;
        console.log("xbl");
        console.log(responseData);
        if (!responseData.message) {
          dispatch(changeProfile(responseData));
        } else {
          let platform = "psn";
          axios
            .get(API_URL + `${platform}/${region}/${battleTag}`)
            .then((res) => {
              const responseData = res.data;
              console.log("psn");
              console.log(responseData);
              dispatch(changeProfile(responseData));
            });
        }
      });
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

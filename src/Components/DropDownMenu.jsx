import React from "react";
import { useDispatch } from "react-redux";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { changePlatform, changeRegion } from "../redux/data";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));

const DropDownMenu = (props) => {
  const classes = useStyles();
  const { title, data, currVal } = props;
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    title === "Platform"
      ? dispatch(changePlatform(e.target.value))
      : dispatch(changeRegion(e.target.value));
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>{title}</InputLabel>
        <Select value={currVal || ""} onChange={handleOnChange}>
          {data.map((data) => (
            <MenuItem key={data.value} value={data.value}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownMenu;

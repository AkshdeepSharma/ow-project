import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));

const DropDownMenu = (props) => {
  const classes = useStyles();
  const { title, data } = props;
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>{title}</InputLabel>
        <Select>
          {data.map((data) => (
            <MenuItem value={data.value}>{data.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownMenu;

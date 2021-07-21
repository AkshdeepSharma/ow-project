import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { changeBattleTag } from "../redux/data";

const useStyles = makeStyles((theme) => ({
  textField: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const TextFieldInput = (props) => {
  const { label } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <form className={classes.textField} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        onInput={(e) => dispatch(changeBattleTag(e.target.value))}
      />
    </form>
  );
};

export default TextFieldInput;

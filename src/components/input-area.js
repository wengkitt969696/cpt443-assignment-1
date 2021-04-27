import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginLeft: 9,
      width: "25ch",
    },
  },
}));

export const TextInputArea = ({ setInputText }) => {
  const classes = useStyles();
  let timeout = null;

  return (
    <div className={classes.root}>
      <Typography
        style={{ margin: 0, marginLeft: 20, marginTop: 10, color: "#22223b" }}
      >
        Text Input
      </Typography>
      <div style={{ marginTop: 6 }}>
        <TextField
          multiline
          rows={7}
          variant="outlined"
          onChange={(event) => {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
              setInputText(event.target.value);
            }, 100);
          }}
          style={{
            background: "#f2e9e4",
            borderRadius: 5,
            width: 601,
          }}
        />
      </div>
    </div>
  );
};

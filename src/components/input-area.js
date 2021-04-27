import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const TextInputArea = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{ marginTop: 6 }}>
        <TextField
          label="Input Text"
          multiline
          rows={7}
          variant="outlined"
          style={{
            background: "#f2e9e4",
            borderRadius: 5,
            width: 600,
          }}
        />
      </div>
    </form>
  );
};

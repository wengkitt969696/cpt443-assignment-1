import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
}));

export const Loading = ({ load }) => {
  const classes = useStyles();
  return (
    <div style={{ position: "absolute" }}>
      <Modal open={load}>
        <div className={classes.paper}>
          <CircularProgress color={"inherit"} />
        </div>
      </Modal>
    </div>
  );
};

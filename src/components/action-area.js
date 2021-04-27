import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ReplayIcon from "@material-ui/icons/Replay";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";

export const ActionArea = () => {
  return (
    <div
      style={{
        width: 600,
        height: 100,
        marginTop: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: 100,
            width: 230,
            background: "#22223b",
            borderRadius: 5,
            marginLeft: 8,
          }}
        >
          <div>
            <Typography
              style={{
                margin: 10,
                color: "#f2e9e4",
                fontSize: 13,
              }}
            >
              Total Word:
            </Typography>
            <Typography style={{ margin: 10, color: "#f2e9e4", fontSize: 13 }}>
              Total Accepted Word:
            </Typography>
            <Typography style={{ margin: 10, color: "#f2e9e4", fontSize: 13 }}>
              Total Rejected Word:
            </Typography>
          </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <Button
            style={{ marginRight: 12, color: "#22223b" }}
            variant="contained"
            color="default"
            startIcon={<ReplayIcon />}
          >
            Reset
          </Button>

          <Button
            style={{ marginRight: 10, background: "#22223b", color: "#f2e9e4" }}
            variant="contained"
            color="default"
            startIcon={<PlayCircleOutlineIcon />}
          >
            Start DFA
          </Button>
        </div>
      </div>
    </div>
  );
};

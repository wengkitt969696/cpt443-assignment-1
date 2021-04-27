import React from "react";
import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Typography from "@material-ui/core/Typography";

export const ActionArea = ({
  startDFA,
  resetDFA,
  disableAction,
  numberString,
}) => {
  return (
    <div
      style={{
        width: 600,
        height: 100,
        marginTop: 10,
        paddingBottom: 8,
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
              Total Word: {numberString.total}
            </Typography>
            <Typography style={{ margin: 10, color: "#f2e9e4", fontSize: 13 }}>
              Total Accepted Word: {numberString.accept}
            </Typography>
            <Typography style={{ margin: 10, color: "#f2e9e4", fontSize: 13 }}>
              Total Rejected Word: {numberString.reject}
            </Typography>
          </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <Button
            style={{ marginRight: 12, color: "#22223b" }}
            variant="contained"
            color="default"
            startIcon={<ReplayIcon />}
            onClick={() => resetDFA()}
            disabled={disableAction}
          >
            Reset
          </Button>

          <Button
            style={{ marginRight: 10, color: "#22223b" }}
            variant="contained"
            color="default"
            startIcon={<PlayCircleOutlineIcon />}
            onClick={() => startDFA()}
            disabled={disableAction}
          >
            Start DFA
          </Button>
        </div>
      </div>
    </div>
  );
};

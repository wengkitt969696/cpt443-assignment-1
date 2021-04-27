import React from "react";
import Typography from "@material-ui/core/Typography";

export const ResultArea = ({ resultText }) => {
  return (
    <div>
      <Typography
        style={{ margin: 0, marginLeft: 20, marginTop: 10, color: "#22223b" }}
      >
        Result
      </Typography>

      <div
        style={{
          marginTop: 10,
          marginLeft: 9,
          height: 170,
          width: 600,
          background: "#f2e9e4",
          borderRadius: 5,
          overflowY: "auto",
        }}
      >
        <div
          style={{
            padding: 15,
            textAlign: "justify",
          }}
        >
          {resultText.map((data, index) => {
            return (
              <div
                key={index}
                style={{
                  color: data.status === "accept" ? "green" : "red",
                  display: "inline",
                }}
              >
                {data.word + " "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

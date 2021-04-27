import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    backgroundColor: "#4a4e69",
    overflow: "auto",
    maxHeight: 500,
    marginTop: 14,
    marginBottom: 14,
    borderRadius: 5,
  },
}));

export const LanguageBar = ({ wordList }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ padding: 15, background: "#22223b" }}>
        <Typography style={{ color: "#f2e9e4" }}>Language</Typography>
      </div>
      <List style={{ paddingTop: 0 }}>
        {wordList.map((data, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText style={{ color: "#f2e9e4" }}>{data}</ListItemText>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

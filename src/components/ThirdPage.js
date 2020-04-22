import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import pic from "../assets/pic.jpg";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    alignItems: "center",
    height: 736,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    margin: 10,
    paddingBottom: 170,
  },
  item: {
    margin: 10,
    fontFamily: "Gill Sans",
    position: "relative",
    color: "#FAF2A1",
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
}));

export const ThirdPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${pic})`,
          }}
        />
      </Box>
    </Box>
  );
};

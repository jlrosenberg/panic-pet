import React from "react";
import useStyles from "./useStyles";

interface Props {
  imageUrl: string;
  width?: number;
  height?: number;
}

const PetAvatar: React.FC<Props> = ({
  imageUrl,
  width = 200,
  height = 200,
}) => {
  const classes = useStyles();
  return (
    <img
      src={imageUrl}
      alt="a cute pet"
      className={classes.container}
      style={{ width, height }}
    />
  );
};

export default PetAvatar;

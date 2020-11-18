import { Button, IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { BACKGROUND_URL } from "../../common/static";
import useStyles from "./useStyles";

interface Props {
  title: string;
  items: Array<string>;
  buttonUrl?: string;
  imageUrl?: string;
  onItemSelected: (itemClicked: string) => void;
  onBackButtonClick?: () => void;
}

const SelectFromListScreen: React.FC<Props> = ({
  title,
  items,
  buttonUrl,
  imageUrl,
  onItemSelected,
  onBackButtonClick,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.backButton}>
        {onBackButtonClick && (
          <IconButton onClick={onBackButtonClick} size="small">
            <ArrowBack></ArrowBack>
          </IconButton>
        )}
      </div>

      <div className={classes.header}>
        <Typography variant="h4" align="center">
          {title}
        </Typography>
      </div>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt="a cute pet" className={classes.petImage} />
      </div>
      <div className={classes.petButtons}>
        {items.map((item) => (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.petButton}
            href={buttonUrl}
            onClick={() => {
              onItemSelected(item);
            }}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SelectFromListScreen;

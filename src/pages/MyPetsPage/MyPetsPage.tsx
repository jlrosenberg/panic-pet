import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { animated } from "react-spring";
import { ICE_CREAM_CONE_URL } from "../../common/static";
import { getRandomAction, PetAction } from "./PetActions/actions";
import { ConyEating } from "./PetActions/Cony";
import DraggableImage from "./PetActions/DraggableItems/DraggableImage";
import useStyles from "./useStyles";

const TIME_BETWEEN_ACTIONS_IN_MS = 5000;

const MyPetsPage: React.FC = () => {
  const classes = useStyles();
  const [action, setAction] = useState<PetAction>(getRandomAction());
  const [completed, setCompleted] = useState(false);

  const onDraggableRelease = () => {
    setCompleted(true);
    setTimeout(() => {
      setCompleted(false);
      setAction(getRandomAction());
    }, TIME_BETWEEN_ACTIONS_IN_MS);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <Typography variant="h4" align="center">
          {completed
            ? action.actionCompletedMessage
            : action.actionRequestMessage}
        </Typography>

        <Typography variant="subtitle1" align="center">
          {completed ? action.actionCompletedHint : action.actionRequestHint}
        </Typography>
      </div>
      <div className={classes.imgContainer}>
        {completed && action.completedComponent}
        {!completed && action.initialComponent}

        {!completed && (
          <DraggableImage
            imageUrl={action.draggableImageUrl}
            onRelease={onDraggableRelease}
          />
        )}
      </div>
    </div>
  );
};

export default animated(MyPetsPage);

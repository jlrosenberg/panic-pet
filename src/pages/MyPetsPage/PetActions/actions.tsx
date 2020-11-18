import React from "react";
import {
  CONY_ASKING_FOR_PRESENT_URL,
  CONY_HUNGRY_URL,
  CONY_NEEDS_A_HUG_URL,
  HEART_URL,
  ICE_CREAM_CONE_URL,
  PRESENT_IMG_URL,
} from "../../../common/static";
import ConyEating from "./Cony/ConyEating2.gif";
import ConyGivePresent from "./Cony/conyGivePresent.gif";
import ConyGiveLove from "./Cony/conyGiveLove.gif";

import PetAvatar from "./PetAvatar";

export interface PetAction {
  draggableImageUrl: string;
  initialComponent: React.ReactNode;
  completedComponent: React.ReactNode;
  actionRequestMessage: string;
  actionRequestHint: string;
  actionCompletedMessage: string;
  actionCompletedHint: string;
}

const actions = [
  {
    draggableImageUrl: ICE_CREAM_CONE_URL,
    initialComponent: <PetAvatar imageUrl={CONY_HUNGRY_URL} />,
    completedComponent: <PetAvatar imageUrl={ConyEating} />,
    actionCompletedMessage: "Yummy yummy in my tummy",
    actionCompletedHint: "Thank you for the snackity snack",
    actionRequestHint: "Drag the ice cream to my mouth to feed me!",
    actionRequestMessage: "Feed me, I'm hungry!!",
  },
  {
    draggableImageUrl: PRESENT_IMG_URL,
    initialComponent: <PetAvatar imageUrl={CONY_ASKING_FOR_PRESENT_URL} />,
    completedComponent: <PetAvatar imageUrl={ConyGivePresent} />,
    actionCompletedMessage: "YAYYYYYYY",
    actionCompletedHint: "Thank you for this awesome surprise gift!!",
    actionRequestHint: "Drag the gift into my hands to give me a surprise",
    actionRequestMessage: "Can I have a present?",
  },
  {
    draggableImageUrl: HEART_URL,
    initialComponent: <PetAvatar imageUrl={CONY_NEEDS_A_HUG_URL} />,
    completedComponent: <PetAvatar imageUrl={ConyGiveLove} />,
    actionCompletedMessage: "Awww thanks I feel better now!!",
    actionCompletedHint:
      "I really needed that hug, thank you, I appreciate you",
    actionRequestHint: "Drag the heart to me to hug me",
    actionRequestMessage: "I just got dumped can you give me a hug?",
  },
];

export const getRandomAction = (): PetAction => {
  return actions[Math.floor(Math.random() * actions.length)];
};

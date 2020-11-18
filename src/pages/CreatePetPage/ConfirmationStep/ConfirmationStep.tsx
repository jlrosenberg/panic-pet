import React from "react";
import { CAT_URL, DOG_URL, BIRD_URL } from "../../../common/static";
import SelectFromListScreen from "../../../components/SelectFromListScreen";
import { Pet } from "../CreatePetPage";

interface Props {
  pet: Pet;
  specie: string;
  name: string;
  onConfirm: () => void;
  onBackButtonClick: () => void;
}

const ConfirmationStep: React.FC<Props> = ({
  pet,
  specie,
  name,
  onConfirm,
  onBackButtonClick,
}) => {
  const getImageUrl = () => {
    if (pet === "Cat") {
      return CAT_URL;
    }

    if (pet === "Dog") {
      return DOG_URL;
    }

    return BIRD_URL;
  };

  return (
    <SelectFromListScreen
      title={`Ready to meet ${name}, your new ${specie} ${pet}?`}
      items={[`Meet ${name}`]}
      imageUrl={getImageUrl()}
      buttonUrl={`./#/dashboard`}
      onItemSelected={() => {}}
      onBackButtonClick={onBackButtonClick}
    />
  );
};

export default ConfirmationStep;

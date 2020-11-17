import { Button, Typography } from "@material-ui/core";
import React from "react";
import { BIRD_URL, CAT_URL, DOG_URL } from "../../../common/static";
import SelectFromListScreen from "../../../components/SelectFromListScreen";
import { Pet } from "../CreatePetPage";

interface Props {
  onNameSelected: (name: string) => void;
  onBackButtonClick: () => void;
  pet: Pet;
}

const NamePicker: React.FC<Props> = ({
  onNameSelected,
  onBackButtonClick,
  pet,
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
      title="Select the Species"
      items={["Joan", "Frederick", "Mittens", "Paws", "Enter Your Own Name"]}
      imageUrl={getImageUrl()}
      onItemSelected={onNameSelected}
      onBackButtonClick={onBackButtonClick}
    />
  );
};

export default NamePicker;

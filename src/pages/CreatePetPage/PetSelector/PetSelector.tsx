import { Button, Typography } from "@material-ui/core";
import React from "react";
import { CUTE_PETS } from "../../../common/static";
import SelectFromListScreen from "../../../components/SelectFromListScreen";
import { Pet } from "../CreatePetPage";

interface Props {
  onPetSelected: (pet: Pet) => void;
}

const PetSelector: React.FC<Props> = ({ onPetSelected }) => {
  return (
    <SelectFromListScreen
      title="Pick Your Pet!"
      items={["Cat", "Dog", "Bird"]}
      imageUrl={CUTE_PETS}
      onItemSelected={onPetSelected as any}
    />
  );
};

export default PetSelector;

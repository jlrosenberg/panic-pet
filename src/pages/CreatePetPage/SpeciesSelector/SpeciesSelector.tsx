import { Button, Typography } from "@material-ui/core";
import React from "react";
import { CAT_URL, DOG_URL, BIRD_URL } from "../../../common/static";
import SelectFromListScreen from "../../../components/SelectFromListScreen";
import { Pet } from "../CreatePetPage";

interface Props {
  onSpecieSelected: (specie: string) => void;
  onBackButtonClick: () => void;
  pet: Pet;
}

const SpeciesSelector: React.FC<Props> = ({
  onSpecieSelected,
  onBackButtonClick,
  pet,
}) => {
  const getPetSpecieOptions = (): Array<string> => {
    if (pet === "Cat") {
      return ["Siamese", "Benghal", "Calico", "Sphinx"];
    }

    if (pet === "Dog") {
      return ["Hound", "Golden Retriever", "Husky", "Poodle"];
    }

    return ["Parrot", "Parrakeet", "Dove"];
  };

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
      title={`Select your ${pet}'s species:`}
      items={getPetSpecieOptions()}
      imageUrl={getImageUrl()}
      onItemSelected={onSpecieSelected}
      onBackButtonClick={onBackButtonClick}
    />
  );
};

export default SpeciesSelector;

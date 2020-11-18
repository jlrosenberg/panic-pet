import React, { useState } from "react";
import useLocalStorage from "../../common/useLocalStorage";
import ConfirmationStep from "./ConfirmationStep";
import NamePicker from "./NamePicker";
import PetSelector from "./PetSelector";
import SpeciesSelector from "./SpeciesSelector";
import useStyles from "./useStyles";

type Phase = "petSelect" | "speciesSelect" | "naming" | "completed";
export type Pet = "Dog" | "Cat" | "Bird";

const CreatePetPage: React.FC = () => {
  const classes = useStyles();
  const [phase, setPhase] = useState<Phase>("petSelect");
  const [pet, setPet] = useLocalStorage<Pet>("pet", "Dog");
  const [specie, setSpecie] = useLocalStorage<string>("specie", "");
  const [name, setName] = useLocalStorage<string>("name", "");

  const onPetSelected = (petType: Pet) => {
    setPet(petType);
    setPhase("speciesSelect");
  };

  const onSpeciesSelected = (newSpecie: string) => {
    setSpecie(newSpecie);
    setPhase("naming");
  };

  const onNamePicked = (newName: string) => {
    setName(newName);
    setPhase("completed");
  };

  const onConfirm = () => {
    window.location.href = "./#/dashboard";
  };

  return (
    <>
      {phase === "petSelect" && <PetSelector onPetSelected={onPetSelected} />}
      {phase === "speciesSelect" && (
        <SpeciesSelector
          pet={pet}
          onSpecieSelected={onSpeciesSelected}
          onBackButtonClick={() => {
            setPhase("petSelect");
          }}
        />
      )}
      {phase === "naming" && (
        <NamePicker
          pet={pet}
          onNameSelected={onNamePicked}
          onBackButtonClick={() => {
            setPhase("speciesSelect");
          }}
        />
      )}

      {phase === "completed" && (
        <ConfirmationStep
          pet={pet}
          name={name as any}
          specie={specie as any}
          onBackButtonClick={() => {
            setPhase("naming");
          }}
          onConfirm={onConfirm}
        />
      )}
    </>
  );
};

export default CreatePetPage;

import React, { useState } from "react";
import NamePicker from "./NamePicker";
import PetSelector from "./PetSelector";
import SpeciesSelector from "./SpeciesSelector";
import useStyles from "./useStyles";

type Phase = "petSelect" | "speciesSelect" | "naming" | "completed";
export type Pet = "Dog" | "Cat" | "Bird";

const CreatePetPage: React.FC = () => {
  const classes = useStyles();
  const [phase, setPhase] = useState<Phase>("petSelect");
  const [pet, setPet] = useState<Pet>("Dog");
  const [specie, setSpecie] = useState<string>();
  const [name, setName] = useState<string>();

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
    </>
  );
};

export default CreatePetPage;

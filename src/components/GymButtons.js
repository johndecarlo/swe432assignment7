import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function GymButtons(props) {
  const {value, onChange} =props;
  const handleGym = (event, newGym)=>{
    onChange(newGym);
  };

  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleGym} aria-label="Gym Location" alignItems="center">
      <ToggleButton value="AFC" aria-label="AFC">Aquatic Fintess Center (AFC)</ToggleButton>
      <ToggleButton value="RAC" aria-label="RAC">Recreation Athletic Complex (RAC)</ToggleButton>
      <ToggleButton value="Skyline" aria-label="Skyline">Skyline Fitness Center</ToggleButton>
    </ToggleButtonGroup>
  );
}

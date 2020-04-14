import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function ExperienceButtons(props) {
  const {value, onChange} =props;
  const experience = (event, newExperience)=>{
    onChange(newExperience);
  };

  return (
    <ToggleButtonGroup value={value} exclusive onChange={experience} aria-label="Experience" alignItems="center">
      <ToggleButton value="Very Bad" aria-label="Very Bad">Very Bad</ToggleButton>
      <ToggleButton value="Bad" aria-label="Bad">Bad</ToggleButton>
      <ToggleButton value="Okay" aria-label="Okay">Okay</ToggleButton>
      <ToggleButton value="Good" aria-label="Good">Good</ToggleButton>
      <ToggleButton value="Very Good" aria-label="Very Good">Very Good</ToggleButton>
    </ToggleButtonGroup>
  );
}

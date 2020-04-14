import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function ExperienceButtons(props) {
  const {value, onChange, gymLocation} =props;
  const experience = (event, newExperience)=>{
    onChange(newExperience);
  };

  if(gymLocation == "AFC") {
    return (
      <ToggleButtonGroup value={value} exclusive onChange={experience} aria-label="Experience" alignItems="center">
        <ToggleButton value="69AM" aria-label="69AM">6:00-9:00 AM</ToggleButton>
        <ToggleButton value="912PM" aria-label="912PM">9:00-12:00 PM</ToggleButton>
        <ToggleButton value="123PM" aria-label="123PM">12:00-3:00 PM</ToggleButton>
        <ToggleButton value="36PM" aria-label="36PM">3:00-6:00 PM</ToggleButton>
        <ToggleButton value="69PM" aria-label="69PM">6:00-9:00 PM</ToggleButton>
      </ToggleButtonGroup>
    );
  }
  if(gymLocation == "RAC") {
    return (
      <ToggleButtonGroup value={value} exclusive onChange={experience} aria-label="Experience" alignItems="center">
        <ToggleButton value="69AM" aria-label="69AM">6:00-9:00 AM</ToggleButton>
        <ToggleButton value="912PM" aria-label="912PM">9:00-12:00 PM</ToggleButton>
        <ToggleButton value="123PM" aria-label="123PM">12:00-3:00 PM</ToggleButton>
        <ToggleButton value="36PM" aria-label="36PM">3:00-6:00 PM</ToggleButton>
        <ToggleButton value="69PM" aria-label="69PM">6:00-9:00 PM</ToggleButton>
        <ToggleButton value="912AM" aria-label="912AM">9:00-12:00 AM</ToggleButton>
      </ToggleButtonGroup>
    );
  }
  if(gymLocation == "Skyline") {
    return (
      <ToggleButtonGroup value={value} exclusive onChange={experience} aria-label="Experience" alignItems="center">
        <ToggleButton value="123PM" aria-label="123PM">12:00-3:00 PM</ToggleButton>
        <ToggleButton value="36PM" aria-label="36PM">3:00-6:00 PM</ToggleButton>
        <ToggleButton value="69PM" aria-label="69PM">6:00-9:00 PM</ToggleButton>
        <ToggleButton value="912AM" aria-label="912AM">9:00-12:00 AM</ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

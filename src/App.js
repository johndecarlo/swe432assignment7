import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link } from "react-router-dom";

import './App.css';
import GymButtons from './components/GymButtons';
import ExperienceButtons from './components/ExperienceButton';
import TimeAttended from './components/TimeAttended';

const publicURL = 'https://swe432tomcat.herokuapp.com';

export const getLocationUrlData = () => {
  return {
      url:
          process.env.NODE_ENV === 'production'?
          publicURL
          :`${window.location.origin}`,
      hash: `${window.location.hash}`
  };
};
export const servicePath ='/echo';

function App(props) {
  const [firstNameValue, setFirstNameValue] = React.useState("");
  const [lastNameValue, setLastNameValue] = React.useState("");
  const [gradValue, setGradValue] = React.useState("");
  const [majorValue, setMajorValue] = React.useState("");
  const [gymLocation, setgymLocation] = React.useState("AFC");
  const [timeAttend, setTimeAttend] = React.useState("123PM")
  const [experience, setExperience] = React.useState("Okay")
  const handleFirstNameChange = (event) => {
    setFirstNameValue(event.target.value);
  }
  const handleLastNameChange = (event) => {
    setLastNameValue(event.target.value);
  }
  const handleGradChange = (event) => {
    setGradValue(event.target.value);
  }
  const handleMajorChange = (event) => {
    setMajorValue(event.target.value);
  }
  const wordsLength = firstNameValue.length > 1 && lastNameValue.length > 1 && gradValue.length > 1 && majorValue.length > 1;
  const validTime = (gymLocation == 'AFC' && timeAttend != '912AM') || (gymLocation == 'Skyline' && timeAttend != '69AM' && timeAttend != '912PM') || (gymLocation == 'RAC');

  return (
    <div style={{flexGrow: 1}}>
      <form action="https://swe432assign7.herokuapp.com/result">
      <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item xs>
          <React.Fragment>
            <h1>GMU Recreation Facilities Feedback</h1>
            <p>Provide us feedback on your recent experience at one of our fitness centers</p>
          </React.Fragment>
        </Grid>
        <Grid item xs>
          <p>Please provide us with some basic Information about yourself?</p>
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
              <Grid item xs>
                <TextField label="First Name" value={firstNameValue} onChange={handleFirstNameChange} inputProps={{ 'aria-label': 'description' }} />
              </Grid>
              <Grid item xs>
                <TextField label="Last Name" value={lastNameValue} onChange={handleLastNameChange} inputProps={{ 'aria-label': 'description' }} />
              </Grid>
              <Grid item xs>
                <TextField label="Graduation Year" value={gradValue} onChange={handleGradChange} inputProps={{ 'aria-label': 'description' }} />
              </Grid>
              <Grid item xs>
                <TextField label="Major" value={majorValue} onChange={handleMajorChange} inputProps={{ 'aria-label': 'description' }} />
              </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <p>What gym did you attend?</p>
          <GymButtons value={gymLocation} onChange ={setgymLocation} />
        </Grid>
        <Grid item xs>
          <p>What time did you attend the gym?</p>
          <TimeAttended value={timeAttend} onChange = {setTimeAttend} gymLocation = {gymLocation}/>
        </Grid>
        <Grid item xs>
          <p>How would you rate your workout experience?</p>
          <ExperienceButtons value={experience} onChange = {setExperience}/>
        </Grid>
        <Grid item xs>
            <Button disabled={!wordsLength || !validTime} type="submit" value="Submit" variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
      </form>
    </div>
  );
}

export default App;

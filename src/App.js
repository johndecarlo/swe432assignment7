import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './App.css';
import Fetcher from './components/UserInformation';
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
  const [gymLocation, setgymLocation] = React.useState("AFC");
  const [timeAttend, setTimeAttend] = React.useState("123PM")
  const [experience, setExperience] = React.useState("Okay")
  const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
    }

  return (
    <div style={{flexGrow: 1}}>
    <form>
      <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item xs>
          <React.Fragment>
            <h1>GMU Recreation Facilities Feedback</h1>
            <p>Provide us feedback on your recent experience at one of our fitness centers</p>
          </React.Fragment>
        </Grid>
        <Grid item xs>
          <p>Please provide us with some basic Information about yourself?</p>
          <Fetcher />
        </Grid>
        <Grid item xs>
          <p>What gym did you attend?</p>
          <GymButtons value={gymLocation} onChange ={setgymLocation}/>
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
          <Button onClick={doSomething} alignItems="center" variant="contained" color="primary" data-something="submit">Submit</Button>
        </Grid>
      </Grid>
      </form>
    </div>
  );
}

export default App;

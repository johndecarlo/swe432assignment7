import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { Paper, Button, Grid } from '@material-ui/core';

export default function UserInformation(props) {
    const { url, value} = props;
    const [nameValue, setNameValue] = useState("");
    const [gradValue, setGradValue] = useState("");
    const [majorValue, setMajorValue] = useState("");

    const handleNameChange = (event) => {
      setNameValue(event.target.value);
    }

    const handleGradChange = (event) => {
      setGradValue(event.target.value);
    }

    const handleMajorChange = (event) => {
      setMajorValue(event.target.value);
    };


    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item xs>
              <TextField label="Name" value={nameValue} onChange={handleNameChange} inputProps={{ 'aria-label': 'description' }} />
            </Grid>
            <Grid item xs>
              <TextField label="Graduation Year" value={gradValue} onChange={handleGradChange} inputProps={{ 'aria-label': 'description' }} />
            </Grid>
            <Grid item xs>
              <TextField label="Major" value={majorValue} onChange={handleMajorChange} inputProps={{ 'aria-label': 'description' }} />
            </Grid>
        </Grid>
    );
}

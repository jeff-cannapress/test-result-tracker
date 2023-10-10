import React from 'react';
import { Thunks, Selectors, useAppDispatch, useAppSelector } from '../redux';
import { Lab } from '../services/Models';
import { Formatting } from '../services/Formatting';
import { Button, Paper, Stack, Typography } from '@mui/material';

function goToLabDetail(labDate: Date) {
  Thunks.Labs.selectLab(labDate);
}
function createNewLab() {
  alert("make lab dialog here");
}
export default function LabSelector() {
  const labs = useAppSelector(Selectors.Labs.getAllLabs);
  const currentLabId = useAppSelector(Selectors.Labs.getCurrentLab)?.date?.getTime();
  const labTiles = labs.map(lab => (
    <Paper elevation={1} key={lab.date.getTime()}>
      <Typography>{Formatting.Dates.format(lab.date)}</Typography>
      <Button onClick={(() => goToLabDetail(lab.date))}>Edit Lab</Button>
    </Paper>
  ));
  const headerTiles = [
    (<Paper elevation={1} key={-1}>
      <Button onClick={createNewLab}>New Lab</Button>
    </Paper>)
  ]
  return (<Stack direction={'column'}>
    {labTiles}
  </Stack>);
}
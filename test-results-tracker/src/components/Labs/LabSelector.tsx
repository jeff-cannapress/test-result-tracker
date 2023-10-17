import React from 'react';
import { Thunks, Selectors, useAppDispatch, useAppSelector } from '../../redux';
import { ILab } from '../../services/Models';
import { Formatting } from '../../services/Formatting';
import { Button, Paper, Stack, Typography } from '@mui/material';

function goToLabDetail(lab: ILab) {
  Thunks.Labs.selectLab(lab.date);
}
function createNewLab() {
  alert("make lab dialog here");
}
function LabSelectorHeader() {
  return (<Paper elevation={1} key={-1}>
    <Button onClick={createNewLab}>New Lab</Button>
  </Paper>);
}
function LabRecord(props: { lab: ILab, show: ((lab: ILab) => void) }) {
  const { lab, show } = props;
  return (<Paper elevation={1} key={lab.date.getTime()}>
    <Typography>{Formatting.Dates.format(lab.date)}</Typography>
    <Button onClick={(() => show(lab))}>Edit Lab</Button>
  </Paper>)
}
export default function LabSelector() {
  const labs = useAppSelector(Selectors.Labs.getAllLabs);

  const labTiles = [<LabSelectorHeader />].concat(labs.map(lab => (<LabRecord lab={lab} show={goToLabDetail} />)));

  return (<Stack direction={'column'}> {labTiles} </Stack>);
}
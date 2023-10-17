import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TodayIcon from '@mui/icons-material/TodayTwoTone';
import { Container, TextField, Checkbox, FormControlLabel, TextareaAutosize, Button, Stack } from '@mui/material';



import { Thunks, Selectors, useAppDispatch, useAppSelector } from '../../redux';
import { CircularProgress, FormControl, FormGroup, Input, InputAdornment, InputLabel } from '@mui/material';
import { ILab, Lab } from 'src/services/Models';
import NoFoodIcon from '@mui/icons-material/NoFood';
import NoFoodOutlinedIcon from '@mui/icons-material/NoFoodOutlined';
import { LabUpdateParams } from 'src/redux/store/labs.thunk';



function LabHeader(props: { lab: ILab }) {
  const { lab } = props;
  const updateLab = (params: LabUpdateParams) => {
    Thunks.Labs.updateLab(Object.assign(params, { date: lab.date }));
  }
  return <FormGroup>
    <FormControl variant="standard">
      <InputLabel htmlFor="lab-date-time">
        Lab Date &amp; Time
      </InputLabel>
      <Input
        id="lab-date-time"
        type="datetime-local"
        readOnly={true}
        value={lab.date}
        startAdornment={<InputAdornment position="start">
          <TodayIcon />
        </InputAdornment>} />
    </FormControl>
    <FormControl>
      <InputLabel htmlFor="lab-fasted"> Fasted </InputLabel>
      <Checkbox 
        id="lab-fasted" 
        icon={<NoFoodOutlinedIcon />} 
        checkedIcon={<NoFoodIcon />} 
        checked={lab.fasted} 
        onChange={(e) => updateLab({fasted:e.target.checked})} 
      />
    </FormControl>
    <FormControl>
      <InputLabel htmlFor="lab-notes"> Notes </InputLabel>
      <TextField
        id="lab-notes"
        multiline
        rows={4}
        value={lab.notes}
        onChange={(e) => updateLab({notes:e.target.value})} 
      />
    </FormControl>
  </FormGroup>;
}



export default function LabEditor() {

  const currentLab = useAppSelector(Selectors.Labs.getCurrentLab) || new Lab({ date: new Date() });
  return (
    <Stack>
      <LabHeader lab={currentLab} />
    </Stack>
  );


}

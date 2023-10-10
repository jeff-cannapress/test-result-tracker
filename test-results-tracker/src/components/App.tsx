import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


import { Thunks, Selectors, useAppDispatch, useAppSelector } from '../redux';
import { Lab } from '../services/Models';
import { Formatting } from '../services/Formatting';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function LabSelector() {
  return <Typography variant="body2" color="text.secondary" align="center">Lab selection drop down</Typography>
}
function LabEditor(props: { lab: Lab | null }) {
  if (props.lab === null) {
    return <Typography variant="body2" color="text.secondary" align="center">No Lab selected for editing</Typography>
  }

  return <Typography variant="body2" color="text.secondary" align="center">Lab editor for {Formatting.DateTimes.format(props.lab.date)}.</Typography>;
}

export default function App() {
  const dispatch = useAppDispatch();
  dispatch(Thunks.TestDefinitions.loadTestDefinitions('123'));
  const isLoading = useAppSelector(Selectors.TestDefinitions.getLoading) !== 'idle';
  const currentPatient = useAppSelector(Selectors.Labs.getCurrentPatientId);
  if (currentPatient === '') {
    dispatch(Thunks.Labs.loadPatient('anonymous'));
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example in TypeScript
        </Typography>

        <Copyright />
      </Box>
    </Container>
  );
}

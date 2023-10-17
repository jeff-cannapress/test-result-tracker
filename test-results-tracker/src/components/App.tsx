import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



import { Thunks, Selectors, useAppDispatch, useAppSelector } from '../redux';
import Copyright from './Copyright';



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

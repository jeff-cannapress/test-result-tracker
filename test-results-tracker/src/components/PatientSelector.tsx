import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



import { Thunks, Selectors, useAppDispatch, useAppSelector } from '../redux';
import { CircularProgress } from '@mui/material';



export default function PatientSelector() {
    const dispatch = useAppDispatch();

    const currentPatient = useAppSelector(Selectors.Labs.getCurrentPatientId);
    if (currentPatient === '' || currentPatient === null) {
        dispatch(Thunks.Labs.loadPatient('anonymous'));
        return (<CircularProgress />);
    }

    return (
        <Typography>{currentPatient}</Typography>
    );
}

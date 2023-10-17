import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


import { Thunks, Selectors, useAppDispatch, useAppSelector } from '../redux';
import { ILab } from '../services/Models';
import { Formatting } from '../services/Formatting';


export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">Your Website </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

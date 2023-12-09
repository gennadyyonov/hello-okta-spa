import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { meThunk } from '../../actions/meThunk';
import { ProfileItemConnected } from '../ProfileItem/ProfileItemConnected';

export const AppHeader: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(meThunk());
    },
    // eslint-disable-next-line
    [],
  );
  return (
    <AppBar position="static">
      <Toolbar>
        <ProfileItemConnected/>
      </Toolbar>
    </AppBar>
  )
};

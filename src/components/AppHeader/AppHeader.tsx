import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { meThunk } from 'actions/meThunk';
import { ProfileItemConnected } from 'components/ProfileItem/ProfileItemConnected';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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

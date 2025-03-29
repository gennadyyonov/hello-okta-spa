import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../App/hooks';
import { meThunk } from '../../features/userInfo/userInfoSlice';
import { ProfileItemConnected } from '../ProfileItem/ProfileItemConnected';

export const AppHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(meThunk());
  }, [dispatch]);
  return (
    <AppBar position="static">
      <Toolbar>
        <ProfileItemConnected />
      </Toolbar>
    </AppBar>
  );
};

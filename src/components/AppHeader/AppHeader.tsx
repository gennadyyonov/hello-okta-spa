import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect } from 'react';

import { useAppDispatch } from '../../App/hooks';
import { meThunk } from '../../features/userInfo/userInfoSlice';
import { ProfileItem } from '../ProfileItem/ProfileItem';

export const AppHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(meThunk());
  }, [dispatch]);
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <ProfileItem />
      </Toolbar>
    </AppBar>
  );
};

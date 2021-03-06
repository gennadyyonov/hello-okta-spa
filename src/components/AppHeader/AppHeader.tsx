import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {useDispatch} from 'react-redux';
import {meThunk} from 'actions/meThunk';
import {ProfileItemConnected} from 'components/ProfileItem/ProfileItemConnected';

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
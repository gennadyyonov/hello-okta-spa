import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {useDispatch} from 'react-redux';
import {meThunk} from '../../actions/meThunk';
import {AppHeaderProps} from './AppHeaderConnected';
import {ProfileItemConnected} from './ProfileItemConnected';
import {translationMapThunk} from '../../actions/translationMapThunk';

export const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      if (!props.translationsInitialized) {
        dispatch(translationMapThunk());
      }
    },
    // eslint-disable-next-line
    [],
  );
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
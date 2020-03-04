import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import {ProfileItemProps} from './ProfileItemConnected';
import {Box} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export const ProfileItem: React.FC<ProfileItemProps> = (props) => {
  const {
    firstName,
    lastName
  } = props;

  return (
      <Box display="flex" alignItems="center">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AccountCircleIcon/>
        </IconButton>
        <Typography variant="body2" align="justify">{firstName} {lastName}</Typography>
      </Box>
  );
};
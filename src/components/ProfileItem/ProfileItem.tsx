import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import { ProfileItemProps } from './ProfileItemConnected';

export const ProfileItem: React.FC<ProfileItemProps> = (props) => {
  const { firstName, lastName } = props;

  return (
    <Box display="flex" alignItems="center">
      <IconButton edge="start" color="inherit" aria-label="menu">
        <AccountCircleIcon />
      </IconButton>
      <Typography variant="body2" align="justify">
        {firstName} {lastName}
      </Typography>
    </Box>
  );
};

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useAppSelector } from '../../App/hooks';
import { selectUserInfo } from '../../features/userInfo/selectUserInfo';

export const ProfileItem: React.FC = () => {
  const userInfo = useAppSelector(selectUserInfo);
  const { firstName, lastName } = userInfo;

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

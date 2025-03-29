import Button from '@mui/material/Button';
import React from 'react';
import { logout } from '../../helpers/environmentConfig';
import { i18n } from '../../i18n/i18n';

export const Logout = () => {
  return (
    <Button onClick={logout} variant="contained" color="primary">
      {i18n('button_logout')}
    </Button>
  );
};

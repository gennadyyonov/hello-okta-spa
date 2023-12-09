import Button from '@mui/material/Button';
import { logout } from 'helpers/environmentConfig';
import { i18n } from "i18n/i18n";
import React from 'react';

export const Logout = () => {
    return (
      <Button
        onClick={logout}
        variant="contained"
        color="primary">
        {i18n('button_logout')}
      </Button>
    );
};

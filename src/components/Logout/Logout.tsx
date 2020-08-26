import React from 'react';
import Button from '@material-ui/core/Button';
import {logout} from 'helpers/environmentConfig';
import {i18n} from "i18n/i18n";

export const Logout = () => {
    return (
      <Button
        onClick={logout}
        variant="outlined"
        color="primary">
        {i18n('button_logout')}
      </Button>
    );
};

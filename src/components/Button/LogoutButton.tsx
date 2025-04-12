import Button, { ButtonProps } from '@mui/material/Button';
import React, { useCallback } from 'react';
import { useI18n } from '../../features/i18n/useI18n';
import AuthService from '../../services/AuthService';

export const LogoutButton: React.FC<ButtonProps> = (props) => {
  const { i18n } = useI18n();
  const logout = useCallback(() => AuthService.logout(), []);

  return (
    <Button onClick={logout} {...props}>
      {i18n('button_logout')}
    </Button>
  );
};

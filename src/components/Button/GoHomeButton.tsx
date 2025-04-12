import Button, { ButtonProps } from '@mui/material/Button';
import React, { useCallback } from 'react';
import { useI18n } from '../../features/i18n/useI18n';
import { useNavigate } from 'react-router';

export const GoHomeButton: React.FC<ButtonProps> = (props) => {
  const { i18n } = useI18n();
  const navigate = useNavigate();
  const goHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Button onClick={goHome} {...props}>
      {i18n('button_go_home')}
    </Button>
  );
};

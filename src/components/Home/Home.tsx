import { Alert, Box } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { helloThunk, pingThunk } from '../../features/message/messageSlice';
import { AuthType } from '../../graphql/queries/hello';
import { LogoutButton } from '../Button/LogoutButton';
import { selectMessage } from '../../features/message/selectMessage';
import { useI18n } from '../../features/i18n/useI18n';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const message = useAppSelector(selectMessage);
  const { i18n } = useI18n();

  useEffect(() => {
    dispatch(helloThunk(AuthType.USER));
  }, [dispatch]);

  const onPing = useCallback(() => {
    dispatch(pingThunk());
  }, [dispatch]);

  return (
    <Box>
      <Box>
        <Alert severity="info">{message.text}</Alert>
      </Box>
      <Box pt={2}>
        <Button variant="contained" color="primary" onClick={onPing}>
          {i18n('home_button_ping')}
        </Button>
      </Box>
      <Box pt={2}>
        <Alert severity="warning">{i18n('logout_hint')}</Alert>
      </Box>
      <Box pt={2}>
        <LogoutButton />
      </Box>
    </Box>
  );
};

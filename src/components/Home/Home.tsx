import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { helloThunk, pingThunk } from '../../features/message/messageSlice';
import { AuthType } from '../../graphql/queries/hello';
import { LogoutButton } from '../Button/LogoutButton';
import { selectMessage } from '../../features/message/selectMessage';
import { useI18n } from '../../features/i18n/useI18n';
import { AlertMessage } from '../common/AlertMessage';

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
      <AlertMessage
        severity="info"
        text={message.text}
        action={<Button onClick={onPing}>{i18n('home_button_ping')}</Button>}
      />
      <AlertMessage severity="warning" text={i18n('logout_hint')} action={<LogoutButton />} sx={{ mt: 2 }} />
    </Box>
  );
};

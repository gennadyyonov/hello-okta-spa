import { Alert, Box } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../App/hooks';
import { helloThunk } from '../../features/message/messageSlice';
import { AuthType } from '../../graphql/queries/hello';
import { i18n } from '../../i18n/i18n';
import { Logout } from '../Logout/Logout';
import { HomeProps } from './HomeConnected';

const Home: React.FC<HomeProps> = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(helloThunk(AuthType.USER));
  }, [dispatch]);
  const { message, onPing } = props;
  return (
    <Box>
      <Box pt={4}>
        <Alert severity="info">{message}</Alert>
      </Box>
      <Box pt={2}>
        <Button variant="contained" color="primary" onClick={onPing}>
          {i18n('home_button_ping')}
        </Button>
      </Box>
      <Box pt={4}>
        <Alert severity="warning">{i18n('logout_hint')}</Alert>
      </Box>
      <Box pt={2}>
        <Logout />
      </Box>
    </Box>
  );
};

export default Home;

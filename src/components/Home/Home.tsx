import {Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {helloThunk} from 'actions/helloThunk';
import {AuthType} from 'graphql/queries/hello';
import {i18n} from 'i18n/i18n';
import {HomeProps} from './HomeConnected';
import {Logout} from "components/Logout/Logout";

const Home: React.FC<HomeProps> = (props) => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(helloThunk(AuthType.USER));
    },
    // eslint-disable-next-line
    [],
  );
  const {message, onPing} = props;
  return (
    <Box>
      <Box pt={4}>
        <Alert severity="info">{message}</Alert>
      </Box>
      <Box pt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={onPing}>
          {i18n('home_button_ping')}
        </Button>
        <Logout/>
      </Box>
    </Box>
  )
};

export default Home;

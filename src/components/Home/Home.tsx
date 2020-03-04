import {Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {WithStyles, withStyles} from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {helloThunk} from '../../actions/helloThunk';
import {AuthType} from '../../graphql/queries/hello';
import {AppHeader} from '../AppHeader/AppHeader';
import {HomeProps} from './HomeConnected';

const styles = {
  root: {
    margin: 20,
    padding: 20,
    width: 400,
    height: 400
  }
};

const Home: React.FC<HomeProps & WithStyles> = (props) => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(helloThunk(AuthType.USER));
    },
    // eslint-disable-next-line
    [],
  );
  const {message, onPing, classes} = props;
  return (
    <Paper className={classes.root} elevation={3}>
      <AppHeader/>
      <Box>
        <Box pt={4}>
          <Alert severity="info">{message}</Alert>
        </Box>
        <Box pt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={onPing}>
            Ping
          </Button>
        </Box>
      </Box>
    </Paper>
  )
};

export default withStyles(styles)(Home);

import React from 'react';
import {HomeProps} from './HomeConnected';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import {AppHeader} from '../AppHeader/AppHeader';
import Paper from '@material-ui/core/Paper';
import {WithStyles, withStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';

const styles = {
  root: {
    margin: 20,
    padding: 20,
    width: 400,
    height: 400
  }
};

const Home: React.FC<HomeProps & WithStyles> = (props) => {
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

import {WithStyles, withStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React from 'react';

const styles = {
  root: {
    margin: 20,
    padding: 20,
    width: 400,
    height: 400
  }
};

interface AppWrapperProps extends WithStyles {
  children?: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children, classes }) => (
  (
    <Paper className={classes.root} elevation={3}>
      {children}
    </Paper>
  )
);

export default withStyles(styles)(AppWrapper)
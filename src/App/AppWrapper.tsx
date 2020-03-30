import {WithStyles, withStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React, {ReactNode} from 'react';

const styles = {
  root: {
    margin: 20,
    padding: 20,
    width: 400,
    height: 400
  }
};

const AppWrapper: React.FC<{ children?: ReactNode } & WithStyles> = ({ children, classes }) => (
  <Paper className={classes.root} elevation={3}>
    {children}
  </Paper>
);

export default withStyles(styles)(AppWrapper)
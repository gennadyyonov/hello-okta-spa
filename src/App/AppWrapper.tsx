import { WithStyles, withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import React, { ReactNode } from 'react';

const styles = {
  root: {
    margin: 20,
    padding: 20,
    width: 400,
    height: 400
  }
};

// @ts-ignore
const AppWrapper: React.FC<{ children?: ReactNode } & WithStyles> = ({ children, classes }) => (
  <Paper className={classes.root} elevation={3}>
    {children}
  </Paper>
);

export default withStyles(styles)(AppWrapper)

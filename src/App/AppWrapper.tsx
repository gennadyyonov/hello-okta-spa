import Paper from '@mui/material/Paper';
import React, { ReactNode } from 'react';

// @ts-ignore
const AppWrapper: React.FC<{ children?: ReactNode }> = ({ children, classes }) => (
  <Paper
    sx={{
      margin: '20px',
      padding: '20px',
      width: 400,
      height: 400
    }}
    elevation={3}
  >
    {children}
  </Paper>
);

export default AppWrapper

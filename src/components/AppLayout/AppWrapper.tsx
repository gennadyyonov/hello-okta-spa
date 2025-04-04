import Paper from '@mui/material/Paper';
import React, { ReactNode } from 'react';

const AppWrapper: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <Paper
    sx={{
      margin: '20px',
      padding: '20px',
      width: 400,
      height: 400,
    }}
    elevation={3}
  >
    {children}
  </Paper>
);

export default AppWrapper;

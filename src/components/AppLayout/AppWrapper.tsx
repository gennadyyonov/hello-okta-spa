import Box from '@mui/material/Box';
import React, { ReactNode } from 'react';
import { AppContainer } from './AppContainer';

const AppWrapper: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <AppContainer breakpoints={{ width: 'sm' }}>
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        '& > *': {
          width: '100%',
        },
      }}
    >
      {children}
    </Box>
  </AppContainer>
);

export default AppWrapper;

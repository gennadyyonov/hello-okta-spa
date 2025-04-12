import Container, { ContainerProps } from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Breakpoint } from '@mui/system/createTheme';
import React from 'react';

type AppContainerProps = ContainerProps & {
  breakpoints: {
    width: Breakpoint;
  };
};

export const AppContainer: React.FC<AppContainerProps> = (props) => {
  const { breakpoints, sx, ...rest } = props;
  const { width = 'xs' } = breakpoints;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(width));
  const fixedWidth = theme.breakpoints.values[width];

  return (
    <Container
      component="main"
      disableGutters
      sx={{
        ...(matches ? { width: fixedWidth, maxWidth: fixedWidth } : {}),
        px: matches ? 0 : 2,
        ...sx,
      }}
      {...rest}
    />
  );
};

import React, { cloneElement, isValidElement, useMemo } from 'react';
import Alert, { AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import { ButtonProps } from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface AlertMessageProps {
  severity: AlertProps['severity'];
  title?: string | null;
  text?: string | null;
  action?: React.ReactElement<ButtonProps>;
  sx?: AlertProps['sx'];
}

export const AlertMessage: React.FC<AlertMessageProps> = ({ severity, action, title, text, sx }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const DesktopActionView = useMemo(
    () =>
      matches &&
      React.isValidElement(action) &&
      React.cloneElement(action, {
        color: 'inherit',
        sx: {
          whiteSpace: 'nowrap',
          ...(action.props.sx || {}),
        },
      }),
    [matches, action],
  );

  const MobileActionView = useMemo(
    () =>
      !matches &&
      isValidElement(action) &&
      cloneElement(action, {
        variant: 'contained',
        color: 'primary',
        fullWidth: true,
        sx: {
          mt: 2,
          whiteSpace: 'nowrap',
          ...action.props.sx,
        },
      }),
    [matches, action],
  );

  return (
    <Box sx={sx}>
      <Alert severity={severity} action={DesktopActionView}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {text}
      </Alert>
      {MobileActionView}
    </Box>
  );
};

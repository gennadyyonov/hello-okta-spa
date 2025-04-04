import React from 'react';
import { useI18n } from '../../features/i18n/useI18n';
import { Alert, AlertTitle, Box } from '@mui/material';
import { GoHomeButton } from '../Button/GoHomeButton';

interface ErrorPageProps {
  id: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { id } = props;
  const { i18n } = useI18n();

  const title = i18n(`${id}.TITLE`);
  const text = i18n(`${id}.TEXT`);
  return (
    <>
      <Box>
        <Alert severity="error">
          <AlertTitle>{title}</AlertTitle>
          {text}
        </Alert>
        <Box pt={2}>
          <GoHomeButton />
        </Box>
      </Box>
    </>
  );
};

import React from 'react';

import { useI18n } from '../../features/i18n/useI18n';
import { GoHomeButton } from '../Button/GoHomeButton';
import { AlertMessage } from '../common/AlertMessage';

interface ErrorPageProps {
  id: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { id } = props;
  const { i18n } = useI18n();

  const title = i18n(`${id}.TITLE`);
  const text = i18n(`${id}.TEXT`);
  return <AlertMessage severity="error" title={title} text={text} action={<GoHomeButton />} />;
};

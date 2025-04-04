import React, { Suspense, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { getTranslationMapThunk } from './i18nSlice';
import { selectTranslationsInitialized } from './selectTranslationsInitialized';
import { CircularProgress } from '@mui/material';

export const withTranslations = (WrappedComponent: React.ComponentType) => {
  const ComponentWithTranslations = () => {
    const dispatch = useAppDispatch();
    const translationsInitialized = useAppSelector(selectTranslationsInitialized);

    useEffect(() => {
      if (!translationsInitialized) {
        dispatch(getTranslationMapThunk());
      }
    }, [dispatch, translationsInitialized]);

    if (!translationsInitialized) {
      return <CircularProgress />;
    }

    return (
      <Suspense fallback={<CircularProgress />}>
        <WrappedComponent />
      </Suspense>
    );
  };
  ComponentWithTranslations.displayName = `withTranslations(
    ${WrappedComponent.displayName || WrappedComponent.name || 'Component'}
  )`;

  return ComponentWithTranslations;
};

import { lazy } from 'react';

export const LazyHome = lazy(() => import('./Home').then(({ Home }) => ({ default: Home })));

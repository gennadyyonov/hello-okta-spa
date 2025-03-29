import { environmentConfig } from '../helpers/environmentConfig';
import { csrfInfoSingleton } from './csrf';
import { fetchCsrfInfo } from './fetchCsrfInfo';

export const initCsrfInfo = async () => {
  if (!environmentConfig.csrfEnabled || csrfInfoSingleton.initialized) {
    return;
  }
  const csrfInfo = await fetchCsrfInfo();
  csrfInfoSingleton.init(csrfInfo);
};

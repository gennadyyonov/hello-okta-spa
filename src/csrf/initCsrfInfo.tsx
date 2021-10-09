import {csrfInfoSingleton} from './csrf';
import {fetchCsrfInfo} from './fetchCsrfInfo';

export const initCsrfInfo = async () => {
  if (csrfInfoSingleton.initialized) {
    return;
  }
  const csrfInfo = await fetchCsrfInfo();
  csrfInfoSingleton.init(csrfInfo);
};

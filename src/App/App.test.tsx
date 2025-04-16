import '../tests/oktaMock';

import { render } from '@testing-library/react';

import { expectAppHeader, expectHome } from '../tests/testUtils';
import { App } from './App';

describe('App', () => {
  it('should render', async () => {
    render(<App />);

    await expectAppHeader();
    await expectHome();
  });
});

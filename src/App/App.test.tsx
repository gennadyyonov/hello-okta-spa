import '../tests/oktaMock';
import { render } from '@testing-library/react';
import { App } from './App';
import { expectAppHeader, expectHome } from '../tests/testUtils';

describe('App', () => {
  it('should render', async () => {
    render(<App />);

    await expectAppHeader();
    await expectHome();
  });
});

import { screen } from '@testing-library/react';

export const expectHome = async () => {
  expect(await screen.findByText('Hello, MOON.CHILD@GMAIL.TEST!')).toBeInTheDocument();
  expect(await screen.findByRole('button', { name: 'Ping' })).toBeInTheDocument();
  expect(await screen.findByText("Pressing 'Logout' button will sign current user out")).toBeInTheDocument();
  expect(await screen.findByRole('button', { name: 'Logout' })).toBeInTheDocument();
};

export const expectAppHeader = async () => {
  expect(await screen.findByText('Moon Child')).toBeInTheDocument();
};

import React from 'react';
import { render } from '@testing-library/react';
import App from './Index';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Bon Voyage!/i);
  expect(header).toBeInTheDocument();
});

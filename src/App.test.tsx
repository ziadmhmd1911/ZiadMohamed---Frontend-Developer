import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test("renders banner", () => {
  render(<App />);
  const banner = screen.getByTestId(/banner/i);
  expect(banner).toBeInTheDocument();
});

test("renders filters", () => {
  render(<App />);
  const filters = screen.getByTestId(/filters/i);
  expect(filters).toBeInTheDocument();
});

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Button from './Button';

test("renders button", () => {
  render(<Button buttonType="primary">Some button</Button>);
  const button = screen.getByText(/Some button/i);
  expect(button).toBeInTheDocument();
});

test("clicks button", () => {
  const callback = jest.fn();
  render(
    <Button onClick={callback} buttonType="primary">
      Some button
    </Button>
  );
  const button = screen.getByText(/Some button/i);
  fireEvent.click(button);
  expect(callback).toHaveBeenCalled();
});

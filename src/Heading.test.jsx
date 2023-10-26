// Heading.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Heading from './Heading';

test('Heading component renders and simulates user events', () => {
  const { getByRole } = render(<Heading quanityImageArray={[]} />);
  
  // Simulate a button click event
  const checkoutButton = getByRole('button', { name: 'Checkout' });
  fireEvent.click(checkoutButton);

  // Add assertions to check the result of the click event
  expect(checkoutButton).toHaveTextContent('Checkout Clicked');
});


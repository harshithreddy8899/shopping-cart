// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('App component renders and simulates user events', () => {
  const { getByText, getByRole } = render(<App quanityImageArray={[]} updateQuantityImageArray={() => {}} />);
  
  // Simulate a button click event
  const plusButton = getByRole('button', { name: '+' });
  fireEvent.click(plusButton);

  // Simulate an input change event
  const quantityInput = getByRole('textbox');
  fireEvent.change(quantityInput, { target: { value: '5' } });

  // Add assertions to check the result of the events
  expect(quantityInput).toHaveValue('5');
});


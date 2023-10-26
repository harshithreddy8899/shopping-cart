// Product.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Product from './Product';

test('Product component renders and simulates user events', () => {
  // const { getByRole } = render(
  //   <Product number={1} quanityImageArray={[]} updateQuantityImageArray={() => {}} />
  // );

  // Simulate a button click event
  const plusButton = Screen.getByRole('button', { name: '+' });
  fireEvent.click(plusButton);

  // Simulate an input change event
  const quantityInput =Screen.getByRole('textbox');
  fireEvent.change(quantityInput, { target: { value: '5' } });

  // Add assertions to check the result of the events
  expect(quantityInput).toHaveValue('5');
});


// Create a unit test for App.js
// Path: bakery-inventory/src/App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bakery Inventory Management System', () => {
  render(<App />);
  const titleElement = screen.getByText(/Bakery Inventory Management System/i);
  expect(titleElement).toBeInTheDocument();
});

// Generate more unit test
// Path: bakery-inventory/src/App.test.js

test('renders Add Item form', () => {
  render(<App />);
  const nameElement = screen.getByLabelText(/Name/i);
  const descriptionElement = screen.getByLabelText(/Description/i);
  const quantityElement = screen.getByLabelText(/Quantity/i);
  const priceElement = screen.getByLabelText(/Price/i);
  const buttonElement = screen.getByRole('button', { name: /Add Item/i });
  
  expect(nameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(quantityElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
} );

test('renders Item List', () => {
  render(<App />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
} );
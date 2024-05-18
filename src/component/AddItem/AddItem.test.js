// Create a unit test for AddItem.js
// Path: bakery-inventory/src/AddItem.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import AddItem from './AddItem';

test('renders Add Item form', () => {
    render(<AddItem />);
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
});



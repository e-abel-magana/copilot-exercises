// refactor unit test providing props for ItemList.js
// Path: bakery-inventory/src/ItemList.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

const items = [
    {
    id: 1,
    name: 'Croissant',
    description: 'A butter flaky pastry',
    quantity: 10,
    price: 2.5,
    },
    {
    id: 2,
    name: 'Chocolate Cake',
    description: 'A moist cake chocolate',
    quantity: 5,
    price: 3.5,
    },
];

test('renders Item List', () => {
    const onDelete = jest.fn();
    const onUpdate = jest.fn();
    render(<ItemList items={items} onDelete={onDelete} onUpdate={onUpdate} />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
});

// Unit test for expecting columns

test('renders Item List with columns', () => {
    const onDelete = jest.fn();
    const onUpdate = jest.fn();
    render(<ItemList items={items} onDelete={onDelete} onUpdate={onUpdate} />);
    const nameElement = screen.getByText(/Name/i);
    const descriptionElement = screen.getByText(/Description/i);
    const quantityElement = screen.getByText(/Quantity/i);
    const priceElement = screen.getByText(/Price/i);
    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(quantityElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
});

// unit test for no items to display

test('renders Item List with no items to display', () => {
    const items = [];
    const onDelete = jest.fn();
    const onUpdate = jest.fn();
    render(<ItemList items={items} onDelete={onDelete} onUpdate={onUpdate} />);
    const noItemsElement = screen.getByText(/No items to display/i);
    expect(noItemsElement).toBeInTheDocument();
});

// unit test for displaying items

test('renders Item List with items', () => {
  
    const onDelete = jest.fn();
    const onUpdate = jest.fn();
    render(<ItemList items={items} onDelete={onDelete} onUpdate={onUpdate} />);
    const croissantElement = screen.getByText(/Croissant/i);
    const chocolateCakeElement = screen.getByText(/Chocolate Cake/i);
    expect(croissantElement).toBeInTheDocument();
    expect(chocolateCakeElement).toBeInTheDocument();
});

// unit test for searching items

test('renders Item List with search items', () => {
    const onDelete = jest.fn();
    const onUpdate = jest.fn();
    render(<ItemList items={items} onDelete={onDelete} onUpdate={onUpdate} />);
    const searchElement = screen.getByLabelText(/Search/i);
    expect(searchElement).toBeInTheDocument();
});




 




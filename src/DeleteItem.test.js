// Generate unit test for DeleteItem.js
// Path: bakery-inventory/src/DeleteItem.test.js
//

import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import DeleteItem from './DeleteItem';


describe('DeleteItem', () => {

    let confirmMock = jest.fn();
    beforeEach(() => {
        confirmMock = jest.spyOn(global, 'confirm').mockReturnValueOnce(true);
    });

    afterEach(() => {
        confirmMock.mockRestore();
    });

    test('renders Delete Item button', () => {
        
        const item = {
            id: 1,
            name: 'Croissant',
            description: 'A butter flaky pastry',
            quantity: 10,
            price: 2.5,
        };
        const onDelete = jest.fn();
        render(<DeleteItem item={item} onDelete={onDelete} />);
        const buttonElement = screen.getByTestId('delete-button');
        expect(buttonElement).toBeInTheDocument();
    }
    );
    
    test('clicking the Delete button', () => {
        jest.spyOn(global, 'confirm').mockReturnValueOnce(true);
        const item = {
            id: 1,
            name: 'Croissant',
            description: 'A butter flaky pastry',
            quantity: 10,
            price: 2.5,
        };
        const onDelete = jest.fn();
        render(<DeleteItem item={item} onDelete={onDelete} />);
        const buttonElement = screen.getByTestId('delete-button');
        fireEvent.click(buttonElement);
        expect(onDelete).toHaveBeenCalled();
    });  // The test checks if the onDelete function is called when the Delete button is clicked
    
});


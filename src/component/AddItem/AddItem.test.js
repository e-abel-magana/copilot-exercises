// Generate unit test for AddItem component
// Path: bakery-inventory/src/component/AddItem/AddItem.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';

import AddItem from './AddItem';
import useStockContext from '../../context/StockContext/useStockContext';

// mock the useStockContext
jest.mock('../../context/StockContext/useStockContext');

describe("AddItem", ()=>{

    const mockStockContext = {
        handleAddItem: jest.fn(),
    };

    beforeEach(() => {
        useStockContext.mockReturnValue(mockStockContext);    
    });

    afterEach(() => {
        mockStockContext.handleAddItem.mockRestore();
    });

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
})


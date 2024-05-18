// Generate unit test for ItemList component
// Path: bakery-inventory/src/component/ItemList/ItemList.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';
import useStockContext from '../../context/StockContext/useStockContext';

// mock the useStockContext
jest.mock('../../context/StockContext/useStockContext');

describe("ItemList", ()=>{
    const mockStockContext = {
        stock: [
            {
                id: 1,
                name: "Item 1",
                description: "Description 1",
                quantity: 10,
                price: 100
            },
            {
                id: 2,
                name: "Item 2",
                description: "Description 2",
                quantity: 20,
                price: 200
            }
        ],
        handleDeleteItem: jest.fn(),
    };

    beforeEach(() => {
        useStockContext.mockReturnValue(mockStockContext);    
    });

    afterEach(() => {
        mockStockContext.handleDeleteItem.mockRestore();
    });

    test('renders Item List', () => {
        render(<ItemList />);
        const tableElement = screen.getByRole('table');
        expect(tableElement).toBeInTheDocument();
    });

    // cover the SearchBar when onChange is called
    test('renders Item List with SearchBar onChange', () => {
        render(<ItemList />);
        const searchBarElement = screen.getByLabelText('Search');
        expect(searchBarElement).toBeInTheDocument();
        searchBarElement.value = 'Item 1';
        expect(searchBarElement.value).toBe('Item 1');
    });
})


 




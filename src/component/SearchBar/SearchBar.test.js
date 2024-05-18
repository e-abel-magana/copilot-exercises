// Generate unit test for SearchBar

import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders Search Bar', () => {
    render(<SearchBar />);
    const inputElement = screen.getByLabelText(/Search/i);
    expect(inputElement).toBeInTheDocument();
});

// cover the value and onChange, expect the value
test('renders Search Bar with value', () => {
    render(<SearchBar value="search" />);
    const inputElement = screen.getByLabelText(/Search/i);
    expect(inputElement).toBeInTheDocument();
});

// provide onChange then expect it is called
test('renders Search Bar with onChange', () => {
    const onChange = jest.fn();
    render(<SearchBar onChange={onChange} />);
  
    // expect when value changes, onChange is called
    const inputElement = screen.getByLabelText(/Search/i);
    // mock the change event to call the onChange function
    fireEvent.change(inputElement, { target: { value: 'search' }});

    expect(onChange).toHaveBeenCalled();

});
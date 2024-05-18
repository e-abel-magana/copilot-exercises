// Generate unit test for Alert Component
// Path: bakery-inventory/src/component/Alert/Alert.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from './Alert';

test('renders Alert component', () => {
    render(<Alert />);
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
});

// cover the clear prop
test('renders Alert component with clear prop', () => {
    render(<Alert clear={true} />);
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
});

// cover the message prop
test('renders Alert component with message prop', () => {
    render(<Alert message="This is an alert message" />);
    const alertElement = screen.getByText(/This is an alert message/i);
    expect(alertElement).toBeInTheDocument();
});
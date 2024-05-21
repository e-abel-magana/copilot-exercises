// Generate unit test for StockAlerts component with mocking the useStockContext
// Path: bakery-inventory/src/component/StockAlerts/StockAlerts.test.js

import React from "react";
import { render, screen } from "@testing-library/react";

import StockAlerts from "./StockAlerts";

import useStockContext from "../../context/StockContext/useStockContext";

// mock the useStockContext
jest.mock("../../context/StockContext/useStockContext");

describe("StockAlerts", () => {
  const mockStockContext = {
    stock: [
      {
        id: 1,
        name: "Croissant",
        description: "A butter flaky pastry",
        quantity: 10,
        price: 2.5,
      },
      {
        id: 2,
        name: "Baguette",
        description: "A long thin loaf of French bread",
        quantity: 5,
        price: 1.5,
      },
    ],
    // alerts array with id, message and type
    alerts: [
      {
        id: 1,
        message: "Croissant is running low",
        type: "warning",
      },
      {
        id: 2,
        message: "Baguette is out of stock",
        type: "danger",
      },
      {
        id: 3,
        message: "Updated",
        type: "success",
      },
    ],
    handleUpdateModal: jest.fn(),
  };

  beforeEach(() => {
    useStockContext.mockReturnValue(mockStockContext);
  });

  afterEach(() => {
    useStockContext.mockRestore();
  });

  test("renders Stock Alerts", () => {
    render(<StockAlerts />);
  });

  // test the stock if the quantity of each item is 0
  // Component should display a message for each item that has a quantity of zero.

  test("renders out of stock items", () => {
    useStockContext.mockRestore();
    const newMockStockContext = {
      ...mockStockContext,
      stock: [
        ...mockStockContext.stock,
        {
          id: 3,
          name: "Ice tea",
          description: "Ice tea",
          quantity: 0,
          price: 2.5,
        },
      ],
    };
    useStockContext.mockReturnValue(newMockStockContext);
    render(<StockAlerts />);
    const outOfStockItems = screen.getAllByText(
      "Some items is out of stock! Please replenish the item(s) below",
    );

    const outOfStockText = screen.getAllByText(/Ice tea is out of stock!/i);
    expect(outOfStockItems).toHaveLength(1);
    expect(outOfStockText).toHaveLength(1);

    // click the button with id update-modal-stock-button
    const updateButton = screen.getByTestId("update-modal-stock-button");
    updateButton.click();

    // expect the update button to be clicked
    expect(updateButton).toBeInTheDocument();
    expect(mockStockContext?.handleUpdateModal).toHaveBeenCalled();
  });
});

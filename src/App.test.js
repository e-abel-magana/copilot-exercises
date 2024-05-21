// Create a unit test for App.js with mock useStockContext

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import useStockContext from "./context/StockContext/useStockContext";

// mock the useStockContext
jest.mock("./context/StockContext/useStockContext");

describe("App", () => {
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
        name: "Pain au Chocolat",
        description: "A buttery, flaky pastry filled with chocolate",
        quantity: 15,
        price: 3.5,
      },
    ],
    alerts: [],
    handleDeleteItem: jest.fn(),
    handleUpdateItem: jest.fn(),
    handleAddItem: jest.fn(),
    itemToUpdate: {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 10,
      price: 2.5,
    },
    handleCloseUpdateModal: jest.fn(),
    modalUpdateMode: "showAll",
  };

  beforeEach(() => {
    useStockContext.mockReturnValue(mockStockContext);
  });

  afterEach(() => {
    mockStockContext.handleDeleteItem.mockRestore();
    mockStockContext.handleUpdateItem.mockRestore();
    mockStockContext.handleAddItem.mockRestore();
    mockStockContext.handleCloseUpdateModal.mockRestore();
  });

  test("renders App component", () => {
    render(<App />);
    const titleElement = screen.getByText(/Bakery Inventory/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders Add Item form", () => {
    render(<App />);
    const nameElement = screen.getAllByLabelText(/Name/i);
    const descriptionElement = screen.getAllByLabelText(/Description/i);
    const quantityElement = screen.getAllByLabelText(/Quantity/i);
    const priceElement = screen.getAllByLabelText(/Price/i);

    expect(nameElement[0]).toBeInTheDocument();
    expect(descriptionElement[0]).toBeInTheDocument();
    expect(quantityElement[0]).toBeInTheDocument();
    expect(priceElement[0]).toBeInTheDocument();
  });
});

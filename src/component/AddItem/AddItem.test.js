// Generate unit test for AddItem component
// Path: bakery-inventory/src/component/AddItem/AddItem.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import AddItem from "./AddItem";
import useStockContext from "../../context/StockContext/useStockContext";

// mock the useStockContext
jest.mock("../../context/StockContext/useStockContext");

describe("AddItem", () => {
  const mockStockContext = {
    handleAddItem: jest.fn(),
    handleCloseAddModal: jest.fn(),
  };

  beforeEach(() => {
    useStockContext.mockReturnValue(mockStockContext);
  });

  afterEach(() => {
    mockStockContext.handleAddItem.mockRestore();
    mockStockContext.handleCloseAddModal.mockRestore();
  });

  test("renders Add Item form", () => {
    render(<AddItem />);
    const nameElement = screen.getByLabelText(/Name/i);
    const descriptionElement = screen.getByLabelText(/Description/i);
    const quantityElement = screen.getByLabelText(/Quantity/i);
    const priceElement = screen.getByLabelText(/Price/i);
    const buttonElement = screen.getByTestId("modal-add-button");

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(quantityElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  // test if the modal is closed when the close button is clicked

  test("closes the modal when the close button is clicked", () => {
    render(<AddItem />);
    const cancelButton = screen.getByTestId("modal-cancel-button");
    cancelButton.click();
    expect(mockStockContext.handleCloseAddModal).toHaveBeenCalledTimes(1);
  });

  // test if the form is submitted when the add button is clicked
  test("submits the form when the add button is clicked", () => {
    // get the form elements in material ui Textfield
    render(<AddItem />);
    const nameElement = screen.getByLabelText(/Name/i);
    const descriptionElement = screen.getByLabelText(/Description/i);
    const quantityElement = screen.getByLabelText(/Quantity/i);
    const priceElement = screen.getByLabelText(/Price/i);

    // fill the form using fireevent
    fireEvent.change(nameElement, { target: { value: "Croissant" } });
    fireEvent.change(descriptionElement, {
      target: { value: "A butter flaky pastry" },
    });
    fireEvent.change(quantityElement, { target: { value: 10 } });
    fireEvent.change(priceElement, { target: { value: 2.5 } });

    // submit the form
    const addButton = screen.getByTestId("modal-add-button");
    addButton.click();
    expect(mockStockContext.handleAddItem).toHaveBeenCalledTimes(1);
  });
});

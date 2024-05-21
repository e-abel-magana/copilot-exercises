// Generate unit test for UpdateItem with mock useStockContext
// Path: bakery-inventory/src/component/UpdateItem/UpdateItem.test.js

import React from "react";
import { render, screen } from "@testing-library/react";

import UpdateItem from "./UpdateItem";
import useStockContext from "../../context/StockContext/useStockContext";

// mock the useStockContext
jest.mock("../../context/StockContext/useStockContext");

describe("UpdateItem", () => {
  const mockStockContext = {
    handleUpdateItem: jest.fn(),
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
    mockStockContext.handleUpdateItem.mockRestore();
    mockStockContext.handleCloseUpdateModal.mockRestore();
  });

  test("renders Update Item form", () => {
    render(<UpdateItem />);
    const nameElement = screen.getByLabelText(/Name/i);
    const descriptionElement = screen.getByLabelText(/Description/i);
    const quantityElement = screen.getByLabelText(/Quantity/i);
    const priceElement = screen.getByLabelText(/Price/i);
    const buttonElement = screen.getByTestId("modal-update-button");

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(quantityElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  // test if the modal is closed when the close button is clicked

  test("closes the modal when the close button is clicked", () => {
    render(<UpdateItem />);
    const cancelButton = screen.getByTestId("modal-cancel-button");
    cancelButton.click();
    expect(mockStockContext.handleCloseUpdateModal).toHaveBeenCalledTimes(1);
  });

  // test if the form is submitted when the update button is clicked

  test("submits the form when the update button is clicked", () => {
    render(<UpdateItem />);
    const updateButton = screen.getByTestId("modal-update-button");
    updateButton.click();
    expect(mockStockContext.handleUpdateItem).toHaveBeenCalledTimes(1);
  });

  // test when modalUpdateMode is 'showOnlyQuantity'

  test("renders Update Item form with showOnlyQuantity mode", () => {
    mockStockContext.modalUpdateMode = "showOnlyQuantity";
    render(<UpdateItem />);
    const nameElement = screen.queryByLabelText(/Name/i);
    const descriptionElement = screen.queryByLabelText(/Description/i);
    const quantityElement = screen.getByLabelText(/Quantity/i);
    const priceElement = screen.queryByLabelText(/Price/i);
    const buttonElement = screen.getByTestId("modal-update-button");

    expect(nameElement).toBeNull();
    expect(descriptionElement).toBeNull();
    expect(quantityElement).toBeInTheDocument();
    expect(priceElement).toBeNull();
    expect(buttonElement).toBeInTheDocument();
  });

  // test when modalUpdateMode is 'showAll'

  test("renders Update Item form with showAll mode", () => {
    mockStockContext.modalUpdateMode = "showAll";
    render(<UpdateItem />);
    const nameElement = screen.getByLabelText(/Name/i);
    const descriptionElement = screen.getByLabelText(/Description/i);
    const quantityElement = screen.getByLabelText(/Quantity/i);
    const priceElement = screen.getByLabelText(/Price/i);
    const buttonElement = screen.getByTestId("modal-update-button");

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(quantityElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});

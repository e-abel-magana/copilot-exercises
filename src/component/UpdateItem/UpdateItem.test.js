// Generate unit test for UpdateItem with mock useStockContext
// Path: bakery-inventory/src/component/UpdateItem/UpdateItem.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

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

  test("should cover the condition onSubmit and display the alert function", () => {
    // mock alert
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<UpdateItem />);
    const nameElement = screen.getByLabelText(/Name/i);
    const descriptionElement = screen.getByLabelText(/Description/i);
    const quantityElement = screen.getByLabelText(/Quantity/i);
    const priceElement = screen.getByLabelText(/Price/i);

    // fill the form using fireEvent
    fireEvent.change(nameElement, { target: { value: "" } });
    fireEvent.change(descriptionElement, {
      target: { value: "" },
    });
    fireEvent.change(quantityElement, { target: { value: "" } });
    fireEvent.change(priceElement, { target: { value: "" } });

    expect(nameElement.value).toBe("");
    expect(descriptionElement.value).toBe("");
    expect(quantityElement.value).toBe("");
    expect(priceElement.value).toBe("");

    const updateButton = screen.getByTestId("modal-update-button");
    updateButton.click();
    expect(mockStockContext.handleUpdateItem).not.toHaveBeenCalled();
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

  // test the handleChange function

  test("handleChange function", () => {
    render(<UpdateItem />);
    const nameElement = screen.getByLabelText(/Name/i);
    const descriptionElement = screen.getByLabelText(/Description/i);
    const quantityElement = screen.getByLabelText(/Quantity/i);
    const priceElement = screen.getByLabelText(/Price/i);

    // fill the form using fireEvent
    fireEvent.change(nameElement, { target: { value: "Change - Croissant" } });
    fireEvent.change(descriptionElement, {
      target: { value: "Change - A butter flaky pastry" },
    });
    fireEvent.change(quantityElement, { target: { value: 12 } });
    fireEvent.change(priceElement, { target: { value: 2.6 } });

    expect(nameElement.value).toBe("Change - Croissant");
    expect(descriptionElement.value).toBe("Change - A butter flaky pastry");
    expect(quantityElement.value).toBe("12");
    expect(priceElement.value).toBe("2.6");
  });
});

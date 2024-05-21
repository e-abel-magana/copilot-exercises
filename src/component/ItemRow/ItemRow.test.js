// Generate unit test for ItemRow with mocking the useStockContext

import React from "react";
import { render, screen, act } from "@testing-library/react";

import ItemRow from "./ItemRow";
import useStockContext from "../../context/StockContext/useStockContext";

// mock the useStockContext
jest.mock("../../context/StockContext/useStockContext");

describe("ItemRow", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  const mockStockContext = {
    handleDeleteItem: jest.fn(),
    handleUpdateModal: jest.fn(),
  };

  beforeEach(() => {
    useStockContext.mockReturnValue(mockStockContext);
  });

  afterEach(() => {
    mockStockContext.handleDeleteItem.mockRestore();
    mockStockContext.handleUpdateModal.mockRestore();
  });

  test("renders Item Row", () => {
    render(
      <ItemRow
        item={{
          id: 1,
          name: "Item 1",
          description: "Description 1",
          quantity: 10,
          price: 100,
        }}
      />,
    );
    const tableRowElement = screen.getByRole("row");
    expect(tableRowElement).toBeInTheDocument();
  });

  test("renders Item Row with Delete button", () => {
    jest.spyOn(global, "confirm").mockReturnValueOnce(true);
    render(
      <ItemRow
        item={{
          id: 1,
          name: "Item 1",
          description: "Description 1",
          quantity: 10,
          price: 100,
        }}
      />,
    );
    const buttonElement = screen.getByTestId("delete-button");

    // click the button
    act(() => {
      // click the buttonElement
      buttonElement.click();
    });
    expect(mockStockContext.handleDeleteItem).toHaveBeenCalled();

    expect(buttonElement).toBeInTheDocument();
  });

  // cover the Update Button when clicked

  test("clicking the Update button", () => {
    const item = {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 10,
      price: 2.5,
    };
    render(<ItemRow item={item} />);
    const buttonElement = screen.getByTestId("update-modal-button");

    // click the button
    act(() => {
      // click the buttonElement
      buttonElement.click();
    });
    expect(mockStockContext.handleUpdateModal).toHaveBeenCalled();
    expect(buttonElement).toBeInTheDocument();
  });
});

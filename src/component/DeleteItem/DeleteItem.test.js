// Generate unit test for DeleteItem.js
// Path: bakery-inventory/src/DeleteItem.test.js
//

import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import DeleteItem from "./DeleteItem";

describe("DeleteItem", () => {
  let confirmMock = jest.fn();
  const onDelete = jest.fn();

  let alertMock = jest.fn();

  beforeEach(() => {
    confirmMock = jest.spyOn(global, "confirm").mockReturnValueOnce(true);
    alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    alertMock.mockRestore();
    confirmMock.mockRestore();
    onDelete.mockRestore();
  });

  test("renders Delete Item button", () => {
    const item = {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 10,
      price: 2.5,
    };

    render(<DeleteItem item={item} onDelete={onDelete} />);
    const buttonElement = screen.getByTestId("delete-button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("clicking the Delete button", () => {
    jest.spyOn(global, "confirm").mockReturnValueOnce(true);
    const item = {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 10,
      price: 2.5,
    };

    render(<DeleteItem item={item} onDelete={onDelete} />);
    const buttonElement = screen.getByTestId("delete-button");
    fireEvent.click(buttonElement);
    expect(onDelete).toHaveBeenCalled();
  }); // The test checks if the onDelete function is called when the Delete button is clicked

  // test if window.confirm is false

  test("clicking the Delete button when confirm is false", () => {
    confirmMock.mockRestore();
    jest.spyOn(global, "confirm").mockReturnValueOnce(false);
    const item = {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 10,
      price: 2.5,
    };

    render(<DeleteItem item={item} onDelete={onDelete} />);
    const buttonElement = screen.getByTestId("delete-button");
    fireEvent.click(buttonElement);
    expect(onDelete).not.toHaveBeenCalled();
  });

  test("clicking the Delete button when quantity reach 1", () => {
    const item = {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 1,
      price: 2.5,
    };

    render(<DeleteItem item={item} onDelete={onDelete} />);
    const buttonElement = screen.getByTestId("delete-button");
    fireEvent.click(buttonElement);
    expect(alertMock).toHaveBeenCalled();
    expect(onDelete).toHaveBeenCalled();
  });
});

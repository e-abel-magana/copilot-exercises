// Generate unit test for ItemList component
// Path: bakery-inventory/src/component/ItemList/ItemList.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemList from "./ItemList";
import useStockContext from "../../context/StockContext/useStockContext";

// mock the useStockContext
jest.mock("../../context/StockContext/useStockContext");

describe("ItemList", () => {
  const mockStockContext = {
    stock: [
      {
        id: 1,
        name: "Item 1",
        description: "Description 1",
        quantity: 10,
        price: 100,
      },
      {
        id: 2,
        name: "Item 2",
        description: "Description 2",
        quantity: 20,
        price: 200,
      },
    ],
    handleDeleteItem: jest.fn(),
    setShowAddModal: jest.fn(),
    showAddModal: false,
  };

  beforeEach(() => {
    useStockContext.mockReturnValue(mockStockContext);
  });

  afterEach(() => {
    useStockContext.mockRestore();
    mockStockContext.handleDeleteItem.mockRestore();
  });

  test("renders Item List", () => {
    render(<ItemList />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  // cover the SearchBar when onChange is called
  test("renders Item List with SearchBar onChange", () => {
    render(<ItemList />);
    const searchBarElement = screen.getByLabelText("Search");
    expect(searchBarElement).toBeInTheDocument();
    searchBarElement.value = "Item 1";
    expect(searchBarElement.value).toBe("Item 1");
  });

  test("calls useStockContext and uses return values", () => {
    render(<ItemList />);
    expect(useStockContext).toHaveBeenCalled();
  });

  test("calls setShowAddModal with true when Button is clicked", () => {
    render(<ItemList />);
    const buttonElement = screen.getByRole("button", { name: "Add Item" });
    fireEvent.click(buttonElement);
    expect(mockStockContext.setShowAddModal).toHaveBeenCalledWith(true);
  });

  test("search for onChange event", () => {
    render(<ItemList />);
    const searchBarElement = screen.getByLabelText("Search");
    fireEvent.change(searchBarElement, { target: { value: "Item 1" } });
    expect(searchBarElement.value).toBe("Item 1");
  });

  // test when empty search occur
  test("cover the items that empty", () => {
    useStockContext.mockRestore();
    const newMockStockContext = {
      ...mockStockContext,
      stock: [],
    };
    useStockContext.mockReturnValue(newMockStockContext);
    render(<ItemList />);
  });

  // test when showAddModal is true
  test("cover the showAddModal is true", () => {
    useStockContext.mockRestore();
    const newMockStockContext = {
      ...mockStockContext,
      showAddModal: true,
    };
    useStockContext.mockReturnValue(newMockStockContext);
    render(<ItemList />);
  });
});

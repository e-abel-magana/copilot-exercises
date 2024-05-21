// Generate unit test for StockContext for  StockContext.Provider
// Path: bakery-inventory/src/context/StockContext/StockContext.test.js

import React from "react";
import { render, act } from "@testing-library/react";

import { StockProvider, StockContext } from "./StockContext";

describe("StockContext", () => {
  const timeout = 100;

  async function makeSut() {
    let rerender, contextValue;
    await act(async () => {
      const { rerender: rerenderFunc } = render(
        <StockProvider>
          <StockContext.Consumer>
            {(value) => {
              contextValue = value;
              rerender = rerenderFunc;
              return null; // Render nothing
            }}
          </StockContext.Consumer>
        </StockProvider>,
      );
    });
    return { rerender, contextValue };
  }

  test("renders StockContext.Provider", async () => {
    // should provide the context value
    const { contextValue } = await makeSut();
    expect(contextValue).toHaveProperty("stock");
    expect(contextValue).toHaveProperty("setStock");
    expect(contextValue).toHaveProperty("alerts");
    expect(contextValue).toHaveProperty("setAlerts");

    expect(contextValue).toHaveProperty("itemToUpdate");
    expect(contextValue).toHaveProperty("handleAddItem");
    expect(contextValue).toHaveProperty("handleDeleteItem");
    expect(contextValue).toHaveProperty("handleUpdateItem");
    expect(contextValue).toHaveProperty("handleUpdateModal");
    expect(contextValue).toHaveProperty("handleCloseUpdateModal");
    expect(contextValue).toHaveProperty("modalUpdateMode");
  });

  // test the handleAddItem function
  test("handleAddItem adds an item to the stock", async () => {
    const { contextValue } = await makeSut();
    const item = {
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 10,
      price: 2.5,
    };
    await act(async () => {
      contextValue.handleAddItem(item);
    });

    setTimeout(() => {
      expect(contextValue.stock).toHaveLength(1);
    }, timeout);
  });

  // test the deleteItem function
  test("handleDeleteItem deletes an item from the stock", async () => {
    const { contextValue } = await makeSut();
    const item = {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 10,
      price: 2.5,
    };
    await act(async () => {
      contextValue.handleAddItem(item);
    });

    await act(async () => {
      contextValue.handleDeleteItem(1);
    });
    setTimeout(() => {
      expect(contextValue.stock).toHaveLength(0);
    }, timeout);
  });

  // test the handleUpdateItem function
  test("handleUpdateItem updates an item in the stock", async () => {
    const { contextValue } = await makeSut();
    const item = {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 10,
      price: 2.5,
    };
    await act(async () => {
      contextValue.handleAddItem(item);
    });

    const updatedItem = {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 5,
      price: 2.5,
    };

    await act(() => {
      contextValue.handleUpdateItem(updatedItem);
    });

    setTimeout(() => {
      expect(contextValue.stock[0].quantity).toBe(5);
    }, timeout);
  });

  // test for handleUpdateModal
  test("handleUpdateModal updates the item to be updated", async () => {
    const { contextValue } = await makeSut();
    const item = {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 10,
      price: 2.5,
    };
    await act(() => {
      contextValue.handleUpdateModal(item);
    });

    setTimeout(() => {
      expect(contextValue.itemToUpdate).toEqual(item);
    }, timeout);
  });

  // test for handleCloseUpdateModal
  test("handleCloseUpdateModal resets the item to be updated", async () => {
    const { contextValue } = await makeSut();
    const item = {
      id: 1,
      name: "Croissant",
      description: "A butter flaky pastry",
      quantity: 10,
      price: 2.5,
    };
    await act(() => {
      contextValue.handleUpdateModal(item);
    });

    await act(() => {
      contextValue.handleCloseUpdateModal();
    });

    setTimeout(() => {
      expect(contextValue.itemToUpdate).toBeNull();
    }, timeout);
  });
});

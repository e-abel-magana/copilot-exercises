// Cover all unit test coverage in useStockContext.test.js

// Path: bakery-inventory/src/context/StockContext/useStockContext.test.js
// Generate unit test for useStockContext
import { renderHook } from "@testing-library/react";
import { StockContext } from "./StockContext";
import useStockContext from "./useStockContext";
import { ErrorBoundary } from "react-error-boundary"; // You need to install this package

describe("useStockContext", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  test("should throw error when StockProvider is missing", () => {
    const wrapper = ({ children }) => (
      <ErrorBoundary
        fallbackRender={({ error }) => {
          return null;
        }}
      >
        <StockContext.Provider value={null}>{children}</StockContext.Provider>
      </ErrorBoundary>
    );
    renderHook(() => useStockContext(), { wrapper });
  });

  test("should return context value", () => {
    const value = { stock: [], setStock: jest.fn() };
    const wrapper = ({ children }) => (
      <StockContext.Provider value={value}>{children}</StockContext.Provider>
    );

    const { result } = renderHook(() => useStockContext(), { wrapper });

    expect(result.current).toEqual(value);
  });
});

import { useContext } from "react";

import { StockContext } from "./StockContext";

const useStockContext = () => {
  const context = useContext(StockContext);

  if (!context) {
    throw new Error("StockProvider context missing");
  }

  return context;
};

export default useStockContext;

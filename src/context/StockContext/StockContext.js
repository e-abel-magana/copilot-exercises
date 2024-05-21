import { useState, createContext } from "react";

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState([]);
  const [itemToUpdate, setItemToUpdate] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [modalUpdateMode, setModalUpdateMode] = useState("showAll");
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddItem = (item) => {
    setStock((prevItems) => [
      ...prevItems,
      { id: Date.now().toString(), ...item },
    ]);
    setAlerts((prevAlerts) => [
      ...prevAlerts,
      {
        id: Date.now().toString(),
        message: "Item added successfully!",
        type: "success",
      },
    ]);
  };

  const handleDeleteItem = (id) => {
    setStock((prevItems) => prevItems.filter((item) => item.id !== id));
    setAlerts((prevAlerts) => [
      ...prevAlerts,
      {
        id: Date.now().toString(),
        message: "Item deleted successfully!",
        type: "success",
      },
    ]);
  };

  const handleUpdateItem = (updatedItem) => {
    setStock((prevItems) =>
      prevItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
    );
    setAlerts((prevAlerts) => [
      ...prevAlerts,
      {
        id: Date.now().toString(),
        message: "Item updated successfully!",
        type: "success",
      },
    ]);
  };

  const handleUpdateModal = (item, mode = "showAll") => {
    setItemToUpdate(item);
    setModalUpdateMode(mode);
  };

  const handleCloseUpdateModal = () => {
    setItemToUpdate(null);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const value = {
    stock,
    setStock,
    alerts,
    setAlerts,
    showAddModal,
    setShowAddModal,
    handleCloseAddModal,
    itemToUpdate,
    handleAddItem,
    handleDeleteItem,
    handleUpdateItem,
    handleUpdateModal,
    handleCloseUpdateModal,
    modalUpdateMode,
  };

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
};

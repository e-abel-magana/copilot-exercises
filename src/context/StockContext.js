import {useState, createContext} from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState([]);
  const [itemToUpdate, setItemToUpdate] = useState(null);
  const [alerts, setAlerts] = useState([]);

  const handleAddItem = (item) => {
    setStock(prevItems => [...prevItems, { id: Date.now().toString(), ...item }]);
    setAlerts(prevAlerts => [...prevAlerts, { id: Date.now().toString(), message: 'Item added successfully!', type: 'success' }]);
  };

  const handleDeleteItem = (id) => {
    setStock(prevItems => prevItems.filter(item => item.id !== id));
    setAlerts(prevAlerts => [...prevAlerts, { id: Date.now().toString(), message: 'Item deleted successfully!', type: 'success' }]);
  };

  const handleUpdateItem = (updatedItem) => {
    setStock(prevItems => prevItems.map(item => item.id === updatedItem.id ? updatedItem : item));
    setAlerts(prevAlerts => [...prevAlerts, { id: Date.now().toString(), message: 'Item updated successfully!', type: 'success' }]);
  };

  const handleUpdateModal = (item) => {
    setItemToUpdate(item);
  };

  const handleCloseModal = () => {
    setItemToUpdate(null);
  };


  const value = {
    stock,
    setStock,
    alerts,
    setAlerts,
    itemToUpdate,
    handleAddItem,
    handleDeleteItem,
    handleUpdateItem,
    handleUpdateModal,
    handleCloseModal
  }

  return (
    <StockContext.Provider value={value}>
      {children}
    </StockContext.Provider>
  );
};
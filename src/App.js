// App.js
import React, { useState } from 'react';
import './App.scss';
import ItemList from './ItemList';
import AddItem from './AddItem';
import Alert from './Alert';
import Typography from '@material-ui/core/Typography';

function App() {
  const [items, setItems] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const handleAddItem = (item) => {
    setItems(prevItems => [...prevItems, { id: Date.now().toString(), ...item }]);
    setAlerts(prevAlerts => [...prevAlerts, { id: Date.now().toString(), message: 'Item added successfully!', type: 'success' }]);
  };

  const handleDeleteItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    setAlerts(prevAlerts => [...prevAlerts, { id: Date.now().toString(), message: 'Item deleted successfully!', type: 'success' }]);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems(prevItems => prevItems.map(item => item.id === updatedItem.id ? updatedItem : item));
    setAlerts(prevAlerts => [...prevAlerts, { id: Date.now().toString(), message: 'Item updated successfully!', type: 'success' }]);
  };

  return (
    <div className="App">
      <Typography variant="h2">Bakery Inventory Management System</Typography>
      {alerts.map(alert => <Alert key={alert.id} message={alert.message} type={alert.type} />)}
      <AddItem onAdd={handleAddItem} />
      <ItemList items={items} onDelete={handleDeleteItem} onUpdate={handleUpdateItem} />
    </div>
  );
}

export default App;
// AddItem.js
import { useState, useContext } from 'react';
import './AddItem.scss';
import { Button, TextField } from '@mui/material';

import { StockContext } from '../../context/StockContext';
 
function AddItem() {

  const { handleAddItem: onAdd } = useContext(StockContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name, description, quantity, price });
    setName('');
    setDescription('');
    setQuantity('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <TextField label="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required 
          InputProps={{ inputProps: { min: 0 } }}
      />
      <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required
          InputProps={{ inputProps: { min: 0 } }}
      />
      <Button  type="submit" variant="contained" color="primary">Add Item</Button>
    </form>
  );
}
  
export default AddItem;

 
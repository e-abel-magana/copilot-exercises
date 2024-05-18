import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import styles from './UpdateItem.module.scss';

function UpdateItem({ item, onUpdate, onClose }) {
  const [updatedItem, setUpdatedItem] = useState(item);

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!updatedItem.name || !updatedItem.description || !updatedItem.quantity || !updatedItem.price) {
      alert('All fields are required');
      return;
    }

    onUpdate(updatedItem);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Update Item</DialogTitle>
      <DialogContent>
        <div className={styles.body}>
          <TextField name="name" label="Name" value={updatedItem.name} onChange={handleChange} fullWidth required />
          <TextField name="description" label="Description" value={updatedItem.description} onChange={handleChange} fullWidth required />
          <TextField name="quantity" type="number" label="Quantity" value={updatedItem.quantity} onChange={handleChange} fullWidth required />
          <TextField name="price" type="number" label="Price" value={updatedItem.price} onChange={handleChange} fullWidth required />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateItem;
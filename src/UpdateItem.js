import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';

function UpdateItem({ item, onUpdate, onClose }) {
  const [updatedItem, setUpdatedItem] = useState(item);

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onUpdate(updatedItem);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Update Item</DialogTitle>
      <DialogContent>
        <TextField name="name" label="Name" value={updatedItem.name} onChange={handleChange} fullWidth />
        <TextField name="description" label="Description" value={updatedItem.description} onChange={handleChange} fullWidth />
        <TextField name="quantity" label="Quantity" value={updatedItem.quantity} onChange={handleChange} fullWidth />
        <TextField name="price" label="Price" value={updatedItem.price} onChange={handleChange} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateItem;
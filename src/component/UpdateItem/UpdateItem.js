import  { useState, useContext } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import styles from './UpdateItem.module.scss';

import { StockContext } from '../../context/StockContext';

function UpdateItem() {

  const { 
    itemToUpdate: item,
    handleUpdateItem: onUpdate, 
    handleCloseModal: onClose,
    modalUpdateMode: mode,
  } = useContext(StockContext);

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
          {mode === "showAll" && <TextField name="name" label="Name" value={updatedItem.name} onChange={handleChange} fullWidth required /> } 
          {mode === "showOnlyQuantity"  && <div>Name: {updatedItem.name}</div>}

          {mode === "showAll" && <TextField name="description" label="Description" value={updatedItem.description} onChange={handleChange} fullWidth required /> }
          
          {(mode === "showAll" || mode === "showOnlyQuantity") && <TextField name="quantity" type="number" label="Quantity" value={updatedItem.quantity} onChange={handleChange} fullWidth required 
            InputProps={{ inputProps: { min: 0 } }}
          />
          }
          {mode === "showAll" &&
            <TextField name="price" min={0} type="number" label="Price" value={updatedItem.price} onChange={handleChange} fullWidth required 
              InputProps={{ inputProps: { min: 0 } }}
            />
          } 
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
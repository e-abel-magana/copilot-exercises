/* eslint-disable eqeqeq */
// DeleteItem.js
import React from 'react';
import './DeleteItem.scss';
 
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

function DeleteItem({ item, onDelete }) {
    const handleDelete = () => {
        if (item.quantity == 1) {
            alert('The stock quantity of this item will reach zero after this deletion. Please replenish the stock.');
        }
         
        if (window.confirm('Are you sure you want to delete this item?')) {
            onDelete(item.id);  
        }
    };

  return (
    <Button data-testid="delete-button" onClick={() => handleDelete()}>
        <DeleteIcon />
    </Button>
  
  );
}

export default DeleteItem;

 
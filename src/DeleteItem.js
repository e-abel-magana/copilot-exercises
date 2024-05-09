// DeleteItem.js
import React from 'react';
import './DeleteItem.scss';
import Button from '@material-ui/core/Button';

function DeleteItem({ id, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      onDelete(id);
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
  );
}

export default DeleteItem;

 
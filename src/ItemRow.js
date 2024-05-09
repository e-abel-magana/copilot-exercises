// ItemRow.js
import React from 'react';
import { TableRow, TableCell, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function ItemRow({ item, onDelete, onUpdate }) {
  return (
    <TableRow key={item.id}>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.description}</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>
        <IconButton onClick={() => onDelete(item.id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => onUpdate(item)}>
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default ItemRow;
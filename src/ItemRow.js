/* eslint-disable eqeqeq */
import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteItem from './DeleteItem';

function ItemRow({ item, onDelete, onUpdate }) {
    return (
        <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.description}</TableCell>
        <TableCell>{item.quantity}</TableCell>
        <TableCell>{item.price}</TableCell>
        <TableCell>
            <DeleteItem item={item} onDelete={onDelete} />
            <Button onClick={() => onUpdate(item)}>
                <EditIcon />
            </Button>
        </TableCell>
        </TableRow>
    );
}

export default ItemRow;
/* eslint-disable eqeqeq */
import {useContext} from 'react';
import { TableRow, TableCell, Button } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteItem from '../DeleteItem';

import { StockContext } from '../../context/StockContext';

function ItemRow({ item }) {

    const { 
        handleDeleteItem: onDelete, 
        handleUpdateModal: onUpdate,
    } = useContext(StockContext);

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
// ItemList.js
import { useState, useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchBar from '../SearchBar';
import ItemRow from '../ItemRow';
import UpdateItem from '../UpdateItem';

import { StockContext } from '../../context/StockContext';

function ItemList() {

  const { 
    stock: items, 
    handleUpdateItem: onUpdate, 
    handleDeleteItem: onDelete 
  } = useContext(StockContext);

  const [search, setSearch] = useState('');
  const [itemToUpdate, setItemToUpdate] = useState(null);

  const handleUpdate = (item) => {
    setItemToUpdate(item);
  };

  const handleClose = () => {
    setItemToUpdate(null);
  };

  return (
    <div>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
                {items.filter(item => item.name.includes(search)).length > 0 ? (
                    items.filter(item => item.name.includes(search)).map((item) => (
                    <ItemRow key={item.id} item={item} onDelete={onDelete} onUpdate={handleUpdate} />
                    ))
                ) : (
                    <TableRow>
                    <TableCell colSpan={5} align="center">No items to display</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
      </TableContainer>
      {itemToUpdate && <UpdateItem item={itemToUpdate} onUpdate={onUpdate} onClose={handleClose} />}
    </div>
  );
}

export default ItemList;
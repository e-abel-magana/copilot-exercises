// ItemList.js
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchBar from '../SearchBar';
import ItemRow from '../ItemRow';
import UpdateItem from '../UpdateItem';

import useStockContext from '../../context/StockContext/useStockContext';

function ItemList() {

  const { 
    stock: items, 
    itemToUpdate,
  } = useStockContext();

  const [search, setSearch] = useState('');
 
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
                    <ItemRow key={item.id} item={item} />
                    ))
                ) : (
                    <TableRow>
                    <TableCell colSpan={5} align="center">No items to display</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
      </TableContainer>
      {itemToUpdate && <UpdateItem />}
    </div>
  );
}

export default ItemList;
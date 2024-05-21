// ItemList.js
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import SearchBar from "../SearchBar";
import ItemRow from "../ItemRow";
import UpdateItem from "../UpdateItem";
import AddItem from "../AddItem";

import useStockContext from "../../context/StockContext/useStockContext";
import styles from "./ItemList.module.scss";

function ItemList() {
  const {
    stock: items,
    itemToUpdate,
    showAddModal,
    setShowAddModal,
  } = useStockContext();

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className={styles.actionButtons}>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={() => setShowAddModal(true)}
        >
          Add Item
        </Button>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
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
            {items.filter((item) => item.name.includes(search)).length > 0 ? (
              items
                .filter((item) => item.name.includes(search))
                .map((item) => <ItemRow key={item.id} item={item} />)
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No items to display
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {showAddModal && <AddItem />}
      {itemToUpdate && <UpdateItem />}
    </div>
  );
}

export default ItemList;

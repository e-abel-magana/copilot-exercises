/* eslint-disable eqeqeq */
import { TableRow, TableCell, Button } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteItem from "../DeleteItem";

import useStockContext from "../../context/StockContext/useStockContext";

function ItemRow({ item }) {
  const { handleDeleteItem: onDelete, handleUpdateModal: onUpdate } =
    useStockContext();

  return (
    <TableRow key={item.id}>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.description}</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>
        <DeleteItem item={item} onDelete={onDelete} />
        <Button
          data-testid="update-modal-button"
          onClick={() => onUpdate(item)}
        >
          <EditIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ItemRow;
